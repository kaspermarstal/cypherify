/* @flow */
export {node, path} from './pattern';
import type from './type.js';

export class cypherify  {
  constructor() {
    this.ast.value = [{
      type: type.CYPHER,
      value: []
    }];
  }

  create(...thunks) {
    this.ast.value.push({
      type: type.CREATE,
      value: this.toArray(thunks)
    });

    return this;
  };

  match(...thunks) {
    this.ast.value.push({
      type: type.MATCH,
      value: this.toArray(thunks)
    });

    return this;
  };

  optionalMatch(...thunks) {
    this.ast.value.push({
      type: type.OPTIONAL,
      value: this.toArray(thunks)
      }
    });

    return this;
  };

  return_(...thunks) {
    this.ast.value.push({
      type: type.RETURN;
      value: this.toArray(thunks)
    });

    return this;
  };

  where(...thunks) {
    this.ast.value.push({
      type: type.WHERE;
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
    return this.ast;
  }
}
