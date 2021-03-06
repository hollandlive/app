import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];

  constructor() { 
  	console.log('constructor run');
  }

  ngOnInit() {
  	console.log('ngOnInit run');
  	this.name = 'John';
  	this.age = 50;
  	this.address = {
  		street: '50 main street',
  		city: 'Amsterdam',
  		zip: 'Noord Holland'
  	}
  	this.hobbies = ['write', 'eat', 'etc'];
  }
  onClick(){
  	this.name = "Artem Aksenob";
  	this.hobbies.push("New Hobby", "wswsw");
  }
  addHobby(hobby){
  	console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }
  deleteHobby(hobby){
  	console.log(hobby);
  	for (let i=0; i<this.hobbies.length; i++) {
  		if(this.hobbies[i]==hobby) {
  			this.hobbies.splice(i, 1);
  		}
  	}
  }
}

interface Address {
	street:string;
	city:string;
	zip:string;
}