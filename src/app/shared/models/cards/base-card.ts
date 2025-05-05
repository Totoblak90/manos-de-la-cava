import { Image } from '../image';

export type BaseCard = {
	/** Title. */
	readonly title: string;

	/** Description. */
	readonly description: string;

	/** Link href. */
	readonly linkHref: string;

	/** Image params. */
	readonly imageParams: Image;
};
