export const addRecipesToState = (recipes = []) => {
    return {
        type: 'ADD_RECIPES',
        recipes
    }
}