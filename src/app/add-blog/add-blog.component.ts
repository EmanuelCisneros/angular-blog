import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }
  blogs = []
  ngOnInit(): void {
  }

  addBlog(title, content) {
   let blog = {"title":title.value, "content": content.value}; 
   if(localStorage.getItem("blogs")){
     this.blogs = JSON.parse(localStorage.getItem("blogs"))
   }
   this.blogs.splice(0,0,blog);
   localStorage.setItem("blogs",JSON.stringify(this.blogs))
   title.value = "";
   content.value = "";
   alert ("Blog Enviado")
  }

}


