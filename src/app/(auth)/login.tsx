import {Text, View} from "react-native";
import {Link} from "expo-router";


const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <Link href='/(auth)/signup'>Add new Account</Link>
        </View>
    )
}

export default Login;