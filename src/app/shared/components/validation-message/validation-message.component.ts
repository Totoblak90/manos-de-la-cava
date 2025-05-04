import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import {
	ValidationErrorCode,
	MatchErrorData,
	LengthErrorData,
	AppErrorData,
	MinValueErrorData,
	MaxValueErrorData,
} from '../../models/validation-error-code';

const DEFAULT_ERROR_MESSAGE = 'Value is not valid';

const VALIDATION_ERROR_MESSAGE_FACTORIES = {
	[ValidationErrorCode.Email]: () => 'Email inválido',
	[ValidationErrorCode.Required]: () => 'Este campo es requerido',
	[ValidationErrorCode.Match]: ({ controlTitle }: MatchErrorData) => `El campo no concuerda con "${controlTitle}"`,
	[ValidationErrorCode.MinLength]: ({ requiredLength }: LengthErrorData) =>
		`La cantidad mínima de carateres requeridos es: ${requiredLength}`,
	[ValidationErrorCode.MaxLength]: ({ requiredLength }: LengthErrorData) =>
		`La cantidad máxima de carateres permitidos es: ${requiredLength}`,
	[ValidationErrorCode.Pattern]: () => 'Value does not satisfy the pattern',
	[ValidationErrorCode.AppError]: ({ message }: AppErrorData) => message,
	[ValidationErrorCode.Min]: ({ min }: MinValueErrorData) => `El valor mínimo permitido es: ${min}`,
	[ValidationErrorCode.Max]: ({ max }: MaxValueErrorData) => `El valor máximo permitido es: ${max}`,
	[ValidationErrorCode.Greater]: ({ controlTitle }: any) => `El valor debe ser mayor a: ${controlTitle}`,
};

@Component({
	selector: 'mdlc-validation-message',
	imports: [],
	templateUrl: './validation-message.component.html',
	styleUrl: './validation-message.component.css',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationMessageComponent {
	/**
	 * Validation errors.
	 */
	public errors = input.required<ValidationErrors | null>(null);

	/**
	 * Error message as a string.
	 */
	public readonly errorMessage = computed(() => {
		const errors = this.errors();

		if (errors == null) {
			return null;
		}
		const errorCode = Object.keys(errors)[0] as ValidationErrorCode;
		return this.getErrorMessage(errorCode, errors[errorCode]);
	});

	/**
	 * Get error message for specific validation error.
	 * @param errorCode Error code (minlength, required and etc.).
	 * @param errorData Data of error. See details of HTTP validation errors or implementation of custom.
	 * For instance data of minlength error is: { actualLength, requiredLength }.
	 */
	private getErrorMessage(errorCode: ValidationErrorCode, errorData: any): string {
		const factory = VALIDATION_ERROR_MESSAGE_FACTORIES[errorCode];
		if (factory == null) {
			return DEFAULT_ERROR_MESSAGE;
		}
		return factory(errorData);
	}
}
