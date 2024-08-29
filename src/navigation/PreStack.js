

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screen/Login'
import ForgetPass from '../screen/ForgetPass'
import Signup from '../screen/Signup'

export default function PreStack() {
    const stack=createStackNavigator()

    return(
        <NavigationContainer>
            <stack.Navigator 
            initialRouteName='Login'
            >
                <stack.Screen 
                name='Login'
                component={Login}
                />
                <stack.Screen 
                name='Signup'
                component={Signup}
                />
                <stack.Screen 
                name='Forget'
                component={ForgetPass}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}
