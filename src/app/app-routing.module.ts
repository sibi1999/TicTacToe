import { SquareComponent } from './board-game/square/square.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'board/square',component:SquareComponent},
{path:'board',component:BoardGameComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
