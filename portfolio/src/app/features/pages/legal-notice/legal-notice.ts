import { Component } from '@angular/core';
import { Header } from '@features/layout/header/header';
import { FooterSection } from '@features/layout/footer-section/footer-section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, FooterSection, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {}