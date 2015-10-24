/* @flow */
export {node, path} from './pattern'
/**
 * Expression
 * - Value
 * - Predicate
 *   - Pattern
 */
class Cypher {
  clauses: any;

  constructor() {
    this.clauses = []
  }

  /**
   * A match clause takes a list of patterns
   */
  match(...patterns) {
    this.clauses.push('MATCH')
    return this
  }

  /**
   * A match clause takes a list of predicates
   */
  where(...predicates) {
    let x = {a: {eq: () => 2}}
    predicates.map(thunk => thunk(x))

    this.clauses.push('WHERE')
    return this
  }

  /**
   * A return clause takes a list of expression-thunks
   */
  return(...thunks) {
    let x = {x: {prop: (a) => a}}
    let exps = thunks.map(thunk => {
      switch(typeof thunk) {
      case 'string':
        return thunk
      default:
        return thunk(x)
      }
    })

    this.clauses.push('RETURN ' + exps.join(', '))
    return this
  }

  /**
   * ORDER BY is a sub-clause following RETURN or WITH,
   * and it specifies that the output should be sorted and how.
   */
  orderBy() {
    this.clauses.push('ORDER BY')
    return this
  }

  toCypher() {
    return this.clauses.join(' ')
  }
}

export function cypherify(){
  return new Cypher()
}
