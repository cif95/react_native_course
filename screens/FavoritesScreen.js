import { View,Text, StyleSheet } from "react-native"
import { useContext } from "react";

export const FavoritesScreen = () => {

	//const favoriteMealsCtx = useContext(FavoritesContext);
	// TODO display favorites here

	return(
		<View style={styles.container}>
			<Text>All your fav meals!</Text>
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