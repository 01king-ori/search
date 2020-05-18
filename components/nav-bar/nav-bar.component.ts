import { Component, OnInit } from '@angular/core';
import {Result} from '../result'
import {Router } from '@angular/router';
import{SearchService} from '../../search.service';
import {Repository} from '../../classes/repository'
import {User} from '../../classes/user';
import {ResultsComponent} from '../results/results.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username:string;
  user:User;
  repos:Repository[];
  searchResult: SearchService;
  userTest:string;
  reposByName:Result;
  reponame:string;
  isShowUserForm = false;
  isShowRepoForm = false;


  constructor( private router: Router, private searchGitService: SearchService ) { }
  toggleUserForm(){
    this.isShowUserForm = !this.isShowUserForm;
  }
  toggleRepoForm(){
    this.isShowRepoForm = !this.isShowRepoForm;
  }
  findProfile(){
    this.router.navigate(['/search-result',this.username]);
    this.searchGitService.userRequest(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.repoRequest(this.username)
    this.repos =this.searchGitService.repos

  }
  findRepos(){
    this.router.navigate(['/repo-result',this.reponame]);
    this.searchGitService.repoByNameRequest(this.reponame);
    this.reposByName =this.searchGitService.reposByName
  }
  ngOnInit(){
  }

}