import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
	selector: 'mdlc-home',
	imports: [HeroComponent, CardListComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
