import { Component, OnInit } from '@angular/core';
import { Apps } from './apps.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apps',
  imports: [CommonModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent implements OnInit {

  meusApps: Apps[] = []

  ngOnInit() {
    const facebook: Apps = {
      nome: 'Facebook',
      url: 'https://www.facebook.com'
    }

    const instagram: Apps = {
      nome: 'Instagram',
      url: 'https://www.instagram.com'
    }

    this.meusApps.push(facebook)
    this.meusApps.push(instagram)
  }
}
