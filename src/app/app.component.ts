import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CmsPostModule } from '@ng-cms/cms-post';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CmsPostModule],
  selector: 'ng-cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-cms';
}
