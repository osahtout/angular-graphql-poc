import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  private baseUrl = "http://localhost:8080/graphql"

  constructor(private http: HttpClient) { }

  get(query: string) {
    fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "https://localhost:8080/graphql"
    },
      body: JSON.stringify({ query: '{ getAuthors { name books { title } } }' }),
    })
    .then(res => res.json())
    .then(res => console.log(res.data));
  }
  
}
