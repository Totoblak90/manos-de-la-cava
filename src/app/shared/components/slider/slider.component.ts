import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	input,
	OnChanges,
	OnDestroy,
	SimpleChanges,
	viewChild,
} from '@angular/core';

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
	selector: 'mdlc-slider',
	imports: [],
	templateUrl: './slider.component.html',
	styleUrl: './slider.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterViewInit, OnDestroy, OnChanges {
	/** Swiper configuration. */
	public readonly swiperConfig = input<SwiperOptions>({});

	/** Swiper container element. */
	public readonly swiperContainer = viewChild.required<ElementRef<HTMLElement>>('swiperContainer');

	private swiperInstance?: Swiper;

	/** @inheritdoc */
	public ngAfterViewInit(): void {
		if (this.swiperContainer().nativeElement && this.swiperConfig()) {
			this.initializeSwiper();
		}
	}

	/** @inheridoc */
	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['swiperConfig'] && this.swiperInstance && !changes['swiperConfig'].firstChange) {
			Object.assign(this.swiperInstance.params, this.swiperConfig());
			this.swiperInstance.update();
			this.swiperInstance.setBreakpoint();

			if (this.swiperConfig().autoplay && this.swiperInstance.autoplay) {
				this.swiperInstance.autoplay.stop();
				this.swiperInstance.autoplay.start();
			}
		} else if (
			changes['swiperConfig'] &&
			!this.swiperInstance &&
			this.swiperContainer().nativeElement &&
			!changes['swiperConfig'].firstChange
		) {
			this.initializeSwiper();
		}
	}

	/** @inheridoc */
	public ngOnDestroy(): void {
		this.swiperInstance?.destroy(true, true);
	}

	private initializeSwiper(): void {
		if (this.swiperInstance) {
			this.swiperInstance.destroy(true, true);
		}

		this.swiperInstance = new Swiper(this.swiperContainer().nativeElement, this.swiperConfig());
	}

	/** Go to next slide. */
	public slideNext(): void {
		this.swiperInstance?.slideNext();
	}

	/** Go to previous slide. */
	public slidePrev(): void {
		this.swiperInstance?.slidePrev();
	}

	/** Go to a specific slide. */
	public slideTo(index: number, speed?: number): void {
		this.swiperInstance?.slideTo(index, speed);
	}
}
