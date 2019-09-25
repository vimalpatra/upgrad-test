import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('content') content: ElementRef;

  contentEl: HTMLElement;
  highContrast = false;

  ngAfterViewInit(){
    this.contentEl = this.content.nativeElement;
      // alert(this.content.nativeElement.textContent);
  }


  toggleFontSize(value) {
    const fontSize = getComputedStyle(this.contentEl, null).getPropertyValue('font-size');

    // alert(fontSize);
    this.contentEl.style.fontSize = parseInt(fontSize, 10) + value + 'px';

  }

  toggleHighContrast(switchOnContrast) {
      this.highContrast = switchOnContrast;
  }

}
