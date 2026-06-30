import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaginaInicial from "./src/screens/PaginaInicial";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="PaginaInicial"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#0B0B0F",
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: {
                    color: "#B026FF",
                    fontWeight: "bold",
                    },
                    contentStyle: {
                    backgroundColor: "#0B0B0F",
                    },
                }}
            >
                <Stack.Screen
                    name="PaginaInicial"
                    component={PaginaInicial}
                    options={{ title: "" }}
                />

                <Stack.Screen
                    name="Detalhes"
                    component={DetailsScreen}
                    options={{ title: "Detalhes do Filme" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}