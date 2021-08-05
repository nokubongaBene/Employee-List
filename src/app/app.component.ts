import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-list-activity';
  pageStatus = false;
  Firstname="";
  userPassword="";


  logIn(){
    console.log(this.Firstname);
    console.log(this.userPassword);
    if(this.Firstname == "admin" && this.userPassword == "admin")
    {
      this.pageStatus = false;
    }
    else{
      alert("Incorrect password or username");
    }
  }
}
