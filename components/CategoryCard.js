import { Pressable, Text, View, StyleSheet, Platform } from "react-native";


export const CategoryCard = ({ categoryData, onPress }) => {

	// import { useNavigation } from "@react-navigation/native";
	// this is to navigate inside a component which is not registered as a screen
	//const navigation = useNavigation();

	const { title, color } = categoryData;

	return(
		<View style={styles.card}>
			<Pressable
				// pressed style is for ripple on iOS
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null
				]}
				android_ripple={{ color: '#ccc'}}
				onPress={onPress}
			>
				<View style={[styles.cardContent, { backgroundColor: color}]}>
					<Text style={styles.cardTitle}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 10,
		aspectRatio: 1,
		borderRadius: 7,
		elevation: 6,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.os === 'android' ? 'hidden' : 'visible'
	},
	button: {
		flex: 1
	},
	buttonPressed: {
		opacity: 0.5
	},
	cardContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
	},
	cardTitle: {
		fontSize: 20
	}
})