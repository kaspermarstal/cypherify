export class MatchExpression {
  constructor() {
    this.clauses = [];

    // TODO: Params need to be global for entire cypher expression
    this.params = {};
  }
}

class Node extends MatchExpression {
  node(..args) {
    if(args.length == 0) ;

    let key;
    switch(typeof args[0]) {
      case null:
        key = n0; // <-- TODO: Autogenerate node0, node1, ...
      case 'string':
        key = args[0];
      default:
        throw(new Error('A node requires a name of type string or null'));
    }

    // This is getting out of hand. Is there an elegant way to do this?
    let label;
    let props;
    switch(typeof args[1]) {
      case 'string':
        label = args[1];
      case 'object':
        if(args[1]).isArray) {
          label = args[1]);
        } else {
          this.params[key] = args[1];
        }
    }

    // TODO: parse third arg depending on the type of second. 

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
}
export function path(){
  return new Path()
  return {
    node: 1
  }
}
