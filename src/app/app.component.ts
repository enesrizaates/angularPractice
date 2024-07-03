import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,  } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CongratulationsMessageComponent } from './congratulations-message/congratulations-message.component';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ExampleComponent, PeopleListComponent, MultipleChoiceComponent, EventHandlingComponent, CounterButtonComponent, CongratulationsMessageComponent, CommonModule, CounterButtonPageComponent, ParamsExampleComponent, NotFoundPageComponent, UserInfoFormComponent, FormsModule, NavBarComponent, UserInfoDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';

  // doSomething(): void {
  //   alert('Doing something ...');
  // }
  
  // doSomethingElse(): void {
  //   alert('Doing something else ...');
  // }

  // doAnotherThing(): void {
  //   alert('Doing another thing else ...');
  // }
}
