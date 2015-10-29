/* @flow */
import { Expression } from './expression';
import { type } from './type'
export { node, path } from './pattern';

export class cypherify extends Expression  {
  constructor() {
    super();
  }

  create(...thunks) {
    this.value.push({
      type: type.CREATE,
      value: this.toArray(thunks)
    });

    return this;
  };

  match(...thunks) {
    this.value.push({
      type: type.MATCH,
      value: this.toArray(thunks)
    });

    return this;
  };

  optionalMatch(...thunks) {
    this.value.push({
      type: type.OPTIONAL_MATCH,
      value: this.toArray(thunks)
    });

    return this;
  };

  return_(...thunks) {
    this.value.push({
      type: type.RETURN,
      value: this.toArray(thunks)
    });

    return this;
  };

  where(...thunks) {
    this.value.push({
      type: type.WHERE,
      value: this.toArray(thunks)
    });

    return this;
  };

  toArray(thunks) {
    return thunks.reduce(function(array, thunk) {
      array.push(thunk);
      return array;
    }, [])
  };

  toAST() {
    return this;
  }
}
