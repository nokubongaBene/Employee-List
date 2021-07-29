import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.css']
})
export class ListCrudComponent implements OnInit {

  index:any;
  name : any = "noks";
  age : any = 0;
  id : any =0;
  empName : string = ''
  empAge : any;
  empId : any;
  
  employees: any = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 25},
    {"id": 3, "name": "Christina", "age": 26},
    {"id": 4, "name": "Elena", "age": 28},
    {"id": 5, "name": "Sean", "Age": 27}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  deleteEmployee(index:any){
    this.employees.splice(index, 1);
 
   }
   saveInfo(id:any, name:any, age:any){
   
   let objEmployee = {
      id:id,
      name:name,
      age:age
    }
    this.employees.push(objEmployee);
   }
   selectEmployee(index:any){
    //  console.log(this.employees[index].id)
    this.empAge=this.employees[index].age;
    this.empId=this.employees[index].id;
    this.empName=this.employees[index].name;
    this.index=index;

   }

   update(){
    // alert(this.empName);
    this.employees[this.index].id =this.empId;
    this.employees[this.index].name=this.empName;
    this.employees[this.index].age=this.empAge;

   }

}
