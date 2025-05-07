import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-home',
	imports: [HeroComponent, CardListComponent, SponsorsComponent, ContactComponent, ContentLayoutComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheritdoc */
	public ngOnInit(): void {
		const siteName = 'Manos de La Cava';

		const image = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;

		const imageAlt = 'Manos de La Cava: Transformando vidas y construyendo futuro en comunidad.';

		const title = 'Manos de La Cava | Compromiso y Desarrollo Comunitario';

		const description =
			'Conocé el trabajo de Manos de La Cava en San Isidro. Programas integrales para niños, adolescentes y familias. ¡Tu colaboración hace la diferencia!';

		this.metaTagService.updateAllTags({
			title: 'ONG de Desarrollo Social en La Cava, San Isidro',
			description:
				'Manos de La Cava: Desde 1997 transformando realidades en el barrio La Cava (Beccar) a través de programas de educación, salud, nutrición y acompañamiento social. ¡Sumate y ayudanos a construir un futuro mejor!',
			keywords:
				'ONG, Manos de La Cava, La Cava, Beccar, San Isidro, ayuda social, desarrollo integral, educación, salud, nutrición, voluntariado, donaciones, niñez, familias vulnerables',
			robots: 'index, follow',
			ogTitle: title,
			ogDescription: description,
			ogType: 'website',
			ogImage: image,
			ogImageAlt: imageAlt,
			ogSiteName: siteName,
			twitterCard: 'summary_large_image',
			twitterTitle: title,
			twitterDescription: description,
			twitterImage: image,
			twitterImageAlt: imageAlt,
		});
	}
}
