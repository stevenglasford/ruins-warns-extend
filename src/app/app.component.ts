import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Fake News Research';

  //0 means the user has not accepted anything
  //1 means the user has accepted the terms and conditions
  //2 means the user does not accept the terms and conditions
  //can be changed during development to which ever form needs to be tested at the time
  hasAcceptedTermsAndConditions: number = 1;
  
  //called when the user accepts the terms and conditions
  onAccept(): void {
    this.hasAcceptedTermsAndConditions = 1;
    return;
  }

  //called when the user does not accept the terms and conditions
  onDeny(): void {
    this.hasAcceptedTermsAndConditions = 2;
    return;
  }


}
