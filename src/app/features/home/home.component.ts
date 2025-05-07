import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';

@Component({
	selector: 'mdlc-home',
	imports: [HeroComponent, CardListComponent, SponsorsComponent, ContactComponent, ContentLayoutComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
