import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-social-interventions',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './social-interventions.component.html',
	styleUrls: ['../../programs.component.css', './social-interventions.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialInterventionsComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheridoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Intervenciones Sociales en La Cava';
		const pageSpecificDescription =
			'Manos de La Cava ofrece orientación y vinculación con recursos para familias en La Cava, Beccar, abordando problemáticas de vivienda, empleo, violencia y derechos infantiles.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Apoyo integral y desarrollo comunitario en San Isidro.';

		const socialInterventionsMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'intervenciones sociales La Cava, apoyo familiar Beccar, orientación comunitaria San Isidro, recursos sociales ONG, Manos de La Cava ayuda, problemáticas sociales, derechos del niño',
			robots: 'index, follow',

			ogTitle: `${pageSpecificTitle} | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `${pageSpecificTitle} | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(socialInterventionsMeta);
	}
}
