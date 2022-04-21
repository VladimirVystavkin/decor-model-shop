import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.sass']
})
export class HardSkillComponent implements OnInit {
  @Input()
  group : string
  @Input()
  name : string
  @Input()
  description : string

  constructor() {
    this.name = 'name'
    this.group = 'group'
    this.description = 'description'
  }

  ngOnInit(): void {
  }

}
