import { type } from './type';

export function graphqlify(ast, input, schema) {
  result = visit(ast);
  // TODO: Validate result against schema
  return result;
}

function visit(ast) {
  switch(ast.type) {
    case type.EXPRESSION:
      return ast.value.map(visit).join(`, `)
    case type.RETURN:
      visit(ast.value):
    case type.NODE:
      return ast.value.name;
    case type.RELATIONSHIP:
      return ast.value.name;
    default:
      // Step down into three
      visit(ast.value);
  }
}
