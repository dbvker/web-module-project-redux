import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [
    ],
    displayFavorites: true,
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
                favorites: [...state.favorites, {id: action.payload.id, title: action.payload.title}]
            };
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id)),
                displayFavorites: state.displayFavorites
            };
        default:
            return state;
    }
};

export default reducer;