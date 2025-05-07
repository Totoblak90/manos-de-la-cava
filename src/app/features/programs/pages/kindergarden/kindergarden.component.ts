import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { GalleryComponent } from '@mdlc/features/programs/components/gallery/gallery.component';
import { GalleryItem } from '@mdlc/shared/models/gallery-item';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';

@Component({
	selector: 'mdlc-kindergarden',
	imports: [ContentLayoutComponent, ImageViewerComponent, GalleryComponent],
	templateUrl: './kindergarden.component.html',
	styleUrls: ['../../programs.component.css', './kindergarden.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KindergardenComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	readonly kindergardenGalleryImages: GalleryItem[] = [
		{
			imageUrl: 'assets/programs/kindergarden/manitos-2.webp',
			altText: 'Niños jugando con bloques de construcción coloridos en el jardín maternal.',
			width: 600,
			height: 400,
		},
		{
			imageUrl: 'assets/programs/kindergarden/manitos-3.webp',
			altText: 'Niña sonriendo mientras juega en una estructura tipo tobogán en el jardín maternal.',
			width: 600,
			height: 400,
		},
	];

	/** @inheritdoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Jardín Maternal "Manitos" en La Cava';
		const pageSpecificDescription =
			'Conocé "Manitos", nuestro jardín maternal en La Cava, Beccar, donde acompañamos a niños de 45 días a 3 años con cuidado, juego y estimulación temprana para un desarrollo integral.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Jardín Maternal Manitos, cuidado y desarrollo infantil.';

		const kindergardenMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'jardín maternal La Cava, guardería Beccar, estimulación temprana San Isidro, cuidado infantil ONG, Manos de La Cava Manitos, primera infancia, desarrollo integral niños',
			robots: 'index, follow',

			ogTitle: `Jardín Maternal "Manitos": Cuidado y Desarrollo en Primera Infancia | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Jardín Maternal "Manitos": Cuidado y Desarrollo en Primera Infancia | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(kindergardenMeta);
	}
}
