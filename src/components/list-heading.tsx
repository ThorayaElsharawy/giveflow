import {TouchableOpacity, View, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListHeading = ({title}) => {
    return (
        <View className="flex-row items-center justify-between mt-6">
            <Text className="text-xl font-semibold">{title}</Text>

            <TouchableOpacity className='flex-row items-center'>
                <Text className='px-1 text-[#3b82f6]'>View all</Text>
                <Ionicons name="chevron-forward" size={15} color="#3b82f6"/>
            </TouchableOpacity>
        </View>
    )
}

export default ListHeading