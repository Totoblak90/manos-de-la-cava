import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StrippedBorderedCardComponent } from '@mdlc/shared/components/cards/stripped-bordered-card/stripped-bordered-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { BANK_ACCOUNT } from '@mdlc/shared/constants/financial-info/bank-account';
import { MERCADOPAGO_ACCOUNT } from '@mdlc/shared/constants/financial-info/mercadopago';
import { IconTitleCard } from '@mdlc/shared/models/cards/icon-title-card';

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
	imports: [RouterModule, MatIconModule, ContentLayoutComponent, StrippedBorderedCardComponent],
	templateUrl: './donate.component.html',
	styleUrl: './donate.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonateComponent {
	protected readonly donationCards: IconTitleCard[] = [
		{ title: 'Educación', icon: 'book', route: 'educacion' },
		{ title: 'Jardín', icon: 'group', route: 'kindergarten' },
		{ title: 'Deportes', icon: 'sports_soccer', route: 'deportes' },
		{ title: 'Salud', icon: 'favorite', route: 'salud' },
		{ title: 'Alimentación', icon: 'restaurant', route: 'food' },
		{ title: 'Adultos', icon: 'people', route: 'adults' },
	];

	protected readonly mercadoPago: MercadoPagoParams = {
		title: 'MERCADO PAGO',
		alias: MERCADOPAGO_ACCOUNT.alias,
		cvu: MERCADOPAGO_ACCOUNT.cvu,
	};

	protected readonly bankTransfer: BankAccountParams = {
		title: 'DONAR CON TRANSFERENCIA BANCARIA',
		accountName: BANK_ACCOUNT.accountName,
		bankName: BANK_ACCOUNT.bankName,
		alias: BANK_ACCOUNT.alias,
		checkingsAccount: BANK_ACCOUNT.checkingsAccount,
		cbu: BANK_ACCOUNT.cbu,
		cuit: BANK_ACCOUNT.cuit,
	};
}
