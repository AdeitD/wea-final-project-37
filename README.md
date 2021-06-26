To be determined later

---

    Grocery Data

---

Grocery Parameters:
id
name
category

Grocery Categories:

Produce
Bakery
Deli
Organic Materials
Medicine
Cleaning Supplies
Frozen Meat
Baking Ingredients
Pasta
Canned Goods
Sauces/Condiments
Cereals/Snacks
Drinks
Dairy
Frozen Goods
Misc.

---

    REST Endpoints

---

The full list of groceries
/groceries

Gets a grocery by its id number
/groceries/id/{id}

Gets a grocery by its name
/groceries/name/{name}

Display all groceries with a given category
/groceries/category/{category}

---

    GraphQL Type Definitions

---

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

Notice that none of the Query types require any of their parameters. The grocery Query is intended to take one parameter.

The grocery Query will ignore the name parameter if it finds an id parameter. It will return an error if there are no parameters. Otherwise, it will return whatever it gets from the REST API: either a Grocery or an error.

The groceries Query will return whatever it gets from the REST API: either a (possibly empty) list of Grocery objects or an error.
