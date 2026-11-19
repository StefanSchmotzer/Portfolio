import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { AboutMe } from '../../sections/about-me/about-me';
import { Skills } from '../../sections/skills/skills';
import { MyProjects } from '../../sections/my-projects/my-projects';
import { Colleagues } from '../../sections/colleagues/colleagues';
import { Contact } from '../../sections/contact/contact';


@Component({
  imports: [Hero, AboutMe, Skills, MyProjects, Colleagues, Contact],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})

export class MainPage {}