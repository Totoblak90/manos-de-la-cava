import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from './components/navbar-desktop/navbar-desktop.component';
import { SocialMediaIconsComponent } from '../social-media-icons/social-media-icons.component';

@Component({
	selector: 'mdlc-header',
	imports: [MatButtonModule, NavbarMobileComponent, NavbarDesktopComponent, SocialMediaIconsComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
