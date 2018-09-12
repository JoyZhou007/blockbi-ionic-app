import {Directive, OnInit, ContentChild} from "@angular/core";
import {Slides} from 'ionic-angular';
@Directive({
  selector: '[slidesSkill]'
})
export class SlidesSkillDirective implements OnInit {

  @ContentChild('slides') public slides: Slides;
  @ContentChild('prev') public prev: any;
  @ContentChild('next') public next: any;

  constructor() {
  }

  ngOnInit() {
    if(this.prev){
      this.prev.nativeElement.onclick = () => {
        this.slides.slidePrev();
      }
    }
    if(this.next){
      this.next.nativeElement.onclick = () => {
        this.slides.slideNext();
      }
    }
  }
}


