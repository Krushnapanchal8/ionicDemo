import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {

  
  [x: string]: any;

  constructor() { }
  Contacts1:string[] = [
    'Aadesh Pawar','Aakash Jadhav','Abhay Dhone','Abhijit Kedari','Aditya Hiwase','Ahad Tamboli','Ajay Sutar','Aakash Panchal','Akshay Dharme',
    'Akshay Kamble','Amar Gote','Amit Gaikwad','Amol More','Audumbar Ugale','Aunish Kewat','Avinash Patil'
  ];
  Contacts2:string[] = ['Balaji Bhure','Balaji Igave','Bhagwat Chakure','Bhaiya','Bhushan Kandle','Bhushan Kandle2','Birajdar','Baliram Panchal'];
  Contacts3: string[] = ['Dhairyashile Landge','Dhanraj Panchal','Didi','Dinesh Bhure','Dipak Gurav','Dipak Pawar','Divya Jindam','Dnyan Panchal'];
  Contacts4: string[] = ['Ganesh Jamble','Ganesh Panchal','Ganesh Panchal2','Gaurav Kamble','Girish Choudhary','Govind Panchal'];



  ngOnInit() {
  }

}
