const twokm = {
    name: "2km",
    age: 32,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => twokm
    }
}

export default resolvers;