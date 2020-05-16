import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../classes/user';
import {HttpClient } from '@angular/common/http';
import{SearchService} from '../../search.service';
import {Repository} from '../../classes/repository'
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  repos:Repositories[];
  user:Users;

  constructor(private searchGitService: SearchService, private http:HttpClient) {}

  ngOnInit(){
    this.searchGitService.userRequest("")
    this.user = this.searchGitService.user
    this.searchGitService.repoRequest("")
    this.repos =this.searchGitService.repos
  }
}