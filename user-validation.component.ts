import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent {

  users= [
     {name: 'Andrés'},
     {name: 'Benito'},
     {name: 'Carlos'},
     {name: 'David'}
  ];

}
