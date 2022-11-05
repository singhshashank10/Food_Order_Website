import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/Food/food.service';
import { Foods } from 'src/app/shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = [];

  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLowerCase()))
      else
        this.foods = this.fs.getAll(); //service is taken here
    })



  }

}
