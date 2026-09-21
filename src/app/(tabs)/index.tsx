import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="h-full bg-[#f3f8fd]">
            <Text style={{ fontFamily: 'roboto-regular' }} className="text-xl  text-blue-500">
                Welcome to Give Flow app!
            </Text>
            <Text className="text-xl  text-blue-500 font-roboto-regular ">
                Welcome to Give Flow app!
            </Text>
        </SafeAreaView>
    );
}