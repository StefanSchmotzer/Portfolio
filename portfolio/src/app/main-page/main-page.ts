import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { MyProjects } from '../my-projects/my-projects';

@Component({
  imports: [Hero, AboutMe, Skills, MyProjects],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})

export class MainPage {}