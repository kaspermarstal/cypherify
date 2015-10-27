/* @flow */
export {node, path} from './pattern'
/**
 * Expression
 * - Value
 * - Predicate
 *   - Pattern
 */
export class cypherify {

  constructor() {
    this.ast = [];
    this.parameters = {};
  }

  /**
   * A start clause takes a list of expression-thunks
   */
  match(...thunks) {
    this.ast.push({
      START: this.toArray(thunks)
    });

    return this;
  };


  /**
   * A match clause takes a list of expression-thunks
   */
  match(...thunks) {
    this.ast.push({
      MATCH: this.toArray(thunks)
    });

    return this;
  };

  /**
   * An optional match clause takes a list of expression-thunks
   */
  optionalMatch(...thunks) {
    this.ast.push({
      OPTIONAL_MATCH: this.toArray(thunks)
    });

    return this;
  };

  /**
   * A where clause takes a list of predicates
   */
  where(...thunks) {
   this.ast.push({
     WHERE: this.toArray(thunks)
   });

   return this;
 };

  /**
  * A return clause takes a list of expression-thunks
  */
  returns(...thunks) {
    this.ast.push({
      RETURN: this.toArray(thunks)
    });

    return this;
  };

  loadCsvFrom(url, name) {
    this.ast.push({
      LOAD_CSV_FROM: {
        url: url,
        name: name
      }
    })
  }

  toArray(thunks) {
    return thunks.reduce(function(array, thunk) {
      array.push(thunk);
      return array;
    }, [])
  };

  toAST() {
    return this.ast;
  }
}
