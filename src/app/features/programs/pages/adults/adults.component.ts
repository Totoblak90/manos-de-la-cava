import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';

import { GalleryItem } from '@mdlc/shared/models/gallery-item';

import { GalleryComponent } from '../../components/gallery/gallery.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-adults',
	imports: [ContentLayoutComponent, ImageViewerComponent, GalleryComponent],
	templateUrl: './adults.component.html',
	styleUrls: ['../../programs.component.css', './adults.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdultsComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	readonly adultsGalleryImages: GalleryItem[] = [
		{
			imageUrl: 'assets/programs/kindergarden/manitos-1.webp',
			altText: 'Adultos participando en talleres de capacitación.',
			width: 600,
			height: 400,
		},
		{
			imageUrl: 'assets/programs/kindergarden/manitos-2.webp',
			altText: 'Grupo de adultos en una reunión comunitaria.',
			width: 600,
			height: 400,
		},
	];

	/** @inheritdoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Programas para Adultos en La Cava';
		const pageSpecificDescription =
			'Manos de La Cava ofrece talleres de formación en oficios, espacios de contención y apoyo para adultos del barrio La Cava, Beccar, promoviendo la inclusión y el desarrollo personal.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Oportunidades y contención para adultos en San Isidro.';

		const adultsMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'programas para adultos La Cava, formación oficios Beccar, talleres para adultos San Isidro, contención adultos ONG, Manos de La Cava adultos, desarrollo personal, inclusión laboral',
			robots: 'index, follow',

			ogTitle: `Desarrollo y Formación para Adultos | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Desarrollo y Formación para Adultos | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(adultsMeta);
	}
}
