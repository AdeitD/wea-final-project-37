const { API_URL, fetchPromiseJsonOrErr } = require('./utilities');

const Query = {
    grocery: async (parent, args, context, info) => {
        const { id, name } = args;
        const { loaders } = context;
        if (id) {
            return await fetchPromiseJsonOrErr(`${API_URL}/groceries/id/${id}`);
        } else if (name) {
            return await loaders.groceryLoader.load(name);
        } else {
            return new Error('grocery Query requires a name or id parameter');
        }
    },

    groceries: async (parent, args, context, info) => {
        const { category } = args;
        const { loaders } = context;
        if (category) {
            return await loaders.categoryLoader.load(category);
        } else {
            return await loaders.allGroceriesLoader.load('placeholder');
        }
    }
};
const Mutation = {
    createGrocery: (parent, args, context, info) => {
        const { loaders } = context;
        const grocery = fetchPromiseJsonOrErr(`${API_URL}/groceries`, 'POST', args.input)
            .then(grocery => {
                loaders.categoryLoader.clear(grocery.category);
                loaders.allGroceriesLoader.clearAll();
                return grocery;
            });
        return {
            grocery
        };
    }
}

module.exports = {
    Query,
    Mutation
};