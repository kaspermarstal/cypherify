export class MatchExpression {
  constructor() {

  }
}

class Node extends MatchExpression {
  out() {
    return this
  }
  node() {
    return this
  }
}
class Path extends MatchExpression {
  node() {
    return new Node()
  }
}


export function node(){
  return new Node()
  return {
    rel: 1
  }
}
export function path(){
  return new Path()
  return {
    node: 1
  }
}
