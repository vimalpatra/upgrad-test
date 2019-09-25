import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionOneComponent } from './pages/question-one/question-one.component';
import { QuestionTwoComponent } from './pages/question-two/question-two.component';

const routes: Routes = [
  {path: 'question-one', component: QuestionOneComponent},
  {path: 'question-two', component: QuestionTwoComponent},
  {path: '**', redirectTo: 'question-one', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
