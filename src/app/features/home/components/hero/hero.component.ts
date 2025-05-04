import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroMobileComponent } from './components/hero-mobile/hero-mobile.component';
import { HeroDesktopComponent } from './components/hero-desktop/hero-desktop.component';

@Component({
	selector: 'mdlc-hero',
	imports: [HeroMobileComponent, HeroDesktopComponent],
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
