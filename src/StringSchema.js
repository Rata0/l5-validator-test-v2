export default class StringSchema {
    constructor(validators) {
        this.validators = [...validators];
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }

    startsFromUpperCase() {
        const uncorrectedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '?', ' '];
        const validator = (str) => (str.length > 0 ? str[0].toUpperCase() === str[0]
        && !uncorrectedCharacters.includes(str[0]) : false);
        return new StringSchema([...this.validators, validator]);
      }

    length(number) {
        const validator = (str) => str.length === number;
        return new StringSchema([...this.validators, validator]);
    }

    hasExclamation() {
        const validator = (value) => value.includes('!');
        return new StringSchema([...this.validators, validator]);
      }
}