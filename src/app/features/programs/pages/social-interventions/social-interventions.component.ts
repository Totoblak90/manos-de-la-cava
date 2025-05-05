import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-social-interventions',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './social-interventions.component.html',
	styleUrls: ['../../programs.component.css', './social-interventions.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialInterventionsComponent {}
