import { View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryCard } from '../components/CategoryCard';

/**
 * navigation and route props are provided by the library to the component registered as a screen
 */
export const CategoriesScreen = ({ navigation }) => {

	const { height } = useWindowDimensions();

	const onPressCategoryHandler = (id) => {
		navigation.navigate(
			"Meals",
			{ categoryId: id }
		);
	}

	const renderCategoryHandler = (category) => {

		return(
			<CategoryCard 
				onPress={() => onPressCategoryHandler(category.item.id)}
				categoryData={category.item}
			/>
		)
	}

	const screenMarginTop = height < 380 ? 20 : 40;

	return(
		<View style={[styles.screenContainer, { marginTop: screenMarginTop }]}>
			<FlatList
				data={CATEGORIES}
				renderItem={renderCategoryHandler}
				keyExtractor={(category) => category.id}
				numColumns={2}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1
	}
});