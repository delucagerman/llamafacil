import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Llama Facil'
                }}
            />
            <Stack.Screen
                name="configuracion/index"
                options={{
                    title: 'Configuracion'
                }}
            />
        </Stack>
    )
}
