export function required(fieldName: string): (value: string | number) => undefined | string {
    return function (value: string | number) {
        return (value || value === 0) ? undefined : `${fieldName} is required`;
    }
}

export function mustBeNumber(value?: any): undefined | string {
    const number = parseInt(value);
    return isNaN(number) ? 'The value must be numeric': undefined;
}

export function minValue(min: number): (value: string) => undefined | string {
    return function(value: string) {
        const number = parseInt(value);
        return isNaN(number) || number >= min ? undefined : 'Value must be greater than ' + min;
    };
}

export function maxValue(max: number): (value: string) => undefined | string {
    return function (value: string) {
        const number = parseInt(value);
        return isNaN(number) || number <= max ? undefined : 'Value must be less than ' + max;
    }
}

export function composeValidators(...validators: any[]): (value: any, allValues: object) => undefined {
    return function(value: any, allValues: object) {
        return validators.reduce(
            (error, validator) => {
                return error || validator(value, allValues);
            }, undefined
        );
    }
}

export function parseToNumber(value: any): string | number {
    const number = parseInt(value);
    return isNaN(number) ? '' : number;
}
