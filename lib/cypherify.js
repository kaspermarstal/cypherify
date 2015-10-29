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

  toString() {
    // parse ast to string
  }
}

export {
  node,
  path
} from './pattern'
