import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAnOtherPage2() {
    //  this.contact.setRoot(ContactDetailsPage);
    this.router.navigate(['/login']);
    
  }

}