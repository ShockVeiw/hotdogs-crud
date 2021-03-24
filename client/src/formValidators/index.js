export const required = value => value ? undefined : 'Required';
export const isNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;