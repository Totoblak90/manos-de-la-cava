import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TextCardComponent } from '@mdlc/shared/components/cards/text-card/text-card.component';
import { ContentLayoutComponent } from '@mdlc/shared/components/content-layout/content-layout.component';
import { ImageViewerComponent } from '@mdlc/shared/components/image-viewer/image-viewer.component';
import { MetaTagConfig } from '@mdlc/shared/models/meta-tag-config';
import { MetaTagService } from '@mdlc/shared/services/meta-tag.service';

@Component({
	selector: 'mdlc-education',
	imports: [ContentLayoutComponent, ImageViewerComponent, TextCardComponent],
	templateUrl: './education.component.html',
	styleUrls: ['../../programs.component.css', './education.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit {
	private readonly metaTagService = inject(MetaTagService);

	public ngOnInit(): void {
		const pageSpecificTitle = 'Programa de Educación en La Cava';
		const pageSpecificDescription =
			'Manos de La Cava impulsa la educación en La Cava, Beccar, con acompañamiento escolar para primaria y secundaria, tutorías y apoyo psicopedagógico para un futuro mejor.';

		const defaultOgImage = `${this.metaTagService.getBaseUrl()}/assets/social/manos-de-la-cava-default.webp`;
		const defaultOgImageAlt = 'Manos de La Cava: Educación y oportunidades para la comunidad de San Isidro.';

		const educationMeta: MetaTagConfig = {
			title: pageSpecificTitle,
			description: pageSpecificDescription,
			keywords:
				'educación La Cava, apoyo escolar Beccar, tutorías San Isidro, programa educativo ONG, Manos de La Cava educación, alfabetización, psicopedagogía, fonoaudiología, deserción escolar',
			robots: 'index, follow',

			ogTitle: `Educación que Transforma: Apoyo Escolar y Tutorías | Manos de La Cava`,
			ogDescription: pageSpecificDescription,
			ogType: 'article',
			ogImage: defaultOgImage,
			ogImageAlt: defaultOgImageAlt,

			twitterCard: 'summary_large_image',
			twitterTitle: `Educación que Transforma: Apoyo Escolar y Tutorías | Manos de La Cava`,
			twitterDescription: pageSpecificDescription,
			twitterImage: defaultOgImage,
			twitterImageAlt: defaultOgImageAlt,
		};

		this.metaTagService.updateAllTags(educationMeta);
	}
}
