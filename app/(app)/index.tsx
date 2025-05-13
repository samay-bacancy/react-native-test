import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
	return (
		<View>
			<Text>Home Screen</Text>

			<Pressable onPress={() => router.back()}>
				<Text>Login</Text>
			</Pressable>
		</View>
	);
};

