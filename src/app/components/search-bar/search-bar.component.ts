import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  //inject router as dependecy
  //redirect apl to search page
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  //in html #form
  //type is NgForm
  onSubmit(form: NgForm){
    //using this.router to navigate to a search page
    //search is from input type where name="search"
    this.router.navigate(['search', form.value.search]);
  }

}
