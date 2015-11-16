import {
  EXPRESSION,
  NODE,
  RELATIONSHIP,
  RETURN,
} from './types'

export function graphqlify(ast, input, schema) {
  result = visit(ast);
  // TODO: Validate result against schema
  return result;
}

function visit(ast) {
  switch(ast.type) {
    case EXPRESSION:
      return ast.value.reduce((array, value) => arr.push(value), [])
    case RETURN:
      visit(ast.value):
    case NODE:
      return input[ast.value.name];
    case RELATIONSHIP:
      return input[ast.value.name];
    default:
      // Step down into three
      visit(ast.value);
  }
}
