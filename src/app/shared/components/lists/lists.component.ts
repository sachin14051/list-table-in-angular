import { Component, OnInit } from '@angular/core';
import { Iperson } from '../../module/module';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
   skills : Array<string>= ["html","css","javascript"];
    person : Array<Iperson>= [
      {
        fname: "bill",
        lname: 'gates',
        email: 'larry@gmail.com',
        contact: 99999999
      },
      {
        fname: "larry",
        lname: 'Ellison',
        email: 'larry@gmail.com',
        contact: 99999999
      },
      {
      fname: "mukesh",
      lname: 'ambani',
      email: 'jio@gmail.com',
      contact: 78912345
    },
  {
    fname: "may",
    lname: 'dow',
    email: 'may@GMAIL.COM',
    contact: 123456
  },
  {
    fname: "elon",
    lname: 'musk',
    email: 'elon@gmail.com',
    contact: 123456
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
