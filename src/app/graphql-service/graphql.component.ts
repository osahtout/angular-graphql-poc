import { Component, OnInit } from '@angular/core';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit{





  constructor(private readonly graphql: GraphqlService) {}



  ngOnInit(): void {
    // this.graphql.get("");
  }

  pushit() {
    this.graphql.get("");
  }




}
