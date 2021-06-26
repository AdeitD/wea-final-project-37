const { API_URL, fetchJsonOrErr } = require('./utilities');

const Query = {
    grocery: (parent, args, context, info) => {
        const { id, name } = args;
        if (id) {
            return fetchJsonOrErr(`${API_URL}/groceries/id/${id}`);
        } else if (name) {
            return fetchJsonOrErr(`${API_URL}/groceries/name/${name}`);
        } else {
            return new Error('grocery Query requires a name or id parameter');
        }
    },

    groceries: (parent, args, context, info) => {
        const { category } = args;
        if (category) {
            return fetchJsonOrErr(`${API_URL}/groceries/category/${category}`);
        } else {
            return fetchJsonOrErr(`${API_URL}/groceries`);
        }
    }
};
const Mutation = {
    createGrocery: (parent, args, context, info) => {
        return {
            grocery: fetchJsonOrErr(`${API_URL}/groceries`, 'POST', args.input)
        };
    }
}

module.exports = {
    Query,
    Mutation
};