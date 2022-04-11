import {Component, Input, OnInit} from '@angular/core';
import {SocialMediaDto} from "../../shared/components/social-media/social-media-dto";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  title = 'decormodel';


  socialMedias: SocialMediaDto[] = [
    {name: 'facebook', link: "hreadfa", backgroundColor: {backgroundColor: "#506098"} }
    , {name: 'twitter', link: "hreadfa" , backgroundColor: {backgroundColor: "#76c9f9"}}
    , {name: 'youtube', link: "hreadfa", backgroundColor: {backgroundColor: "#e90000"}}
    , {name: 'instagram', link: "hreadfa",backgroundColor: {background: "linear-gradient(45deg,#ffb700 14.65%,#ff6800 31.68%,#cb217d 54.72%,#7e00aa 85.35%)"}}
    , {name: 'viber', link: "hreadfa",backgroundColor: {backgroundColor: "#7d3daf"}}
    , {name: 'telegram', link: "hreadfa", backgroundColor: {backgroundColor: "#0088cc"}}
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

}
