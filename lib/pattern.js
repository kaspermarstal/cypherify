/* @flow */
import {Expression} from './expression'

/**
 * Patterns and pattern-matching are at the very heart of Cypher, so being
 * effective with Cypher requires a good understanding of patterns.
 *
 * Using patterns, you describe the shape of the data you’re looking for.
 * For example, in the MATCH clause you describe the shape with a pattern, and
 * Cypher will figure out how to get that data for you.
 *
 * The pattern describes the data using a form that is very similar to how one
 * typically draws the shape of property graph data on a whiteboard: usually as
 * circles (representing  * nodes) and arrows between them to represent
 * relationships.
 *
 * Patterns appear in multiple places in Cypher:
 * in MATCH, CREATE and MERGE clauses, and in pattern expressions.
 *
 */
export class Pattern extends Expression {
  constructor() {
    super()
  }
  out(name: string) {
    return this
  }
  path(name: string, ...rest) {
    return this
  }
  node(name: string, ...args) {
    return this
  }
}

export function node(...args){
  const pattern = new Pattern()
  return pattern.node(...args)
}
export function path(...args){
  const pattern = new Pattern()
  return pattern.path(...args)
}
