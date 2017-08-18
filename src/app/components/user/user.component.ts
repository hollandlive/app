import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	players:string[]
	game:Game;
	
	constructor() 


	{ 
	console.log('cons run');
  }

  ngOnInit() {
  	console.log('ngOn run');
  	this.game = {
		deck:'decks',
		card:'cardsss',
		//hand:[{'gg':'fhf'}]

		
  		}
  	this.players = ['artem', 'comp'];	
	}
}


interface Game {
	deck:string,
	card:string,
	//hand:string[]
	
}

interface Player {
	name:string;
}


// class Card {
//     cardString: string;
//     constructor(public cardFace, public cardSuite, public cardValue, public inagePath) {
//         this.cardString = cardFace + cardSuite + ".jpg" + " the value of this card is " + cardValue;
//     }
//     }