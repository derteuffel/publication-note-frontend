import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.postService.getAll().subscribe(
      data => {
        this.lists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
