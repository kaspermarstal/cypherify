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

// Construct a cypherify object for cypher expression `MATCH (user)-[:FRIEND_OF]->() RETURN user`.
// Internally, an Abstract Syntax Tree (AST) is build that we can later use to generate the cypher
// string, query object for neo4j driver or parse Neo4j response into GraphQL format.
let cypherifyUserQuery = new cypherify.match.node('user', 'User', {}).out(null, null, { type: FRIEND_OF }).node(null, 'User').return_('user');

// We gave the user-node above an empty object because this data will later be specified at query-time.

// Create a query with a Cypher string and associated parameters, i.e.
// {
//   query: `MATCH (user {user_properties})-[:FRIEND_OF]->() RETURN user`,
//   parameters: {} // <-- will be filled in by the resolver
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

There are a couple of things going on

- `cypherify` provides a Cypher Query DSL inspired by chai tests (e.g. exepct(obj).to.have.property('key').equal.to.('value'))
- `toQuery` returns a { query, param } object where `query` is the query string and param contains the props given to nodes and relationsships. A paramerized query (like above) is best practice use of the Neo4j REST API because it allows Neo4j to cache the execution plan.
- `neo4j.request` takes a { query, param } object and promisifies the request. `toGraphQL()` will validate response against a schema if given.
- `neo4j` is our current neo4j class that holds the connection to the database via thingdom/node-neo4j driver.

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


We do not implement `START` since this is an antipattern in Neo4j 2+. Use match instead.
