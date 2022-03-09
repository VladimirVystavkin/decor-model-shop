import {Component, Input, OnInit } from '@angular/core';
import {SocialMediaDto} from "./social-media-dto"


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.sass']
})

export class SocialMediaComponent implements OnInit {
  // @ts-ignore
  @Input() socialMedia : SocialMediaDto

  constructor() {
  }

  ngOnInit(): void {
  }

}
