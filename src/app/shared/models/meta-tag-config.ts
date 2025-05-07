export interface MetaTagConfig {
	/** Title. */
	readonly title?: string;

	/** Description. */
	readonly description?: string;

	/** Keywords. */
	readonly keywords?: string;

	/** Robots.txt */
	readonly robots?: string;

	/** OG title. */
	readonly ogTitle?: string;

	/** OG description. */
	readonly ogDescription?: string;

	/** OG type. */
	readonly ogType?: string;

	/** Og image. */
	readonly ogImage?: string;

	/** Og image alt. */
	readonly ogImageAlt?: string;

	/** OG url. */
	readonly ogUrl?: string;

	/** OG site name. */
	readonly ogSiteName?: string;

	/** Twitter card. */
	readonly twitterCard?: string;

	/** Twitter title. */
	readonly twitterTitle?: string;

	/** Twitter description. */
	readonly twitterDescription?: string;

	/** Twitter image. */
	readonly twitterImage?: string;

	/** Twitter image alt. */
	readonly twitterImageAlt?: string;
}
