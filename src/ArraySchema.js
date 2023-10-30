export default class ArraySchema {
    constructor(validators) {
        this.validators = [...validators];
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }

    maxDepth(max) {
        const validator = (values) => {
          const iter = (element, depth = -1) => {
            if (!Array.isArray(element)) {
              return depth;
            }
            const result = element.map((value) => iter(value, depth + 1));
            return Math.max(...result);
          };
          return iter(values) <= max;
        };
    
        return new ArraySchema([...this.validators, validator]);
      }
} 