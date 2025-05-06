import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SliderComponent } from '@mdlc/shared/components/slider/slider.component';
import { Image } from '@mdlc/shared/models/image';

@Component({
	selector: 'mdlc-sponsors',
	imports: [SliderComponent],
	templateUrl: './sponsors.component.html',
	styleUrl: './sponsors.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {
	/** Amount of items per slide. */
	protected itemsPerSlide = 4;

	/** Sponsors. */
	protected readonly sponsors: Image[] = [
		{
			imgUrl: 'assets/home/sponsors/allaria.webp',
			imgAlt: 'Logo de Allaria',
		},
		{
			imgUrl: 'assets/home/sponsors/banco-hipotecario.webp',
			imgAlt: 'Logo de Banco Hipotecario',
		},
		{
			imgUrl: 'assets/home/sponsors/banco-macro.webp',
			imgAlt: 'Logo de Banco Macro',
		},
		{
			imgUrl: 'assets/home/sponsors/boating-club.webp',
			imgAlt: 'Logo del Boating	Club',
		},
		{
			imgUrl: 'assets/home/sponsors/byma.webp',
			imgAlt: 'Logo de BYMA',
		},
		{
			imgUrl: 'assets/home/sponsors/diseno-bar.webp',
			imgAlt: 'Logo de Diseño Bar',
		},
		{
			imgUrl: 'assets/home/sponsors/municipalidad-san-isidro.webp',
			imgAlt: 'Logo de la Municipalidad de San Isidro',
		},
		{
			imgUrl: 'assets/home/sponsors/union-ganadera.webp',
			imgAlt: 'Logo de Unión Ganadera',
		},
	];

	protected readonly sponsorSliderConfig: SwiperOptions = {
		// --- Modules to use. ---
		modules: [Navigation, Pagination, Autoplay],

		// --- Behavior. ---
		spaceBetween: 20, // Space between slides.
		loop: true, // Creates an infinite loop.
		centeredSlides: false, // Whether to center the slides or not.

		// --- Autoplay. ---
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},

		// --- Navigation. ---
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// --- Pagination. ---
		pagination: {
			el: '.swiper-pagination',
			clickable: false,
		},

		// --- Breakpoints. ---
		slidesPerView: 1,
		breakpoints: {
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1280: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
		},
	};
}
