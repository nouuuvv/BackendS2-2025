const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


let users = [
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
]

const schema = buildSchema(`
    type User {
        id: Int
        name: String
        email: String
    },
    type Query {
        users: [User]
        user(id: Int!): User
    }
    type Mutation {
        createUser(name: String!, email: String!): User
        updateUser(id: Int!, name: String, email: String): User
        deleteUser(id: Int!): User
    }`
);

const root = {
    users: () => users,
    user: ({ id }) => users.find(user => user.id === id),
    createUser: ({ name, email }) => {
        const newUser = { id: users.length + 1, name, email };
        users.push(newUser);
        return newUser;
    },
    updateUser: ({ id, name, email }) => {
        const user = users.find(user => user.id === id);
        if (user) {
            if (name) user.name = name;
            if (email) user.email = email;
            return user;
        }
        throw new Error("User not found");
    },
    deleteUser: ({ id }) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            return users.splice(index, 1)[0];
        }
        throw new Error("User not found");
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface
}));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/graphql');
});