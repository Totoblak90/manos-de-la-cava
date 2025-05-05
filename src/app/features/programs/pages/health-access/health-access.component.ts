import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextCardComponent } from '@mdlc/shared/components/cards/text-card/text-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-health-access',
	imports: [ContentLayoutComponent, ImageViewerComponent, TextCardComponent],
	templateUrl: './health-access.component.html',
	styleUrls: ['../../programs.component.css', './health-access.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthAccessComponent {}
