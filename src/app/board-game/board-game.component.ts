import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent implements OnInit {

  squares!:any[];
  xIsNext:boolean=false;
  Winner!:string;

  constructor() { }

createNewGame()
{
  this.squares=Array(9).fill(null);
  this.xIsNext=true;
}

getCurrentPlayer()
{
  return this.xIsNext?'X':'O';
}


makeMove(idx:number)
{
  if(!this.squares[idx])
  {
    this.squares[idx]=this.getCurrentPlayer();
    if(this.isWinner()){
      console.log('yes');
      this.Winner=this.squares[idx];
    }
    this.xIsNext=!this.xIsNext;

  }
}

isWinner()
{
  const possibleWinOutcomes=[[0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

  ]

  for(let i of possibleWinOutcomes)
  {
    if(this.squares[i[0]] &&this.squares[i[1]]&&this.squares[i[2]]&&  this.squares[i[0]]==this.squares[i[1]] && this.squares[i[1]]==this.squares[i[2]] && this.squares[i[2]]==this.squares[i[0]])
    return true;
  }
  return false;

}

  ngOnInit(): void {

    this.createNewGame();
  }


}
