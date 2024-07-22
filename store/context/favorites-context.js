import { createContext, useState } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {}
})

export const FavoritesContextProvider = ({ children }) => {

	const [favoriteIds, setFavoriteIds] = useState([]);

	const addFavorite = (id) => {
		setFavoriteIds( prev => [...prev, id]);
	}

	const removeFavorite = (id) => {
		setFavoriteIds( prev => prev.filter( mealId => mealId !== id));
	}

	const value = {
		ids: favoriteIds,
		addFavorite,
		removeFavorite
	}

	return <FavoritesContext.Provider value={value}>
		{children}
	</FavoritesContext.Provider>
}