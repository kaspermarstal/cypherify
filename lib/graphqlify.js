import { type } from './type';

export function graphqlify(ast, input, schema) {
  result = visit(ast);
  // validate result against schema
  return result;
}

function visit(node) {
  switch(node) {
    case type.EXPRESSION:
      // Reduce/gather result
    case type.NODE:
      // Return node values in GraphQL format
    default:
      // Step down into three
      visit(node.value);
  }
}
