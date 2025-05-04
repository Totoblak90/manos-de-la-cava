import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { LoadingDirective } from './loading.directive';

describe('LoadingDirective', () => {
	let spectator: SpectatorDirective<LoadingDirective>;

	const createSpectator = createDirectiveFactory(LoadingDirective);

	beforeEach(() => {
		spectator = createSpectator(`<div mdlcLoading></div>`);
	});

	it('applies loading class on element', () => {
		spectator.directive.mdlcLoading = true;
		expect(spectator.element.classList.contains('mdlc-loading')).toBe(true);
	});

	it('removes loading class on element', () => {
		spectator.directive.mdlcLoading = false;
		expect(spectator.element.classList.contains('mdlc-loading')).toBe(false);
	});

	it('disables element', () => {
		spectator.directive.mdlcLoading = true;
		expect(spectator.element.hasAttribute('disabled')).toBe(true);
	});

	it('enables element', () => {
		spectator.directive.mdlcLoading = false;
		expect(spectator.element.hasAttribute('disabled')).toBe(false);
	});
});
