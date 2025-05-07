import { IconName } from '../icon';

export interface DonationInfoField {
	/** Label. */
	readonly label: string;

	/** Value. */
	readonly value: string;

	/** Is copiable. */
	readonly isCopiable?: boolean;

	/** Notes. */
	readonly notes?: string;
}

export interface DonationInfoCardData {
	/** Title. */
	readonly title: string;

	/** Icon name. */
	readonly iconName?: string;

	/** Svg Icon name */
	readonly svgIconName?: IconName;

	/** Donation fields. */
	readonly fields: DonationInfoField[];

	/** Accent color. */
	readonly accentColor?: string;

	/** Qr code url. */
	readonly qrCodeUrl?: string;
}
