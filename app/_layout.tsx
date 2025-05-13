import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
	const colorScheme = useColorScheme();

	const isLoggedIn = true;

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						title: 'Login',
					}}
				/>

				<Stack.Protected guard={isLoggedIn}>
					<Stack.Screen name="(app)"  options={{ headerShown: false }} />
				</Stack.Protected>

				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
};
