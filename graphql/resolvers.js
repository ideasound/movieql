import {getMovies, getById, deleteMovie, addMovie} from './db'

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getById(id)
        
    },
    Mutation: {
        addMovie: (_, {name, rating}) => addMovie(name, rating),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}

export default resolvers;