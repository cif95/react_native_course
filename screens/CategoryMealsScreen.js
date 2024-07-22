import { View, FlatList, Text } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealCard } from "../components/MealCard";
import { useLayoutEffect } from "react";

export const CategoryMealsScreen = ({ navigation, route }) => {

	const { categoryId } = route?.params;
	const meals = MEALS.filter( meal => meal?.categoryIds.includes(categoryId));

	const onPressMealHandler = (mealId) => {
		navigation.navigate(
			"MealDetails",
			{ mealId }
		);
	}
	
	const renderMealHandler = (meal) => {
		return(
			<MealCard 
				onPress={() => onPressMealHandler(meal.item.id)}
				mealData={meal.item}
			/>
		)
	}

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find( category => category?.id === categoryId).title;
		navigation.setOptions({
			title: `${categoryTitle} Meals`
		});

	}, [categoryId, navigation]);

	return(
		<View>
			<FlatList
				data={meals}
				renderItem={renderMealHandler}
				keyExtractor={(meal) => meal.id}
				numColumns={1}
			/>
		</View>
	)
}