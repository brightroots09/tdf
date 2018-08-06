import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["Angular", "React", "View"];

  topicHasErrors = true;
  submitted = false;
  
  userModel = new User("Test", "test@test.com", 9478704255, "default", "morning", true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value === "default"){
      this.topicHasErrors = true
    }
    else{
      this.topicHasErrors = false
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log("success", data),
        error => console.log("error", error)
      )
  }

}
