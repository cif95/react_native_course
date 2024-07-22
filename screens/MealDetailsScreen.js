import { View,Text, StyleSheet, Image } from "react-native"
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";


export const MealDetailsScreen = ({ route, navigation }) => {

	const favoriteMealsCtx = useContext(FavoritesContext);

	const { mealId } = route?.params;
	const meal = MEALS.find( meal => meal?.id === mealId);
	const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);


	const onClickFavoriteIconHandler = () => {

		if (mealIsFavorite) {
			favoriteMealsCtx.removeFavorite(mealId);
		} else {
			favoriteMealsCtx.addFavorite(mealId);
		}

	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton 
					iconName={mealIsFavorite ? 'star' : 'star-outline'}
					onPress={onClickFavoriteIconHandler}
				/>
			)
		})
	}, [navigation, onClickFavoriteIconHandler]);

	const {
		title,
		imageUrl,
	} = meal;

	return(
		<View style={styles.container}>
			<Image
				source={{ uri: imageUrl }}
				style={styles.image}
			/>
			<Text>Meal Details {mealId} {title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		alignItems: 'center'
	},
	image: {
		width: '80%',
		height: 200

	}
});