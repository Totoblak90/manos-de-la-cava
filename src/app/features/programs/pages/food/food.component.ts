import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-food',
	imports: [ContentLayoutComponent, ImageViewerComponent],
	templateUrl: './food.component.html',
	styleUrls: ['../../programs.component.css', './food.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	/** @inheritdoc */
	public ngOnInit(): void {
		const pageSpecificTitle = 'Alimentación y Calidad Nutricional en La Cava';
		const pageSpecificDescription =
			'Manos de La Cava provee desayuno, almuerzo y merienda a 400 personas en La Cava, Beccar, asegurando una nutrición adecuada y promoviendo hábitos saludables.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Nutrición y bienestar para la comunidad de San Isidro.';

		const foodMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'alimentación comunitaria La Cava, calidad nutricional Beccar, comedor ONG San Isidro, programa nutrición Manos de La Cava, seguridad alimentaria, hábitos saludables',
			robots: 'index, follow',

			ogTitle: `Nutrición Saludable para Todos | Programa de Alimentación | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Nutrición Saludable para Todos | Programa de Alimentación | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(foodMeta);
	}
}
