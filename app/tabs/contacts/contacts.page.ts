import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goAnOtherPage() {
    //  this.contact.setRoot(ContactDetailsPage);
    this.router.navigate(['/tabs/contacts/contact-details']);
    
    }

}
