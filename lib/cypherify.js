/* @flow */

import { Clauses } from './clauses'


/**
 * cypherify
 *
 * Cypher expression entry point. Contains the root node of the abstract syntax
 * tree. Decorated with the cypher clauses read/write clauses which are the
 * starting points for any cypher expression tree.
 */

export class cypherify extends Clauses {
  constructor() {
    super();
  }

  toCypher() {
    // parse ast to Cypher
  }

  toString() {
    return JSON.stringify(this)
  }
}

export {
  node,
  path
} from './anchors'
