# BI APP
BI APP端代码, 支持IOS, Android

## Getting Started

项目需求: 详细安装见下文
- Node.js 6+
- Java Development Kit (JDK)
- Android SDK
- SDK Packages
- Gradle
- Ionic CLI
- Cordova 以及相关插件 (插件可见package.json)

## 基本安装

- 安装Ionic CLI and Cordova

~~~bash
$ npm install -g ionic cordova
~~~

- 项目初始化

~~~bash
进入项目目录 
$ mkdir www

添加开发用平台
$ cordova platform add ios
$ cordova platform add android

安装依赖库
$ npm install
~~~

- (备选)安装PHPStorm插件支持

~~~bash
菜单 File > Settings > Plugin
搜索 Cordova, 安装 PhoneGap/Cordova Plugin
~~~

> Android 详细在线文档 [Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)
    
    1. 安装 [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    2. 安装 [Android SDK](https://developer.android.com/studio/index.html) 
    3. 添加 SDK Packages, BI项目选择android 5+
    4. 安装 [Gradle](https://gradle.org/install/)  `$ sdk install gradle 4.0.1`
       windows系统使用解压缩安装法，下载完整4.0.1安装包 解压缩 并设置PATH变量
 
* Windows OS 注意添加环境变量

    1. 添加自定义用户变量 `JAVA_HOME`, 对应JDK安装路径
    2. 添加自定义用户变量 `ANDROID_HOME` 对应Android SDK
    3. 添加PATH自定义值, 内容为Android SDK安裝目录下的`tools`, `tools/bin`, and `platform-tools`文件夹
    4. 添加PATH自定义值，内容为Gradle的解压缩后对应的bin目录

    例如
    - `ANDROID_HOME` `C:\Users\{username}\AppData\Local\Android\sdk`
    - `JAVA_HOME` `C:\Program Files\Java\jdk1.8.0_141`
    - `PATH` `C:\Users\{username}\AppData\Local\Android\sdk\tools\bin;C:\Users\{username}\AppData\Local\Android\sdk\tools;C:\Users\{username}\AppData\Local\Android\sdk\platform-tools;E:\Program Files\Gradle\gradle-4.0.1\bin`

    ** win7系统请注意
    如果启动时候报以下错误，需要添加自定义用户变量 
    
    - `_JAVA_OPTIONS` 值为 `-Xmx512M`
    - `GRADLE_OPTS` 值为 `-Dorg.gradle.jvmargs=-Xmx512m`
    
    ~~~bash
    Error occurred during initialization of VM
    Could not reserve enough space for XXXXKB object heap
    ~~~

* OS X and Linux
    1. `ANDROID_HOME` 编辑~/.bash_profile文件 在文件末尾添加行
      export ANDROID_HOME=/Development/android-sdk/
    2. `PATH`  编辑~/.bash_profile文件 更新PATH变量 
      export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools
    3. 打开terminal 执行刷新命令
    ~~~bash
    $ source ~/.bash_profile
    ~~~

> IOS 详细在线文档 [iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)

    1. App store 安裝Xcode
    2. 安装完后执行
    ~~~bash
    $ xcode-select --install
    ~~~
    3. 发布工具
    ~~~bash
    $ npm install -g ios-deploy
    ~~~
            
- 测试

- Android设备与PC远程调试, 在PC的Chrome浏览器中输入网址

~~~bash
chrome://inspect
- 选择要debug的网页，点击inspect按钮 可在pc中联动调试
~~~

~~~bash
请选择自己的开发设备
$ npm run debug:a  
$ npm run debug:ios  (待测试)
$ sdkmanager --licenses

~~~


- 打包

~~~bash
选择要打包的平台
$ ionic cordova build android
$ ionic cordova build ios
~~~

- 部署

- 实用命令 
1. 创建pages

~~~bash
ionic g page <Page-Name>
ionic g page <Page-Name> --no-module
~~~


## 官方模块示例

~~~bash
新建另外一个项目文件夹 如 ionic-examples
$ cd ionic-examples
$ git clone https://github.com/ionic-team/ionic-conference-app.git
$ npm install
~~~

