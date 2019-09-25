import { Component } from '@angular/core';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent {

  constructor() { }

  crazyText: string;
  normalText: string;

  printValues ( {text, crazy} ){
    if (crazy=='notcrazy'){
      this.normalText = text;
      return;
    }

    this.normalText = undefined;

    this.crazyText = this.convertToCrazy(text).join('');

  }

  private convertToCrazy(text): string[] {
    let arr = text.split('');

    return arr.map((val)=>{
      if ('number' == typeof val) return val;

      if (val == val.toLowerCase()) return val.toUpperCase();
      else return val.toLowerCase();
    });
  }

}
