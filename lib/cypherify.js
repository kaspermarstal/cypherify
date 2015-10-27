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
   * Reading clauses
   */

  match(...thunks) {
    this.ast.push({
      MATCH: this.toArray(thunks)
    });

    return this;
  };

  optionalMatch(...thunks) {
    this.ast.push({
      OPTIONAL_MATCH: this.toArray(thunks)
    });

    return this;
  };

  where(...thunks) {
   this.ast.push({
     WHERE: this.toArray(thunks)
   });

   return this;
 };

  /**
   * Writing clauses
   */

   create(...thunks) {
     this.ast.push({
       CREATE: this.toArray(thunks)
     });

     return this;
   };

   createUnique(...thunks) {
     this.ast.push({
       CREATE_UNIQUE: this.toArray(thunks)
     });

     return this;
   };

   delete(...thunks) {
     this.ast.push({
       DELETE: this.toArray(thunks)
     });

     return this;
   };

   forEach_(...thunks) {
     this.ast.push({
       FOREACH: this.toArray(thunks)
     });

     return this;
   };

   merge(...thunks) {
     this.ast.push({
       MERGE: this.toArray(thunks)
     });

     return this;
   };

   remove(...thunks) {
     this.ast.push({
       REMOVE: this.toArray(thunks)
     });

     return this;
   };

   set(...thunks) {
     this.ast.push({
       SET: this.toArray(thunks)
     });

     return this;
   };

  /**
   * General clauses
   */

   limit(...thunks) {
     this.ast.push({
       LIMIT: this.toArray(thunks)
     });

     return this;
   };

   orderBy(...thunks) {
     this.ast.push({
       ORDER_BY: this.toArray(thunks)
     });

     return this;
   };

   return_(...thunks) {
     this.ast.push({
       RETURN: this.toArray(thunks)
     });

     return this;
   };

   skip(...thunks) {
     this.ast.push({
       SKIP: this.toArray(thunks)
     });

     return this;
   };

   union(...thunks) {
     this.ast.push({
       UNWIND: this.toArray(thunks)
     });

     return this;
   };

   unwind(...thunks) {
     this.ast.push({
       UNWIND: this.toArray(thunks)
     });

     return this;
   };

   using(...thunks) {
     this.ast.push({
       UNWIND: this.toArray(thunks)
     });

     return this;
   };

   with_(...thunks) {
     this.ast.push({
       WITH: this.toArray(thunks)
     });

     return this;
   };

  /**
   * Predicates (http://neo4j.com/docs/stable/query-predicates.html)


  /**
   * Aggregation (http://neo4j.com/docs/stable/query-aggregation.html)
   */

  /**
   * Scalar functions (http://neo4j.com/docs/stable/query-functions-scalar.html)
   */

  /**
   * Collection functions
   */

  /**
   * Mathematic functions
   */

  /**
   * String functions
   */

  /**
   * Cypherify internal
   */

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
