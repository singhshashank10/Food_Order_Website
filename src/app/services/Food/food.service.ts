import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodsByTag(tag: string): Foods[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: "FastFood", count: 4 },
      { name: "Non-Veg", count: 2 },
      { name: "Snacks", count: 3 },
      { name: "Veg", count: 4 },
      { name: "South Indian", count: 2 },
      { name: "All", count: 8 }
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 80,
        name: "Mutton Burger",
        favorite: false,
        star: 4.5,
        tags: ["FastFood", "Non-Veg", "Burger"],
        imageUrl: '/assets/food-1.jpg',
        cookTime: "10-15 min",
        origins: ["Amarican", "European", "Gulf Contries"]
      },
      {
        id: 2,
        price: 200,
        name: "Meat Balls",
        favorite: false,
        star: 4,
        tags: ["Non-Veg"],
        imageUrl: '/assets/food-2.jpg',
        cookTime: "20-30 min",
        origins: ["Persian,  Gulf Countries"]
      },
      {
        id: 3,
        price: 150,
        name: "Cheese Balls",
        favorite: false,
        star: 4.5,
        tags: ["Snacks", "Veg"],
        imageUrl: '/assets/food-3.jpg',
        cookTime: "10-15 min",
        origins: ["European"]
      },
      {
        id: 4,
        price: 300,
        name: "Vegi Cheese Pizza",
        favorite: false,
        star: 5,
        tags: ["FastFood", "Pizza", "Veg"],
        imageUrl: '/assets/food-4.jpg',
        cookTime: "10-15 min",
        origins: ["Amarican", "European",]
      },
      {
        id: 5,
        price: 80,
        name: "Noodels",
        favorite: false,
        star: 5,
        tags: ["FastFood", "Snacks", "Veg"],
        imageUrl: '/assets/food-5.jpg',
        cookTime: "10-15 min",
        origins: ["Chinese", "Indian",]
      },
      {
        id: 6,
        price: 40,
        name: "French Fries",
        favorite: false,
        star: 3.5,
        tags: ["FastFood", "Snacks", "Veg"],
        imageUrl: '/assets/food-6.jpg',
        cookTime: "5-10 min",
        origins: ["Amarican", "European",]
      },
      {
        id: 7,
        price: 120,
        name: "Masala Dosa",
        favorite: false,
        star: 5,
        tags: ["South Indian"],
        imageUrl: '/assets/food-7.jpg',
        cookTime: "20-25 min",
        origins: ["Indian"]
      },
      {
        id: 8,
        price: 140,
        name: "Idli Sambhar",
        favorite: false,
        star: 5,
        tags: ["South Indian"],
        imageUrl: '/assets/food-8.jpg',
        cookTime: "25-30 min",
        origins: ["Indian"]
      }

    ]
  }
}
