import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-about-us',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './about-us.component.html',
	styleUrl: './about-us.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {}
