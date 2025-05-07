import { inject, Injectable } from '@angular/core';
import { MetaTagConfig } from '../models/meta-tag-config';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root',
})
export class MetaTagService {
	private readonly titleService = inject(Title);

	private readonly metaService = inject(Meta);

	private readonly router = inject(Router);

	private readonly document = inject(DOCUMENT);

	/** Base URL for the website. */
	private readonly baseUrl = 'https://www.manosdelacava.org';

	private readonly defaultSiteName = 'Manos de La Cava';

	private readonly defaultOgImage = `${this.baseUrl}/assets/social/manos-de-la-cava-default.webp`;

	private readonly defaultOgImageAlt = 'Manos de La Cava: Transformando vidas y construyendo futuro en comunidad.';

	/** Get base url. */
	public getBaseUrl(): string {
		return this.baseUrl;
	}

	/**
	 * Updates all meta tags based on the provided configuration.
	 * @param config Meta tag configuration.
	 */
	public updateAllTags(config: MetaTagConfig): void {
		const currentUrl = this.baseUrl + this.router.url;
		const siteNameSuffix = ` | ${this.defaultSiteName}`;

		// Title
		const pageTitle = config.title || this.defaultSiteName;
		const fullTitle =
			pageTitle === this.defaultSiteName || pageTitle.includes(this.defaultSiteName)
				? pageTitle
				: `${pageTitle} ${siteNameSuffix}`;
		this.titleService.setTitle(fullTitle);

		// Description
		this.updateTag('description', config.description);
		// Keywords
		this.updateTag('keywords', config.keywords);
		// Robots
		this.updateTag('robots', config.robots || 'index, follow');
		// Canonical URL
		this.updateCanonicalUrl(config.ogUrl || currentUrl);

		// Open Graph
		const effectiveOgTitle = config.ogTitle || config.title || this.defaultSiteName;
		this.updateTag('og:title', effectiveOgTitle, true);
		this.updateTag('og:description', config.ogDescription || config.description, true);
		this.updateTag('og:type', config.ogType || 'website', true);
		this.updateTag('og:url', config.ogUrl || currentUrl, true);
		this.updateTag('og:image', config.ogImage || this.defaultOgImage, true);
		this.updateTag('og:image:alt', config.ogImageAlt || this.defaultOgImageAlt, true);
		this.updateTag('og:site_name', config.ogSiteName || this.defaultSiteName, true);
		this.updateTag('og:locale', 'es_AR', true);

		// Twitter Card
		this.updateTag('twitter:card', config.twitterCard || 'summary_large_image');
		this.updateTag('twitter:title', config.twitterTitle || effectiveOgTitle, true);
		this.updateTag(
			'twitter:description',
			config.twitterDescription || config.ogDescription || config.description,
			true,
		);
		this.updateTag('twitter:image', config.twitterImage || config.ogImage || this.defaultOgImage, true);
		this.updateTag('twitter:image:alt', config.twitterImageAlt || config.ogImageAlt || this.defaultOgImageAlt, true);
	}

	private updateTag(nameOrProperty: string, content?: string, isProperty = false): void {
		const selector = isProperty ? `property='${nameOrProperty}'` : `name='${nameOrProperty}'`;
		if (content) {
			if (isProperty) {
				this.metaService.updateTag({ property: nameOrProperty, content }, selector);
			} else {
				this.metaService.updateTag({ name: nameOrProperty, content }, selector);
			}
		} else {
			if (content === undefined || content === null) {
				this.metaService.removeTag(selector);
			}
		}
	}

	private updateCanonicalUrl(url: string): void {
		let linkElement = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		if (linkElement) {
			linkElement.setAttribute('href', url);
		} else {
			linkElement = this.document.createElement('link');
			linkElement.setAttribute('rel', 'canonical');
			linkElement.setAttribute('href', url);
			this.document.head.appendChild(linkElement);
		}
	}
}
