import { ChangeDetectionStrategy, Component, ContentChild, input, viewChild } from '@angular/core';

import { FormControlDirective, NgControl, NgModel } from '@angular/forms';

import { FormErrorWrapperComponent } from '../form-error-wrapper/form-error-wrapper.component';

@Component({
	selector: 'mdlc-label',
	imports: [FormErrorWrapperComponent],
	templateUrl: './label.component.html',
	styleUrl: './label.component.css',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
	/** Text of control's label. */
	public labelText = input<string | null>(null);

	/** Wrapper displaying errors. */
	public errorWrapper = viewChild.required<FormErrorWrapperComponent>(FormErrorWrapperComponent);

	/** Catch inner input by form control directive. */
	@ContentChild(NgControl)
	public set input(i: NgModel | FormControlDirective) {
		// Need to pass this manually, since ContentChild does not catch the slot that is nested.
		this.errorWrapper().input = i;
	}
}
