#!/usr/bin/env node

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/3.
 */


var
  fs = require('fs'),
  path = require('path'),
  shjs = require('shelljs'),
  clean   = require('../platforms/browser/cordova/lib/clean'),
  check_reqs = require('../platforms/browser/cordova/lib/check_reqs'),
  platformWwwDir          = path.join('..' , 'platforms', 'browser', 'www');
  platformBuildDir          = path.join('..' , 'platforms', 'browser', 'www', 'build');


exports.cleanBrowser = function() {
  // Check that requirements are (stil) met
  if (!check_reqs.run()) {
    console.error('Please make sure you meet the software requirements in order to clean an browser cordova project');
    process.exit(2);
  }
  console.log('Cleaning Browser project..');
  try {
    if (fs.existsSync(platformBuildDir)) {
      console.log('Removing dir', platformBuildDir);
      shjs.rm('-r', platformBuildDir);
      console.log('Done...');
    }
  }
  catch(err) {
    console.log('could not remove '+platformBuildDir+' : '+err.message);
  }
}