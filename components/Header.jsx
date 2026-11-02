import { View, Image } from 'react-native'
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

const Header = ({ title }) => {
    return (
        <View className="flex-row justify-between w-full items-center px-[4%] py-[3%] border-b border-[#ffffff]/20">
            <View>
                {
                    title ? (
                        <View className="bg-[#ffffff] p-3 rounded-full">
                            <MaterialIcons name="arrow-back-ios" size={18} color="black" />
                        </View>
                    ) : (
                        <Image
                            source={require("../assets/images/logo.png")}
                            className="w-12 h-12 pt-[10%]"
                        />
                    )
                }
            </View>
            <View className="bg-[#ffffff] p-3 rounded-full">
                <SimpleLineIcons name="login" size={15} color="black" />
            </View>
        </View>
    )
}

export default Header;