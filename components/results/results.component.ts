import { Component, OnInit } from '@angular/core';
import { SearchGitService } from 'src/app/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  repos:Repository[];
  user:User;
  username:string;  

  constructor( private route: ActivatedRoute, private searchGitService: SearchGitService ) {}

  searchResult(){
    this.username = this.route.snapshot.paramMap.get('username')
    this.searchGitService.userRequest(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.repoRequest(this.username)
    this.repos =this.searchGitService.repos
  }

  ngOnInit(){
    this.searchResult()
  }
}

