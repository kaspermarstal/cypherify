What we want
============

- Generic neo4j interface
- GraphQL type checking

Solution
========

- A Cypher DSL
- A GraphQL aware result parser

Example
-------

Retrive a user who has friends.

```
import {
  cypherify
  match
  node
}

// Construct a cypherify object for cypher expression `MATCH (user:User)-[:FRIEND_OF]->() RETURN user`.
// Internally, an Abstract Syntax Tree (AST) is built that we can later use to generate a cypher
// string, a query object for the thingdom neo4j driver, parse Neo4j response into GraphQL format
// and/or validate the Response against a GraphQL schema.
let cypherifyUserQuery = new cypherify.match.node('user', 'User', {}).out(null, null, { type: FRIEND_OF }).node(null, 'User').return_('user');

// We gave the user-node above an empty object because this data will later be specified at query-time.

// Create a query with a Cypher string and associated parameters, i.e.
// {
//   query: `MATCH (user:User {user_properties})-[:FRIEND_OF]->() RETURN user`,
//   parameters: {} // <-- will be filled in by the GraphQL resolver at query-time
// }
let userQuery = cypherifyUserQuery.toQuery();

// GraphQL Schema
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
      resolve: (root, {id}) => {
        // Populate the parameter object
        userQuery.parameters.user_properties.id = id;

        // neo4j.request() returns a promise to toGraphQL() that toGraphQL() itself  
        // promises to parse into GraphQL format. From the AST we know the shape
        // of the returned data and how to parse it. The query will be validated
        // against a GraphQL schema if provided.
        return cypherifyUserQuery.toGraphQL(neo4j.request(userQuery), UserType);
      },
    },
  }),
});
```

Language
--------
There are three main possible dialects:
  - chai-esque
      cypheriphy
        .match.path.node({ name: a, label: label, props: props }).out('friend').node.in('friend').node('friendOfFriend')
        .where.property('a', 'name').eq('Alice')
        .returns.property('a', 'name').property('friendOfFriend', 'name')
        .toCypher();
      - Pro: Pure chain (more idiomatic JS?)
      - Cons: Notation ambiguity
  - Java Cypher DSL-esque
      cypherify
        .match(path('p', node('a').out('friend').node.out('friend').node('friendOfFriend')))
        .where(identifier('a').property('name').eq('Alice'))
        .returns(identifier('a').property('name').and(asdks).or(), identifier('friendOfFriend').property('name'))
      - Pro: Takes ques from DSL developed by neo4j itself, no notation ambiguity
      - Cons: Verbose, more Java-idomatic than javascript idiomatic
  - ECMA6-esque
      cypherify
        .match(
          node('a', {id: id1})
            .out('FRIEND_OF', '\*..2')
            .node('b'),
          node('c', {name: 'Charlie'})
        ).where(
          {a,b} => a['name'].eq('Alice').and(b('name').eq('Bob')),
          c => c('age').ht(30)
        ).return('a', 'b')
      - Pros: Simple framework (all clauses takes a list of expressions), able to reference identifiers in a javascript idiomatic way
      - Cons: ?


Patterns
--------

`path` takes 1 argument
- 'name'

`node` takes 3 arguments
- 'name'
- 'label'|['listoflabels']
- {name_properties}

`relationship` takes 1, 2, 3 or 4 arguments
- 1: 'name'
- 2: 'label'|['listoflabels']
- 3: {name_properties}
- 4: '\*lengthexpr'


We do not implement `START` since this is an antipattern in Neo4j 2.0+. Use match instead.
