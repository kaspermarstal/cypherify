What we want
============

- Generic neo4j interface
- GraphQL type checking

Solution
========

- A Cypher DSL
- A GraphQL aware request module

Example
-------

import {
  match
  node
}


var queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          description: 'The internal id of the user',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (root, {id}) =>
        neo4j.query(
          cypherify.match.node('n', { id: id }).out('rel', { type: KNOWS }).node
            .returns('n', 'rel')
            .toString(),
          UserType
        );
    },
  }),
});

There are a couple of things going on

- `cypherify` is an interface to a BDD-style Cypher Query DSL inspired by chai tests (e.g. exepct(obj).to.have.property('key').equal.to.('value'))
- `cypher` returns a { query, param } object where `query` is the query string and param contains the props given to nodes and relationsships. A paramerized query (like above) is best practice use of the Neo4j REST API because it allows Neo4j to cache the execution plan.
- `neo4j.query` takes a { query, param } object and an optional GraphQL object type and promisifies the request. `query` will validate the result against the given GraphQL type if present.
- `neo4j` is our current neo4j class that holds the connection to the database via thingdom/node-neo4j driver.
- We may also choose to make writing clauses (i.e. CREATE, MERGE, SET, DELETE, REMOVE, FOREACH, CREATE UNIQUE) GraphQL type aware.
  - Pro: Typechecking node writes
  - Cons: 'Separation of concerns'. There is more generalization in having cypherify only concern itself with Cypher syntax and leave the graphql type checking to another module, e.g. 'cypherify-graphql'

There are three main possible dialects:
  - chai-esque
      cypheriphy
        .match.path.node({ name: a, label: label, props: props }).out('friend').node.in('friend').node('friendOfFriend')
        .where.property('a', 'name').eq('Alice')
        .returns.property('a', 'name').property('friendOfFriend', 'name')
        .toCypher();
      - Pro: Pure chain (more idiomatic JS?)
      - Cons: More notation ambiguity
  - Java Cypher DSL-esque
      cypherify
        .match(path('p', node('a').out('friend').node.out('friend').node('friendOfFriend')))
        .where(identifier('a').property('name').eq('Alice'))
        .returns(identifier('a').property('name').and(asdks).or(), identifier('friendOfFriend').property('name'))
      - Pro: Takes ques from DSL developed by neo4j itself, less notation ambiguity
      - Cons: expose a lot of keywords because many statements are unanchored, more verbose
  - ECMA6-esque
  ```
      .match(node('a', {id: id1}).out('FRIEND_OF', '*..2').node('b'), node('c', {name: 'Charlie'}))
      .where({a,b} => a['name'].eq('Alice').and.b('name').eq('Bob'), c => c('age').ht(30))
      .return('a', 'b')
  ```

Elements
--------

`node` takes 1, 2, or 3 arguments

- 1: node('name')
- 2: node('name', 'label'|['listoflabels']|{props})
- 3: node('name', 'label'|['listoflabels']|{props}, 'label'|['listoflabels']|{props})

`relationship` takes 1, 2, 3 or 4 arguments

- 1: `relationship('name')`
- 2: `relationship('name', 'label'|['listoflabels']|{props}|'*lengthexpr')`
- 3: `relationship('name', 'label'|['listoflabels']|{props}|'*lengthexpr', 'label'|['listoflabels']|{props}|'*lengthexpr')`
- 4: `relationship('name', 'label'|['listoflabels']|{props}|'*lengthexpr', 'label'|['listoflabels']|{props}|'*lengthexpr', 'label'|['listoflabels']|{props}|'*lengthexpr')`

A lengthexpr always start with an asterisk. This means you can't use an asterisk as the first character in a label.

Reading Clauses
---------------
`MATCH`, `OPTIONAL MATCH`, `WHERE`,  `RETURN`, `AGGREGATION` takes any number of arguments. If an argument is a string it will be directly inserted into the final query. If an argument is a function it will be evaluated and the result string will be inserted into the final query.

We do not implement `START` since this is an antipattern in Neo4j 2+ (use match instead)

Writing Clauses
---------------

{
  query: 'cypher',

}

`CREATE`, `MERGE`, `SET`, `DELETE`, `REMOVE`, `FOREACH`, `CREATE UNIQUE`, takes any number of arguments. An argument is a function which will be evaluated and the result string will be inserted into the final query.

Result
- toString: Returns Cypher string
- Plugin: toQuery: Returns REST API query object { query: string, parameters: { props } }
- Plugin: toGraphQL: the result of the query can be given to cypherify.toGraphQL(result, [schema]) to parsing to GraphQL format. This is nice because of the cypherify object has all the knowledge needed to understand the response. An optional schema can be passed for explicit validation.
