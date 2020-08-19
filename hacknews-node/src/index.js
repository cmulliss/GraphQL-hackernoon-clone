const { GraphQLServer } = require('graphql-yoga')

// 1 used to store links at runtime
const links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
]

// 1
let idCount = links.length
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
  },
}

// 3 having moved typeDefs to separate file
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log('Server is running on http://localhost:4000'))

/*
1. The typeDefs constant defines your GraphQL schema (more about this in a bit). Here, it defines a simple Query type with one field called info. This field has the type String!. The exclamation mark in the type definition means that this field is required and can never be null.

2. The resolvers object is the actual implementation of the GraphQL schema. Notice how its structure is identical to the structure of the type definition inside typeDefs: Query.info.

3. Finally, the sch3.ema and resolvers are bundled and passed to the GraphQLServer which is imported from graphql-yoga. This tells the server what API operations are accepted and how they should be resolved.

First off, note that you’re entirely removing the Link resolvers (as explained at the very end of the last section). They are not needed because the GraphQL server infers what they look like.

Also, here’s what’s going on with the numbered comments:

You’re adding a new integer variable that simply serves as a very rudimentary way to generate unique IDs for newly created Link elements.
The implementation of the post resolver first creates a new link object, then adds it to the existing links list and finally returns the new link.
*/
