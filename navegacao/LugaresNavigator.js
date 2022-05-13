import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigatior initialRouteName="ListaDeLugares">
            <Stack.Screen name ="DetalhesDoLugar" component={DetalhesDoLugarTela} />
            <Stack.Screen name ="ListaDeLugares" component={ListaDeLugaresTela} />
            <Stack.Screen name ="Mapa" component={MapaTela} />
            <Stack.Screen name ="NovoLugar" component={NovoLugarTela} />
        </Stack.Navigatior>
    </NavigationContainer>
)

export default container