import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  searchText=new FormControl('');

  constructor(){

  }

  ngOnInit() {

    this.searchText.valueChanges.subscribe(x=>{
      console.log(x);
    })

  }


}
