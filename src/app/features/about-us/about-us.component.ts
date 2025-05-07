import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-about-us',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './about-us.component.html',
	styleUrl: './about-us.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheritdoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Nosotros - Conoce la Historia y Misión de Manos de La Cava';
		const pageSpecificDescription =
			'Descubrí la historia, misión y visión de Manos de La Cava, una asociación civil que desde 1997 trabaja por el desarrollo integral de la comunidad de La Cava en Beccar, San Isidro.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Conoce nuestra historia y cómo transformamos la comunidad.';

		const aboutUsMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'quiénes somos Manos de La Cava, historia ONG La Cava, misión visión asociación civil, desarrollo comunitario Beccar, trabajo social San Isidro, voluntariado ONG',
			robots: 'index, follow',

			ogTitle: `Nuestra Historia y Compromiso: ${pageSpecificTitle}`,
			ogDescription: pageSpecificDescription,
			ogType: 'profile',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Nuestra Historia y Compromiso: ${pageSpecificTitle}`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(aboutUsMeta);
	}
}
