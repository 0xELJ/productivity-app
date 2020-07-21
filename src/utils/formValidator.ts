export function required(value?: any): undefined | string {
    return (value || value === 0) ? undefined : 'Campo requerido';
}

export function mustBeNumber(value?: any): undefined | string {
    const number = parseInt(value);
    return isNaN(number) ? 'El valor debe ser númerico': undefined;
}

export function minValue(min: number): (value: string) => undefined | string {
    return function(value: string) {
        const number = parseInt(value);
        return isNaN(number) || number >= min ? undefined : 'El valor debe ser mayor a ' + min;
    };
}

export function maxValue(max: number): (value: string) => undefined | string {
    return function (value: string) {
        const number = parseInt(value);
        return isNaN(number) || number <= max ? undefined : 'El valor debe ser menor a ' + max;
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
