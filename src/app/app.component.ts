import { Component } from '@angular/core';

//import { MyDataService} from './my-data.service';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 //template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'Tour of Heroes';
// 	  hero: Hero = {
// 	  id: 1,
// 	  name: 'Windstorm'
// 	};
//constructor(private newService: MyDataService) {}

ngOnInit() {
	//this.newService.fetchData();
}
}


// export class Hero {
//   id: number;
//   name: string;
// }

