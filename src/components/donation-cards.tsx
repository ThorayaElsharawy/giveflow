import {View, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DonationCards = ({item}: { item: any }) => {
    return (
        <View className='flex-row items-center gap-2 border border-gray-200 rounded-2xl bg-blue-200 p-4 mr-2 mb-3'>
            <Ionicons name={item.icon} size={20}   />
            <Text className='text-xl'>{item.name}</Text>
        </View>
    )
}

export default DonationCards;