import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IconTitleCardComponent } from '@mdlc/shared/components/cards/icon-title-card/icon-title-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { BANK_ACCOUNT } from '@mdlc/shared/constants/financial-info/bank-account';
import { MERCADOPAGO_ACCOUNT } from '@mdlc/shared/constants/financial-info/mercadopago';
import { IconTitleCard } from '@mdlc/shared/models/cards/icon-title-card';
import { Icons } from '@mdlc/shared/models/icon';
import { getProgramBackgroundColor, getProgramTextColor } from '@mdlc/shared/utils/get-color-based-on-program';
import { DonationInfoCardComponent } from './components/donation-info-card/donation-info-card.component';
import { DonationInfoCardData } from '@mdlc/shared/models/cards/donation-card';

const DONAR_ONLINE_CAMPAIGN = 'https://donaronline.org/manos-de-la-cava/ayuda-a-manos-de-la-cava';

@Component({
	selector: 'mdlc-donate',
	imports: [
		RouterModule,
		NgStyle,
		MatIconModule,
		ContentLayoutComponent,
		DonationInfoCardComponent,
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
	protected readonly mercadoPagoData: DonationInfoCardData = {
		title: 'Doná con Mercado Pago',
		iconName: 'account_balance',
		accentColor: 'var(--mp-blue, #009EE3)',
		fields: [
			{ label: 'Alias', value: MERCADOPAGO_ACCOUNT.alias, isCopiable: true },
			{ label: 'CVU', value: MERCADOPAGO_ACCOUNT.cvu, isCopiable: true },
		],
	};

	/** Bank Info. */
	protected readonly bankTransferData: DonationInfoCardData = {
		title: 'Doná por Transferencia',
		iconName: 'account_balance',
		accentColor: 'var(--bank-blue, #2a7ca5)',
		fields: [
			{ label: 'Nombre de la cuenta', value: BANK_ACCOUNT.accountName, isCopiable: false },
			{ label: 'Banco', value: BANK_ACCOUNT.bankName, isCopiable: false },
			{ label: 'Alias', value: BANK_ACCOUNT.alias, isCopiable: true },
			{ label: 'Nº de Cuenta Corriente', value: BANK_ACCOUNT.checkingsAccount, isCopiable: true },
			{ label: 'CBU', value: BANK_ACCOUNT.cbu, isCopiable: true },
			{ label: 'CUIT', value: BANK_ACCOUNT.cuit, isCopiable: true },
		],
	};

	/** Link to the donation page. */
	protected readonly donationLink: string = DONAR_ONLINE_CAMPAIGN;

	/** Gets a color style based on the program name. */
	protected getBgColor = getProgramBackgroundColor;

	/** Gets a text color style based on the program name. */
	protected getTextColor = getProgramTextColor;
}
