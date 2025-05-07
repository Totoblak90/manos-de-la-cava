import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TextCardComponent } from '@mdlc/shared/components/cards/text-card/text-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-sports',
	imports: [ContentLayoutComponent, ImageViewerComponent, TextCardComponent],
	templateUrl: './sports.component.html',
	styleUrls: ['../../programs.component.css', './sports.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SportsComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheridoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Programa de Deportes para Niños y Jóvenes';
		const pageSpecificDescription =
			'Descubrí cómo el programa de deportes de Manos de La Cava en La Cava, Beccar, fomenta valores, salud y desarrollo integral en niños y jóvenes. ¡Apoyá el deporte y la inclusión!';

		const sportsOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const sportsOgImageAlt = 'Jóvenes participando activamente en el programa de deportes de Manos de La Cava.';

		const sportsMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'programa deportes ONG, fútbol La Cava, actividades deportivas San Isidro, desarrollo infantil Beccar, valores a través del deporte, Manos de La Cava deportes, inclusión social, deporte para niños, deporte para adolescentes',
			robots: 'index, follow',

			ogTitle: `${pageSpecificTitle} | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: sportsOgImage,
			ogImageAlt: sportsOgImageAlt,

			// --- Twitter Card Tags ---
			twitterCard: 'summary_large_image',
			twitterTitle: `${pageSpecificTitle} | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: sportsOgImage,
			twitterImageAlt: sportsOgImageAlt,
		};

		this.metaTagService.updateAllTags(sportsMeta);
	}
}
