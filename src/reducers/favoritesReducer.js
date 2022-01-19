import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [
        {id: 0, title: 'Movie'},
        {id: 1, title: 'Movie2'},
    ],
    displayFavorites: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, {title: action.payload.title}]
            };
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            };
        default:
            return state;
    }
};

export default reducer;