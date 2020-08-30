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

export function isEmail(value: string) {
    const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase()) ? undefined : 'Email is in the wrong format';
}

export function mustBeEqualsTo(fieldName: string): (value: any, allValues: { [key: string]: any }) => undefined | string {
    return function (value: any, allValues: { [key: string]: any }) {
        const fieldLabel = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
        return value === allValues[fieldName] ? undefined : `Value must be equals to ${fieldLabel}`;
    }
}

export function minLength(min: number): (value: string) => undefined | string {
    return function (value: string) {
        return value.length >= min ? undefined : `Value must contain at least ${min} characters`;
    }
}

export function maxLength(max: number): (value: string) => undefined | string {
    return function(value: string) {
        return value.length <= max ? undefined: `Value is too long`;
    }
}

export function mustMatch(pattern: RegExp, errorMessage: string): (value: string) => undefined | string {
    return function(value: string) {
        return pattern.test(value) ? undefined : errorMessage;
    }
}
