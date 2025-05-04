import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'mdlc-navbar-desktop',
	imports: [RouterModule],
	templateUrl: './navbar-desktop.component.html',
	styleUrl: './navbar-desktop.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDesktopComponent {}
