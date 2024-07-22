import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons";

export const IconButton = ({ iconName, onPress }) => {

	return(
		<Pressable onPress={onPress}>
			<Ionicons name={iconName} size={24} color="white" />
		</Pressable>		
	)
}