import {Tabs} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabLayout = () => {
    const tabsArr: {
        name: string;
        icon: string;
        title: string;
    }[] = [
        {
            name: "index",
            title: "Home",
            icon: "home-outline",
        },
        {
            name: "dashboard",
            title: "Dashboard",
            icon: "stats-chart-outline",
        },
        {
            name: "new-donor",
            title: "New Donor",
            icon: "heart-circle-outline",
        },
        {
            name: "settings",
            title: "Settings",
            icon: "settings-outline",
        }
    ]

    return <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#111827",
            tabBarInactiveTintColor: "#9CA3AF",
            tabBarStyle: {
                height: 70,
                paddingTop: 8,
                paddingBottom: 8,
            }
        }}>

        {tabsArr.map(tab => (
            <Tabs.Screen key={tab.name} name={tab.name} options={{
                title: tab.title,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={tab.icon} size={size} color={color}/>
                )
            }}/>
        ))}
    </Tabs>
}

export default TabLayout;

