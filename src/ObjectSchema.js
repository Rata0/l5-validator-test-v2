export default class ObjectSchema {
    constructor(shape) {
        this.validators = shape;
    }

    shape(value) {
        return new ObjectSchema(value);
    }

    isValid(value) {
        const keys = Object.keys(value);
        if (keys.length !== Object.keys(this.validators).length) {
            return false;
        }

        return keys.every((key) => this.validators[key].isValid(value[key]));
    }
}