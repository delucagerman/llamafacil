import { Link } from 'expo-router'
import { View, Text, Button } from 'react-native'
export default function HomePage() {
    return (
        <View>
            <Text>HomePage</Text>
            <Link
                href="/configuracion"
                asChild
            >
                <Button title="Configuracion" />
            </Link>
        </View>
    )
}
