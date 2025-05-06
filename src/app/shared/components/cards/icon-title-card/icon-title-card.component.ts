import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconName } from '@mdlc/shared/models/icon';

@Component({
	selector: 'mdlc-icon-title-card',
	imports: [MatIconModule],
	templateUrl: './icon-title-card.component.html',
	styleUrl: './icon-title-card.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTitleCardComponent {
	/** Is SVG icon. */
	public readonly isSvgIcon = input(false);

	/** Icon name. */
	public readonly iconName = input.required<IconName>();

	/** Card title. */
	public readonly title = input.required<string>();
}
