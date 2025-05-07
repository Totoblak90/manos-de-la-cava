import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TextCardComponent } from '@mdlc/shared/components/cards/text-card/text-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-health-access',
	imports: [ContentLayoutComponent, ImageViewerComponent, TextCardComponent],
	templateUrl: './health-access.component.html',
	styleUrls: ['../../programs.component.css', './health-access.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthAccessComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheritdoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Acceso a la Salud en La Cava';
		const pageSpecificDescription =
			'Manos de La Cava facilita el acceso a servicios de salud física y mental, atención psicológica, nutrición y prevención para la comunidad de La Cava, Beccar.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Promoviendo el bienestar y la salud integral en San Isidro.';

		const healthAccessMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'acceso a la salud La Cava, atención psicológica Beccar, promoción de salud San Isidro, nutrición comunitaria, prevención enfermedades ONG, Manos de La Cava salud, bienestar físico mental',
			robots: 'index, follow',

			ogTitle: `Programa de Acceso a la Salud | Bienestar Integral | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Programa de Acceso a la Salud | Bienestar Integral | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(healthAccessMeta);
	}
}
