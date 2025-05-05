import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

@Component({
	selector: 'mdlc-food',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './food.component.html',
	styleUrls: ['../../programs.component.css', './food.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent {}
