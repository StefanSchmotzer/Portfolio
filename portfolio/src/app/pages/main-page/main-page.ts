import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { MyProjects } from '../my-projects/my-projects';
import { Colleagues } from '../colleagues/colleagues';
import { Contact } from '../contact/contact';
import { Hero_1 as Hero } from '../../sections/hero/hero';

@Component({
  imports: [Hero, AboutMe, Skills, MyProjects, Colleagues, Contact, Hero_1],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})

export class MainPage {}