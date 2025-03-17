import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActorModel } from '../../models/actor.model';
import { NgIf } from '@angular/common';
import { ActorService } from '../../services/actor.service';
import { MatButtonModule } from '@angular/material/button';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-actors',
  imports: [MatTableModule, MatButtonModule, NgIf, LoadingComponent],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})
export class ActorsComponent {
  displayedColumns: string[] = ['actorId', 'name', 'actions']
  dataSource: ActorModel[] | null = null

  public constructor() {
    ActorService.getActors().then(rsp=>this.dataSource = rsp.data)
  }
}
