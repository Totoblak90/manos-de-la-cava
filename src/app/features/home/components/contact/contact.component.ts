import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if, @for, etc.
import { MatIconModule } from '@angular/material/icon';
import {
	ADDRESS,
	EMAIL,
	FACEBOOK,
	INSTAGRAM,
	PHONE,
	NAME as ORG_NAME, // Importamos el nombre de la ONG si queremos usarlo
	YOUTUBE,
	GOOGLE_MAPS_URL, // Añadimos YouTube si lo tienes
} from '@mdlc/shared/constants/institutional-info/institutional-info';

interface ContactMethod {
	label: string;
	href: string;
	ariaLabel: string;
	icon?: string;
	svgIcon?: string;
	isExternal?: boolean;
	detail?: string;
}

@Component({
	selector: 'mdlc-contact',
	standalone: true,
	imports: [CommonModule, MatIconModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
	protected readonly contactMethods = computed<ContactMethod[]>(() => [
		{
			icon: 'email',
			label: EMAIL,
			href: `mailto:${EMAIL}`,
			ariaLabel: `Enviar un correo electrónico a ${ORG_NAME}`,
		},
		{
			svgIcon: 'whatsapp',
			label: PHONE,
			href: this.whatsappUrl,
			ariaLabel: `Contactar a ${ORG_NAME} por WhatsApp`,
			isExternal: true,
		},
		{
			icon: 'location_on',
			label: this.prettifiedAddress,
			href: GOOGLE_MAPS_URL,
			ariaLabel: `Ver la dirección de ${ORG_NAME} en el mapa`,
			isExternal: true,
			detail: '¡Visitanos cuando quieras!',
		},
		{
			svgIcon: 'instagram',
			label: '@manosdelacava',
			href: INSTAGRAM,
			ariaLabel: `Seguir a ${ORG_NAME} en Instagram`,
			isExternal: true,
		},
		{
			svgIcon: 'facebook',
			label: '/ManosDeLaCava',
			href: FACEBOOK,
			ariaLabel: `Seguir a ${ORG_NAME} en Facebook`,
			isExternal: true,
		},
		{
			svgIcon: 'youtube',
			label: 'Manos de La Cava en YouTube',
			href: YOUTUBE,
			ariaLabel: `Ver el canal de ${ORG_NAME} en YouTube`,
			isExternal: true,
		},
	]);

	private get whatsappUrl(): string {
		if (!PHONE) {
			return '#';
		}
		const cleanPhone = PHONE.replace(/\D/g, '');
		return `https://wa.me/${cleanPhone}`;
	}

	private get prettifiedAddress(): string {
		return `${ADDRESS.streetName} ${ADDRESS.streetNumber}, ${ADDRESS.city}, ${ADDRESS.province}. CP: ${ADDRESS.postalCode}. ${ADDRESS.country}.`;
	}
}
