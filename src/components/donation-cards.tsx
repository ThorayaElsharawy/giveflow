import {View, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DonationCards = ({item}: { item: any }) => {
    return (
        <View className='bg-[#e7effc] rounded-xl p-3 py-6 mr-2 mb-3 items-start'>
            <Ionicons className='bg-[#cce1fd] rounded-full aspect-square p-2 mb-3'
                      name={item.icon}
                      size={20}
                      color='#1c6df9'/>
            <View className='flex-row items-center justify-between min-w-[120px]'>
                <Text>{item.name}</Text>
                <Ionicons name="chevron-forward" size={15} color='#0056f8'/>
            </View>
        </View>
    )
}

export default DonationCards;