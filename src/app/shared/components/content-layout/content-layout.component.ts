import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * @Component ContentLayoutComponent
 * @description
 * Provides a flexible layout container for structuring content sections.
 * It supports two main layout modes, configurable via host classes:
 * 1. 'layout-split': Displays projected content blocks side-by-side on larger screens
 *    (e.g., 992px and up) and stacks them vertically on smaller screens.
 *    - Use 'layout-split--reverse' modifier class to reverse the visual order
 *      of the blocks on larger screens.
 * 2. 'layout-columns': Displays projected content blocks vertically stacked
 *    in a single column on all screen sizes.
 *
 * Content should be projected inside this component, typically wrapped in
 * elements with the class '.content-block'.
 *
 * @usageNotes
 * ### Basic Split Layout (Text Left, Media Right on Desktop)
 * ```html
 * <mdlc-content-layout class="layout-split">
 *   <div class="content-block"> <!-- Text Content -->
 *     <h2>Title</h2>
 *     <p>Description...</p>
 *   </div>
 *   <div class="content-block content-media content-media--image"> <!-- Media Content -->
 *     <figure>
 *        <img src="..." alt="...">
 *     </figure>
 *   </div>
 * </mdlc-content-layout>
 * ```
 *
 * ### Reversed Split Layout (Media Left, Text Right on Desktop)
 * ```html
 * <mdlc-content-layout class="layout-split layout-split--reverse">
 *   <div class="content-block content-media content-media--image"> <!-- Media Content -->
 *      <figure>...</figure>
 *   </div>
 *   <div class="content-block"> <!-- Text Content -->
 *      <h2>Title</h2>
 *      <p>...</p>
 *   </div>
 * </mdlc-content-layout>
 * ```
 *
 * ### Column Layout (Always Stacked)
 * ```html
 * <mdlc-content-layout class="layout-columns">
 *   <div class="content-block">...</div>
 *   <div class="content-block">...</div>
 *   <div class="content-block">...</div>
 * </mdlc-content-layout>
 * ```
 *
 * ### CSS Variables for Customization (Applied on the host element)
 * You can override these default CSS variables by applying them directly via
 * inline style on the `<mdlc-content-layout>` element or through more specific
 * CSS selectors targeting the host.
 *
 * - `--layout-direction-mobile`: CSS `flex-direction` on mobile (default: `column`).
 * - `--layout-direction-desktop`: CSS `flex-direction` on desktop for 'layout-split' (default: `row`).
 * - `--layout-items-align-mobile`: CSS `align-items` on mobile (default: `center`).
 * - `--layout-items-align-desktop`: CSS `align-items` on desktop (default: `flex-start`).
 * - `--layout-gap-mobile`: CSS `gap` between blocks on mobile (default: `var(--spacing-l)`).
 * - `--layout-gap-desktop`: CSS `gap` between blocks on desktop (default: `var(--spacing-l)`).
 * - `--section-margin-bottom`: CSS `margin-bottom` for the entire section (default: `var(--section-spacing)`).
 * - `--block-basis`: CSS `flex-basis` for blocks in 'layout-split' on desktop (default: `50%`). Use to create asymmetric layouts (e.g., `40%`).
 * - `--block-width-mobile`: CSS `width` for blocks on mobile (default: `100%`).
 * - `--media-border-radius`: CSS `border-radius` applied to media elements like `img` (default: `12px`).
 * - `--media-box-shadow`: CSS `box-shadow` applied to media elements like `img` (default: `0 6px 16px rgba(0, 0, 0, 0.12)`).
 *
 * ### Example Overriding Variables:
 * ```html
 * <mdlc-content-layout class="layout-split" style="--block-basis: 60%; --layout-gap-desktop: var(--spacing-xl);">
 *   <div class="content-block"> I will take 60% width </div>
 *   <div class="content-block"> I will take 40% width </div>
 * </mdlc-content-layout>
 * ```
 */
@Component({
	selector: 'mdlc-content-layout',
	imports: [],
	templateUrl: './content-layout.component.html',
	styleUrl: './content-layout.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentLayoutComponent {}
