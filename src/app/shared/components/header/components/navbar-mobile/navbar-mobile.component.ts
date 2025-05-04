import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'mdlc-navbar-mobile',
	imports: [RouterModule, MatIconModule, MatMenuModule, MatButtonModule],
	templateUrl: './navbar-mobile.component.html',
	styleUrl: './navbar-mobile.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {}
