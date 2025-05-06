import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IconTitleCardComponent } from '@mdlc/shared/components/cards/icon-title-card/icon-title-card.component';
import { StrippedBorderedCardComponent } from '@mdlc/shared/components/cards/stripped-bordered-card/stripped-bordered-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { BANK_ACCOUNT } from '@mdlc/shared/constants/financial-info/bank-account';
import { MERCADOPAGO_ACCOUNT } from '@mdlc/shared/constants/financial-info/mercadopago';
import { IconTitleCard } from '@mdlc/shared/models/cards/icon-title-card';
import { IconName, Icons } from '@mdlc/shared/models/icon';
import { getProgramBackgroundColor, getProgramTextColor } from '@mdlc/shared/utils/get-color-based-on-program';

const DONAR_ONLINE_CAMPAIGN = 'https://donaronline.org/manos-de-la-cava/ayuda-a-manos-de-la-cava';

/** Mercadopago account info. */
type MercadoPagoParams = typeof MERCADOPAGO_ACCOUNT & {

	/** Title. */
	readonly title: string;
};

/** Bank account info. */
type BankAccountParams = typeof BANK_ACCOUNT & {

	/** Title. */
	readonly title: string;
};
@Component({
	selector: 'mdlc-donate',
	imports: [
		RouterModule,
		NgStyle,
		MatIconModule,
		ContentLayoutComponent,
		StrippedBorderedCardComponent,
		IconTitleCardComponent,
	],
	templateUrl: './donate.component.html',
	styleUrl: './donate.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonateComponent {
	/** Donation cards. */
	protected readonly donationCards: IconTitleCard[] = [
		{ programName: 'Educación', title: 'Educación', icon: Icons.Education, route: 'educacion' },
		{ programName: 'Jardín Maternal', title: 'Jardín', icon: Icons.Kindergarden, route: 'kindergarden' },
		{ programName: 'Deportes', title: 'Deportes', icon: Icons.Sports, route: 'deportes' },
		{ programName: 'Acceso a la salud', title: 'Salud', icon: Icons.HealthAccess, route: 'salud' },
		{ programName: 'Alimentación y calidad nutricional', title: 'Alimentación', icon: Icons.Food, route: 'food' },
		{ programName: 'Adultos', title: 'Adultos', icon: Icons.Adults, route: 'adults' },
	];

	/** Mercado Pago Info. */
	protected readonly mercadoPago: MercadoPagoParams = {
		title: 'MERCADO PAGO',
		alias: MERCADOPAGO_ACCOUNT.alias,
		cvu: MERCADOPAGO_ACCOUNT.cvu,
	};

	/** Bank Info. */
	protected readonly bankTransfer: BankAccountParams = {
		title: 'DONAR CON TRANSFERENCIA BANCARIA',
		accountName: BANK_ACCOUNT.accountName,
		bankName: BANK_ACCOUNT.bankName,
		alias: BANK_ACCOUNT.alias,
		checkingsAccount: BANK_ACCOUNT.checkingsAccount,
		cbu: BANK_ACCOUNT.cbu,
		cuit: BANK_ACCOUNT.cuit,
	};

	/** Link to the donation page. */
	protected readonly donationLink: string = DONAR_ONLINE_CAMPAIGN;

	/** Gets a color style based on the program name. */
	protected getBgColor = getProgramBackgroundColor;

	/** Gets a text color style based on the program name. */
	protected getTextColor = getProgramTextColor;
}
