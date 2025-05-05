import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCardComponent } from '@mdlc/shared/components/cards/base-card/base-card.component';
import { BaseCard } from '@mdlc/shared/models/cards/base-card';
import { commonRoutePaths } from '@mdlc/shared/utils/route-paths/common-route-paths';

@Component({
	selector: 'mdlc-card-list',
	imports: [BaseCardComponent],
	templateUrl: './card-list.component.html',
	styleUrl: './card-list.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
	protected readonly cards: BaseCard[] = [
		{
			title: 'Jardín Maternal',
			description:
				'En "Manitos", acompañamos a niños y niñas desde los primeros meses de vida, brindándoles un espacio de cuidado, estimulación y afecto para favorecer su desarrollo integral.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-1.webp',
				imgAlt: 'Niño jugando en un tobogán',
			},
			linkHref: commonRoutePaths.programs.children.kinderGarten.url,
		},
		{
			title: 'Educación',
			description:
				'Acompañamos las trayectorias escolares de niños, niñas y adolescentes con apoyo diario, talleres y contención, promoviendo la inclusión educativa y el desarrollo integral.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-2.webp',
				imgAlt: 'Una niña con disfraz de conejo y mujer adulta agarrandola mientras la mira y sonríe.',
			},
			linkHref: commonRoutePaths.programs.children.education.url,
		},
		{
			title: 'Deportes',
			description: 'Creamos espacios de juego y actividad física para fortalecer vínculos y hábitos saludables.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-1.webp',
				imgAlt: 'Niño jugando en un tobogán',
			},
			linkHref: commonRoutePaths.programs.children.sports.url,
		},
		{
			title: 'Acceso a la salud',
			description:
				'Brindamos acompañamiento integral en salud física y mental, articulando con el sistema público para garantizar el acceso a controles médicosm vacunación y atención especializada.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-2.webp',
				imgAlt: 'Una niña con disfraz de conejo y mujer adulta agarrandola mientras la mira y sonríe.',
			},
			linkHref: commonRoutePaths.programs.children.healthAccess.url,
		},
		{
			title: 'Alimentación y calidad nutricional',
			description:
				'Brindamos almuerzos y meriendas diarias a niños, niñas y madres embarazadas, asegurando una alimentación equilibrada y saludable. Además, promovemos hábitos nutricionales adecuados para fortalecer el desarrollo integral de cada persona.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-1.webp',
				imgAlt: 'Niño jugando en un tobogán',
			},
			linkHref: commonRoutePaths.programs.children.food.url,
		},
		{
			title: 'Adultos',
			description:
				'Ofrecemos talleres de formación en oficios y espacios de contención para adultos del barrio, promoviendo la inclusión laboral.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-2.webp',
				imgAlt: 'Una niña con disfraz de conejo y mujer adulta agarrandola mientras la mira y sonríe.',
			},
			linkHref: commonRoutePaths.programs.children.adults.url,
		},
		{
			title: 'Intervenciones sociales',
			description:
				'Acompañamos a las familias mediante acciones integrales que abordan problemáticas sociales, fortaleciendo vínculos comunitarios y promoviendo la inclusión y el desarrollo humano.',
			imageParams: {
				imgUrl: 'assets/home/cards/card-1.webp',
				imgAlt: 'Niño jugando en un tobogán',
			},
			linkHref: commonRoutePaths.programs.children.socialInterventions.url,
		},
	];
}
