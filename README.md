# React

- declarative, looks after DOM
- the declarative paradigm is called that because we declare that this is the state or data. All the different states accounted for in one big object.
- the Name react, reacts to the state.
- lego blocks, reusable components.
- use react developer tools
- undirectional data flow: virtual DOM, data trickles down to DOM.
- Angular, everything built in, very opinionated
- React, use other libs, mix and max, ui library

## HOW TO GRAPHQL

from: <https://www.howtographql.com/graphql-js/0-introduction>

### What is a GraphQL Playground?

- A GraphQL IDE to work with a GraphQL API

- Learn how to build a GraphQL server with graphql-yoga, Node.js & Prisma and best practices for authentication, filtering, pagination and subscriptions.

- Overview
  GraphQL is the rising star of backend technologies. It replaces REST as an API design paradigm and is becoming the new standard for exposing the data and functionality of a web server.

In this tutorial, you’ll learn how to build an idiomatic GraphQL server entirely from scratch.

- This creates a new directory called hackernews-node and initializes it with a package.json file. package.json is the configuration file for the Node.js app you’re building. It lists all dependencies and other configuration options (such as scripts) needed for the app.

- mkdir hackernews-node
- cd hackernews-node
- npm init -y

## Creating a raw GraphQL server

- With the project directory in place, you can go ahead and create the entry point for your GraphQL server. This will be a file called index.js, located inside a directory called src.

* mkdir src
* touch src/index.js

* To start the app, you can now execute node src/index.js inside the hackernews-node directory. At the moment, this won’t do anything because index.js is still empty

Let’s go and start building the GraphQL server! The first thing you need to is - surprise - add a dependency to the project.

First, let’s install an important dependency that will allow you to create your GraphQL server.

Run the following command in your terminal:

.../hackernews-node/
npm install graphql-yoga

## graphql-yoga is a fully-featured GraphQL server.

- It is based on Express.js and a few other libraries to help you build production-ready GraphQL servers.

### Here’s a list of its features:

- GraphQL spec-compliant
- Supports file upload
- Realtime functionality with GraphQL subscriptions
- Works with TypeScript typings
- Out-of-the-box support for GraphQL Playground
- Extensible via Express middlewares
- Resolves custom directives in your GraphQL schema
- Query performance tracing
- Accepts both application/json and application/graphql content-types
- Runs everywhere: Can be deployed via Vercel, Up, AWS Lambda, Heroku etc.

## Playground

- to run server:
- node src/index.js

- What you’ll then see is a GraphQL Playground, a powerful “GraphQL IDE” that lets you explore the capabilities of your API in an interactive manner.

- first query
  query {
  info
  }

- Root fields define the available API operations

  - Every GraphQL schema has three special root types: Query, Mutation, and Subscription.

  - feed query
    query {
    feed {
    id
    url
    description
    }
    }

  ## A Simple Mutation

  - add a mutation to the GraphQL API. This mutation will allow you to post new links to the server.

  - Extending the schema definition

- Like before, you need to start by adding the new operation to your GraphQL schema definition.

- In index.js, extend the typeDefs string
- At this point, the schema definition has already grown to be quite large. Let’s refactor the app a bit and pull the schema out into its own file!

### Schema file

- Create a new file inside the src directory and call it schema.graphql

- First, entirely delete the definition of the typeDefs constant - it’s not needed any more because the schema definition now lives in its own file. Then, update the way that the GraphQLServer is instantiated at the bottom of the file:

const server = new GraphQLServer({
typeDefs: './src/schema.graphql',
resolvers,
})

- The next step in the process of adding a new feature to the API is to implement the resolver function for the new field.

- Next, update the resolvers functions

### Testing the mutation

- Go ahead and restart your server so you can test the new API operations. Here is a sample mutation you can send through the GraphQL Playground:

mutation {
post(
url: "www.prisma.io"
description: "Prisma replaces traditional ORMs"
) {
id
}
}

- The server response will look as follows:

{
"data": {
"post": {
"id": "link-1"
}
}
}

- to see new link use:
  query {
  feed {
  id
  url
  description
  }
  }

## Setting up our project with Prisma and SQLite

- First, let’s install the Prisma CLI by running the following command in your terminal:

npm install @prisma/cli --save-dev

- Create the prisma directory and then a file called schema.prisma by running the following commands in your terminal:

mkdir prisma
touch prisma/schema.prisma

- You can think of the prisma.schema file as a database schema. It has three components:

1. Data source: Specifies your database connection.
2. Generator: Indicates that you want to genenerate Prisma Client.
3. Data model: Defines your application models. Each model will be mapped to a table in the underlying database.

- From the root directory of your project, create your first migration by running the following command in your terminal:

npx prisma migrate save --experimental

- Yes and init

-then to actually execute the migration against your database:

- npx prisma migrate up --experimental

- You now have a database with a Link table!

### Generating Prisma Client

- npx prisma generate

- Create a new file in the src/ directory called script.js

- run new code:

- node src/script.js
