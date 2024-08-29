

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home'
import About from '../screen/About'

export default function PostStack() {
    const stack=createStackNavigator()

    return(
        <NavigationContainer>
            <stack.Navigator 
            initialRouteName='Home'>
                <stack.Screen 
                name='Home'
                component={Home}
                />
                <stack.Screen 
                name='About'
                component={About}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}
