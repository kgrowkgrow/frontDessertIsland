export const addSearchedRecipes = (recipes = []) => {
    return {
        type: 'ADD_SEARCH_RECIPES',
        recipes
    }
}