/* @flow */

import { Clauses } from './clauses';
import { stringify } from './stringify';
import { CYPHERIFY } from './types'

/**
 * cypherify
 *
 * Module interface. Contains the root node of the abstract syntax
 * tree and methods with which to build and/or parse it.
 */

export class cypherify extends Clauses {
  constructor() {
    super();

    this.type = CYPHERIFY;
    this.value = [];
  }

  toAST() {
    return {
      type: this.type,
      value: this.value
    }
  }

  toCypher() {
    return stringify(this.toAST());
  }

  toGraphQL(input, schema) {
    return graphqlify(this.toAST(), input, schema)
  }

  toString() {
    return JSON.stringify(this.toAST());
  }
}

export {
  node,
  path,
  identifier
} from './anchors';

export { stringify } from './stringify'
