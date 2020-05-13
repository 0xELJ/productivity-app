export class FormValidator {
    required(value?: any): undefined | string {
        return (value || value === 0) ? undefined : 'Campo requerido';
    }

    mustBeNumber(value?: any): undefined | string {
        const number = parseInt(value);
        return isNaN(number) ? 'El valor debe ser númerico': undefined;
    }

    minValue(min: number): (value: string) => undefined | string {
        return function(value: string) {
            const number = parseInt(value);
            return isNaN(number) || number >= min ? undefined : 'El valor debe ser mayor a ' + min;
        };
    }

    maxValue(max: number): (value: string) => undefined | string {
        return function (value: string) {
            const number = parseInt(value);
            return isNaN(number) || number <= max ? undefined : 'El valor debe ser menor a ' + max;
        }
    }

    composeValidators(...validators: any[]): (value: any, allValues: object) => undefined {
        return function(value: any, allValues: object) {
            return validators.reduce(
                (error, validator) => {
                    return error || validator(value, allValues);
                }, undefined
            );
        }
    }

    parseToNumber(value: any): string | number {
        const number = parseInt(value);
        return isNaN(number) ? '' : number;
    }
}
