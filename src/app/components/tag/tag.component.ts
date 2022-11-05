import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/Food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags: Tag[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag()
  }

}
