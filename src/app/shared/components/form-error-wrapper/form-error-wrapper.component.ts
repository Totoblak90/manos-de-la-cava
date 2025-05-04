import { ChangeDetectionStrategy, Component, ContentChild, DestroyRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinct, EMPTY, filter, map, merge, Observable, ReplaySubject, switchMap, tap } from 'rxjs';
import { FormControlDirective, NgControl, NgModel, ValidationErrors } from '@angular/forms';
import { AppValidators } from '@mdlc/shared/utils/validators';
import { listenControlTouched } from '@mdlc/shared/utils/rxjs/listen-control-touched';
import { ValidationMessageComponent } from '../validation-message/validation-message.component';

@Component({
	selector: 'mdlc-form-error-wrapper',
	imports: [ValidationMessageComponent],
	templateUrl: './form-error-wrapper.component.html',
	styleUrl: './form-error-wrapper.component.css',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorWrapperComponent {
	/** Form control directive. */
	protected readonly input$ = new ReplaySubject<NgModel | FormControlDirective>(1);

	/** Errors stream. */
	protected readonly errorsSubject = new ReplaySubject<ValidationErrors | null>(1);

	private readonly destroyRef = inject(DestroyRef);

	/** Catch inner input by form control directive. */
	@ContentChild(NgControl, { descendants: true })
	public set input(i: NgModel | FormControlDirective) {
		if (i) {
			this.input$.next(i);
		}
	}

	/** Custom errors message. */
	@Input()
	public set errorText(value: string | null) {
		this.errorsSubject.next(value != null ? AppValidators.buildAppError(value) : value);
	}

	/** @inheritDoc */
	public ngOnInit(): void {
		this.initErrorStreamSideEffect().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
	}

	private initErrorStreamSideEffect(): Observable<ValidationErrors | null> {
		return this.input$.pipe(
			distinct(),
			switchMap((input) =>
				merge(
					input.statusChanges ?? EMPTY,
					listenControlTouched(input.control).pipe(filter((touched) => touched)),
				).pipe(map(() => input)),
			),
			tap((input) => this.errorsSubject.next(input.errors)),
		);
	}
}
