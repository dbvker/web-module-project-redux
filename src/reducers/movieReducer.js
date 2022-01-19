import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDb Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        director: action.payload.director,
                        genre: action.payload.genre,
                        metascore: action.payload.metascore,
                        description: action.payload.description,
                    }
                ]
            };
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }d
}

export default reducer;