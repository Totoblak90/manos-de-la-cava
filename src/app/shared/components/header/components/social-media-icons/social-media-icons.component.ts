import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'mdlc-social-media-icons',
	imports: [MatIconModule, MatButtonModule],
	templateUrl: './social-media-icons.component.html',
	styleUrl: './social-media-icons.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaIconsComponent {}
