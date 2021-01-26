export const addFavoritesToState = (favorites = []) => {
    return {
        type: 'ADD_FAVORITES',
        favorites
    }
}
export const addNewFavorite = (favorite = {}) => {
    return {
        type: 'ADD_NEW_FAVORITE',
        favorite
    }
}