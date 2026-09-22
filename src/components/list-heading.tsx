import {TouchableOpacity, View, Text} from "react-native";

const ListHeading = ({title}) => {
    return (
        <View className="flex-row items-center justify-between mt-6">
            <Text className="text-xl font-bold">{title}</Text>

            <TouchableOpacity>
                <Text className='border rounded-full py-1 px-2'>View all</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListHeading