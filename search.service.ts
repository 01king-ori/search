import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{SearchService} from '../../src/app/search.service';
import {Repository} from '../../src/app/classes/repository'
import {User} from '../../src/app/classes/user';
import {ResultsComponent} from '../../src/app/components/results/results.component'
import {HttpClient} from '@angular/common/http'


@Injectable({
  @Injectable({
    providedIn: 'root'
  })
  export class SearchGitService {
  
    user:User; 
    repos:Repository[] = [];
    username:string;
    
  
    constructor( private http:HttpClient, private route: ActivatedRoute ) {
      this.user = new User("","","","",0,0,0,new Date (),"","");
      this.username = this.route.snapshot.paramMap.get('username')
      console.log(this.username)
    }
    
    userRequest(username){
      interface userApiResponse{
        name:string;
        login:string;
        bio:string;
        url: string;
        followers: number;
        following: number;
        public_repos : number; //check this out
        created_at : Date;
        avatar_url:string;
        email: string;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<userApiResponse>(`${environment.gitUrl}${username}?client_id=${environment.API_Key}`).toPromise().then(response=>{
          this.user.name =  response.name
          this.user.login = response.login
          this.user.bio =  response.bio
          this.user.url =  response.url
          this.user.followers =  response.followers
          this.user.following =  response.following
          this.user.public_repos =  response.public_repos
          this.user.created_at =  response.created_at
          this.user.avatar_url =  response.avatar_url
          this.user.email = response.email
          resolve()
        },
        error=>{
          this.user.login= "User not found"
          console.log("an error occured")
          reject(error)
        })
      })
      return promise
    }
  
    repoRequest(username){
      interface repoApiResponse{
      name:string,
      description:string,
      language:string,
      html_url: string
      }
      let promise = new Promise((resolve,reject)=>{
        let arrayLength = this.repos.length;
        for(let i=0; i<arrayLength; i++){ //removing initial values from repos array before pushing to the array
          this.repos.pop()
        }
        this.http.get<repoApiResponse>(`${environment.gitUrl}${username}/repos?client_id=${environment.API_Key}`).toPromise().then(response=>{
          for(let i=0; i<response["length"]; i++){
            let repo = new Repositories("","","","",0,new Date());
          repo.name =  response[i]["name"]
          repo.description =  response[i]["description"]
          repo.language =  response[i]["language"]
          repo.html_url =  response[i]["html_url"]
          repo.forks = response[i]["forks"]
          repo.updated_at = response[i]["updated_at"]
          this.repos.push(repo)
          }
          resolve()
        },
        error=>{
          console.log("an error occured")
          reject(error)
        })
      })
      return promise
    }
