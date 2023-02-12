import { Component } from '@angular/core';

import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  files:Content[];
  constructor() {
    this.files=[{
      id: 1,
      creator: "The Weeknd" ,
      title:"Save Your Tears",
     discription: "This is the really good song and We can all agree that The Weeknd never lets us down, his talent is pure and his voice is out of this world!!! ",
      imgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fmk-markkatri%2Fthe-weekend-save-your-tears&psig=AOvVaw25u-8uO-mqwoihRUrplJWm&ust=1676261706570000&source=images&cd=vfe&ved=2ahUKEwi47erNj4_9AhURd98KHTdADZcQjRx6BAgAEAo"
    },
    {id: 2,
      creator: "Ed sheeran" ,
      title:"Bad Habits",
     discription: " This really soothing music it hits really different every time.",
      imgURL: "https://images.app.goo.gl/JNx3S7NMM4Pq2rJq7"




    },
    {
      id: 3,
      creator: "Justin Bieber" ,
      title:"Ghost",
     discription: "This is the best song ever. One day I'll play this for my girl! I still got 753 days till I see her again, but who's counting? We both are. This song brought the most emotion in my life! It relates perfectly!",
      imgURL: "https://images.app.goo.gl/oNxgD4DT6VKwmyMW8"
    },
    {
      id: 4,
      creator: "Justin Bieber" ,
      title:"Peaches",
     discription: "This song is giving summer vibe. Like you would play this song at the beach hanging out with your family and friends on a very sunny day. The instrumental outro of the song is just so addictive",
      imgURL: "https://images.app.goo.gl/BYk7yPLjVRYXqbNu5",

    },
    {
      id: 5,
      creator: "Maroon 5" ,
      title:"Girls Like You",
     discription: "This song has no age, no matter how many times you listen to it, it still feels fresh",
      imgURL: "https://images.app.goo.gl/ooanzc1yTFwdHjHF9",

    },
    {
      id: 6,
      creator: "Charlie Puth" ,
      title:"Attention",
     discription: "His words make a lot of sense. The rhythm and chorus are perfect. Masterpiece. I can't say anything else.",
      imgURL: "https://th.bing.com/th/id/R.77064801323f39fef3d817184e8ff23b?rik=4sSRBA3z3%2fX7iw&pid=ImgRaw&r=0",

    }
  ]
   }

  ngOnInit(): void {
  }

}



