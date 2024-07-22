import { Pressable, Text, View, StyleSheet, Image } from "react-native";


export const MealCard = ({ mealData, onPress }) => {

	const { title, imageUrl, duration, complexity, affordability } = mealData;

	return(
		<View style={styles.card}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null
				]}
				android_ripple={{ color: '#ccc'}}
				onPress={onPress}
			>	
				<View style={{ flex: 1, width: '100%' }}>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.cardTitle}>{title}</Text>
				</View>
				<View>
					<Text>Affordability: {affordability}</Text>
					<Text>Duration: {duration}</Text>
					<Text>Complexity: {complexity}</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		borderRadius: 7,
		elevation: 6,
		backgroundColor: '#edecec',
		shadowColor: 'black',
		alignItems: 'center',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		flex:1,
		height: 200,
		borderRadius: 7
	},
	button: {
		flex: 1,
		width: '100%'
	},
	buttonPressed: {
		opacity: 0.5
	},
	cardTitle: {
		fontSize: 20
	}
})