# Grocery List

Grocery List is an innovative, organizational concept designed to optimize a grocery shopper’s experience. By using this application, shoppers can sort their grocery list into categories parallel to the sections of common groceries. In doing this, all of their similar items are grouped together to optimize the time spent in each section of the grocery. By predetermining what will be bought in each section, Grocery List ensures shoppers stay on budget.

## Installation

Grocery List is live on Heroku for the first 3 weeks of each month at [https://wea-grocery-list.herokuapp.com/](https://wea-grocery-list.herokuapp.com/).

Alternatively, for a local installation, download the source code and follow the steps below. Be aware that the source code includes only a small sample of groceries, so the full selection available on the live app will not be present.

1. Ensure you have a running bash terminal with a working npm installation.
2. Open a terminal window and navigate to the `rest-api` directory in the source code you downloaded from this repository.
3. Execute the shell command `npm install` (this may take some time).
4. Execute the shell command `npm start`. You should receive the message "Server listening on port 4000".
5. Open another terminal window and navigate to the `graphql-api` directory.
6. Execute `npm install` and `npm start`. You should receive the message "🚀 Server ready at http://localhost:3030/".
7. Open a third terminal window and navigate to the `react-application` directory.
8. Execute `npm install` and `npm start`. Your default browser should open to http://localhost:3000/ and display Grocery List.

## Usage

Use the navigation links at the top of the page to move between pages.

### Home

Read a brief description of the site and its functionality.

### Get Started

View your current list of groceries. Add groceries by name using the text input field. Expand and collapse sublists by clicking the category headings. Empty the list by refreshing the page from anywhere on the site.

### Browse

Browse items currently in the database. Click an item to add it to the list.

### Add

Type the name of a grocery you would like to add to the database. Choose an appropriate category and click the "Add" button. Your new grocery will now be available to all users. On a local installation, it will persist through API restarts.

## API Reference

To request from the REST or GraphQL APIs directly on a local installation, use the following resources.

### REST Endpoints

Base url: `http://localhost:4000/api/v1`

- `GET` the full alphabetized list of groceries from `/groceries`
- `GET` the list of groceries in a given category from `/groceries/category/{category}`
- `GET` the grocery with a given name from `/groceries/name/{name}`
- `GET` the grocery with a given (unique integer) ID from `/groceries/id/{id}`
- `POST` a new grocery object to `/groceries`

Example usage:
```
const fetch = require('node-fetch');

fetch('http://localhost:4000/api/v1/groceries', {
    method: 'POST',
    body: `{ name: "Crabapples", category: "Produce" }`,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const listOfProduce = fetch('http://localhost:4000/api/v1/groceries/category/Produce')
    .then(response => response.json());
```

### GraphQL Queries

Base url: `http://localhost:3030`

Type definitions:
```
type Query {
    grocery(id: ID, name: String): Grocery
    groceries(category: String): [Grocery]
}
type Grocery {
    id: ID
    name: String
    category: String
}
type Mutation {
    createGrocery(input: CreateGroceryRequest!): CreateGroceryResponse
}
input CreateGroceryRequest {
    name: String!
    category: String!
}
type CreateGroceryResponse {
    grocery: Grocery
}
```

Example usage:
```
const fetch = require('node-fetch');

fetch('http://localhost:3030', {
    method: 'POST',
    body: JSON.stringify({
        query: `
            query {
                createGrocery(name: "Crabapples", category: "Produce") {
                    grocery {
                        name
                        category
                    }
                }
            }`
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const listOfProduce = fetch('http://localhost:3030', {
    method: 'POST',
    body: JSON.stringify({
        query: `
            query {
                groceries(category: "Produce") {
                    name
                }
            }`
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const listOfGroceries = fetch('http://localhost:3030', {
    method: 'POST',
    body: JSON.stringify({
        query: `
            query {
                groceries {
                    name
                    category
                }
            }`
    }),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});
```

## Contributing

Want to see more features? Feel free to open an issue or submit a pull request!
