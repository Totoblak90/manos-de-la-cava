export type GalleryItem = {

	/** Image url. */
	readonly imageUrl: string;

	/** Alternate text. */
	readonly altText: string;

	/** Width. */
	readonly width?: number | string | null;

	/** Height. */
	readonly height?: number | string | null;

	/** Lazy load. */
	readonly lazyLoad?: boolean;
};
