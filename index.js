const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});