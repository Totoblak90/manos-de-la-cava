import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
	selector: 'mdlc-image-viewer',
	imports: [],
	templateUrl: './image-viewer.component.html',
	styleUrl: './image-viewer.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerComponent {
	/** The source URL of the image to display. Required. */
	public readonly imageUrl = input.required<string>();

	/** The alternative text for the image. Crucial for accessibility and SEO. Required. */
	public readonly altText = input.required<string>();

	/**
	 * Determines whether to use native browser lazy loading (`loading="lazy"`).
	 * Set to `false` for critical above-the-fold images (e.g., LCP element).
	 */
	public readonly lazyLoad = input<boolean>(true);

	/** The intrinsic width of the image in pixels. Optional but recommended for SEO and preventing layout shifts. */
	public readonly width = input<number | string | null>(null);

	/** The intrinsic height of the image in pixels. Optional but recommended for SEO and preventing layout shifts. */
	public readonly height = input<number | string | null>(null);

	/** Optional caption text to display below the image within a `<figcaption>`. */
	public readonly caption = input<string | null>(null);

	/** Computes the value for the 'loading' attribute based on the `lazyLoad` input. */
	protected loadingAttribute = computed<'lazy' | 'eager'>(() => (this.lazyLoad() ? 'lazy' : 'eager'));
}
