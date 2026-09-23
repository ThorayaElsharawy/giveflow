import {Text, View, Image, FlatList, TouchableOpacity, ScrollView, ImageBackground} from "react-native";
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
                    <View>
                        <Text className='text-gray-400 text-xs'>Hello,</Text>
                        <Text className='text-xl font-roboto-bold'>Thoraya Adel</Text>
                        <Text className='text-gray-400 text-xs'>Small steps make a big difference
                            &nbsp;
                            <Ionicons name='heart' size={10} color='#3b82f6'/>
                        </Text>
                    </View>

                    <View className='ml-auto self-end'>
                        <Ionicons className='p-2 aspect-square bg-[#e6edf6] rounded-full' name='settings-outline'
                                  size={25} color='black'/>
                    </View>
                </View>

                <ImageBackground
                    imageStyle={{
                        width: 100,
                        height: 100,
                        top: 0,
                        right: '0',
                        resizeMode: 'contain'
                    }}
                    source={require('../../../assets/images/flowers.png')}
                    className='bg-[#3b82f6] p-4 rounded-[28px] mt-2 relative overflow-hidden flex-row justify-between items-start'>

                    <View>
                        <Text className='text-md text-white  mt-3'>Total Balance</Text>
                        <Text className='text-4xl text-white mt-5 font-bold mb-2'>
                            {formatCurrency(248948)}</Text>
                    </View>

                    <TouchableOpacity className='flex-row items-center gap-2 mt-2 bg-[#559afd] p-2 rounded-lg'>
                        <Ionicons name='eye-outline' size={15} color='#f3f4f6'/>
                        <Text className='text-gray-100 text-sm'>View details</Text>
                        <Ionicons name="chevron-forward" size={15} color="#f3f4f6"/>
                    </TouchableOpacity>
                </ImageBackground>

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

                    <View
                        className='mt-4 flex-row items-center justify-between gap-2 border-[#f7878e] border-l-[10px] rounded-2xl px-6 py-3 bg-[#fbe9ef]'>
                        <View className='flex-row items-center gap-4'>
                            <Image width={100} height={100}
                                   className="w-16 h-16 object-contain bg-[#fccfd6] p-4 rounded-full"
                                   source={require('../../../assets/images/dontion-icon.png')}/>
                            <View>
                                <Text className='font-bold mb-1'>Donor Numbers</Text>
                                <Text className='text-gray-500'>2500k donors</Text>
                            </View>
                        </View>
                        <View>
                            <Text className='font-bold mb-1'>$2,522</Text>
                            <Text className='text-gray-500'>per month</Text>
                        </View>
                    </View>

                    <View
                        className='my-4 flex-row items-center justify-between gap-2 border-[#f8d54e] border-l-[10px] rounded-2xl px-6 py-3 bg-[#fcf3dd]'>
                        <View className='flex-row items-center gap-4'>
                            <Ionicons name="people-outline" className='bg-[#fce7b1] rounded-full p-4' size={30}
                                      color="black"/>
                            <View>
                                <Text className='font-bold mb-1'>Donor Numbers</Text>
                                <Text className='text-gray-500'>2500k donors</Text>
                            </View>
                        </View>
                        <View>
                            <Text className='font-bold mb-1'>$2,522</Text>
                            <Text className='text-gray-500'>per month</Text>
                        </View>
                    </View>

                    <View
                        className='flex-row items-center justify-between gap-2 border-[#4bb288] border-l-[10px] rounded-2xl px-6 py-3 bg-[#dff1ea]'>
                        <View className='flex-row items-center gap-4'>
                            <Ionicons name="leaf" className='bg-[#bfead7] rounded-full p-4' size={30}
                                      color="black"/>

                            <View>
                                <Text className='font-bold mb-1'>Donor Numbers</Text>
                                <Text className='text-gray-500'>2500k donors</Text>
                            </View>
                        </View>
                        <View>
                            <Text className='font-bold mb-1'>$2,522</Text>
                            <Text className='text-gray-500'>per month</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        className='rounded-[32px] border border-[#3b82f6] p-3 mt-6 flex-row items-center justify-center'>
                        <Ionicons name="add-circle" size={30} color="#3b82f6"/>
                        <Text className='text-center text-[#3b82f6] p-2 font-bold text-lg'>Exising Donor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='rounded-[32px] bg-[#3b82f6] p-3 mt-6 flex-row items-center justify-center'>
                        <Ionicons name="add-circle" size={30} color="white"/>
                        <Text className='text-center text-white p-2 font-bold text-lg'>New Donor</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}