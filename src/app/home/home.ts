import { Component } from '@angular/core';
import { Header } from "../header/header";
import { MyWatch } from "../my-watch/my-watch";

@Component({
  selector: 'app-home',
  imports: [Header, MyWatch],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
