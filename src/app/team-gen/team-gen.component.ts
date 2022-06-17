import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-gen',
  templateUrl: './team-gen.component.html',
  styleUrls: ['./team-gen.component.css']
})
export class TeamGenComponent implements OnInit {

  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | string = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = ' Error: Name cannot be blank';
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage="Invalid Number"
      return;
    }

    if(this.members.length<this.numberOfTeams){
        this.errorMessage="Not enough members"
        return;
    }


    this.errorMessage=''
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
     
    }

    this.numberOfTeams='';
    this.members=[];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
