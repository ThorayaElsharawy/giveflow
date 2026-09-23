import {Text, View, Image, FlatList, TouchableOpacity, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import {formatCurrency} from "@/lib/utils";
import ListHeading from "@/components/list-heading";
import DonationCards from "@/components/donation-cards";

export default function App() {
    const donationWays = [
        {
            id: '1',
            icon: 'home',
            name: 'Building',
        },
        {
            id: '2',
            icon: 'moon',
            name: 'Ramadan',
        },
        {
            id: '3',
            icon: 'search',
            name: 'Food',
        }
        ,
        {
            id: '4',
            icon: 'moon',
            name: 'Clothes',
        }
        ,
        {
            id: '5',
            icon: 'search',
            name: 'Operations',
        }
        ,
        {
            id: '6',
            icon: 'search',
            name: 'Zakat',
        }
    ]
    return (
        <ScrollView className="flex-1 bg-[#f3f8fd] p-5">
            <SafeAreaView>
                <View className='px-4 py-3 flex-row items-center gap-4'>
                    <View className='rounded-full p-3 bg-[#3b82f6]'>
                        <Ionicons name='person-outline' size={20} color='#ffffff'/>
                    </View>
                    <Text className='text-xl font-roboto-bold'>Thoraya Adel</Text>
                </View>

                <View className='bg-[#3b82f6] p-4 rounded-tl-[32px] rounded-br-[32px] mt-2'>
                    <Text className='font-bold text-2xl text-white font-roboto-bold mt-2'>Balance</Text>
                    <Text className='text-5xl text-white mt-6 font-roboto-regular'>
                        {formatCurrency(248948)}</Text>
                </View>

                <View>
                    <ListHeading title='Donation Ways'/>

                    <FlatList className='mt-4' data={donationWays} renderItem={({item}) => (
                        <DonationCards item={item}/>)}
                              keyExtractor={item => item.id}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              ListEmptyComponent={<Text>No Donation Ways List</Text>}
                    />
                </View>

                <View>
                    <ListHeading title='Donation Numbers'/>

                    <View className='bg-red-300 rounded-t-[32px]  p-5 mt-4'>
                        <View className='flex-row items-center justify-between'>
                            <View className='flex-row items-center gap-2'>
                                <Image source={require('../../../assets/images/dontion-icon.png')} width={30}
                                       height={30} className="w-12 h-12"/>
                                <View>
                                    <Text className='text-2xl'>Donor Numbers</Text>
                                    <Text className='text-gray-600'>2500k</Text>
                                </View>
                            </View>
                            <View>
                                <Text className='text-2xl'>{formatCurrency(2522)}</Text>
                                <Text className='text-gray-600'>per month</Text>
                            </View>
                        </View>
                    </View>

                    <View className='bg-[#f8d54e] p-4 px-5 mt-4'>
                        <View className='flex-row items-center justify-between'>
                            <View className='flex-row items-center gap-2'>
                                <Image source={require('../../../assets/images/dontion-icon.png')} width={30}
                                       height={30} className="w-12 h-12"/>
                                <View>
                                    <Text className='text-2xl'>Donor Numbers</Text>
                                    <Text className='text-gray-600'>2500k</Text>
                                </View>
                            </View>
                            <View>
                                <Text className='text-2xl'>{formatCurrency(2522)}</Text>
                                <Text className='text-gray-600'>per month</Text>
                            </View>
                        </View>
                    </View>

                    <View className='bg-[#acd8c4] rounded-b-[32px] p-4 px-5 mt-4'>
                        <View className='flex-row items-center justify-between'>
                            <View className='flex-row items-center gap-2'>
                                <Image source={require('../../../assets/images/dontion-icon.png')} width={30}
                                       height={30} className="w-12 h-12"/>

                                <View>
                                    <Text className='text-2xl'>Donor Numbers</Text>
                                    <Text className='text-gray-600'>2500k</Text>
                                </View>
                            </View>
                            <View>
                                <Text className='text-2xl'>{formatCurrency(2522)}</Text>
                                <Text className='text-gray-600'>per month</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity className='rounded-sm border border-[#3b82f6] p-3 mt-6'>
                        <Text className='text-center text-[#3b82f6] p-2 font-bold text-lg'>Exising Donor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='rounded-sm bg-[#3b82f6] p-3 mt-6'>
                        <Text className='text-center text-white p-2 font-bold text-lg'>New Donor</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}