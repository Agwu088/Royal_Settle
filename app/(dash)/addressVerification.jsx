import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../assets/images/logo.png";
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const AddressVerification = () => {
    const router = useRouter();
    const [state, setState] = useState('');
    const [lga, setLga] = useState('');
    const [address, setAddress] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle');
    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [lgaModalVisible, setLgaModalVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleUploadSelect = () => {
        setModalVisible(false);
        setUploadStatus('uploading');
        setTimeout(() => setUploadStatus('completed'), 1500);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            router.push('/kycSuccess');
        }, 3000);
    };

    const statesList = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta'];
    const lgasList = ['Ahoada East', 'Ahoada West', 'Akuku-Taru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Degema', 'Obio-Akpo', 'Obio Akpo'];

    return (
        <SafeAreaView className="flex-1 bg-[#F8F9FA]">
            {/* Header */}
            <View className="flex-row items-center px-[5%] py-[3%] relative">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center bg-white z-10"
                >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View className="absolute inset-x-0 items-center justify-center">
                    <Text className="text-[24px] font-bold text-black leading-tight">KYC Verification</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: '5%', paddingTop: 20 }}>
                    {/* ID Icon */}
                    <View className="w-[60px] h-[60px] rounded-full bg-[#240046] items-center justify-center mb-6">
                        <MaterialCommunityIcons name="home-outline" size={30} color="white" />
                    </View>

                    {/* Title and Description */}
                    <Text className="text-[18px] font-bold text-[#240046] mb-2 font-poppins-medium">
                        Enter your home address
                    </Text>
                    <Text className="text-[14px] font-inter text-[#7A6B9B] mb-8 font-poppins-regular">
                        Enter your detailed home address to enable{'\n'}us verify your location.
                    </Text>

                    {/* Input Field Form */}
                    <View className="mb-6">
                        <Text className="text-[14px] font-[500] font-poppins-regular text-[#4A4A4A] mb-2">
                            Home Address
                        </Text>
                        
                        {/* State & LGA Row */}
                        <View className="flex-row justify-between mb-4">
                            <TouchableOpacity 
                                onPress={() => setStateModalVisible(true)}
                                className="flex-1 bg-white border border-[#E0E0E0] rounded-full h-[55px] px-[5%] justify-between items-center flex-row mr-2"
                            >
                                <Text className={`text-[12px] font-inter ${state ? 'text-black' : 'text-[#A0A0A0]'}`}>
                                    {state || "State"}
                                </Text>
                                <Feather name="chevron-down" size={18} color="#A0A0A0" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setLgaModalVisible(true)}
                                className="flex-1 bg-white border border-[#E0E0E0] rounded-full h-[55px] px-[5%] justify-between items-center flex-row ml-2"
                            >
                                <Text className={`text-[12px] font-inter ${lga ? 'text-black' : 'text-[#A0A0A0]'}`}>
                                    {lga || "LGA"}
                                </Text>
                                <Feather name="chevron-down" size={18} color="#A0A0A0" />
                            </TouchableOpacity>
                        </View>

                        {/* Full Address */}
                        <TextInput
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Enter street address"
                            placeholderTextColor="#A0A0A0"
                            className="bg-white border border-[#E0E0E0] rounded-full h-[55px] px-[5%] text-[12px] font-inter text-black"
                        />
                    </View>

                    {/* Upload Section */}
                    <View className="mb-6">
                        <Text className="text-[14px] font-bold font-poppins-medium text-[#000000] mb-1">
                            Upload Utility Bill
                        </Text>
                        <Text className="text-[14px] font-poppins-regular text-[#7A6B9B] mb-4">
                            To verify your address, kindly upload any{'\n'}of your recent utility bills
                        </Text>

                        {/* Dashed Border Upload Area */}
                        <View className="border-2 border-dashed border-[#D2D2D2] rounded-[20px] items-center justify-center py-[10%] bg-white overflow-hidden">
                            {uploadStatus === 'idle' && (
                                <>
                                    <Text className="text-[14px] font-bold font-poppins-medium text-[#000000] mb-2 mt-2">
                                        Upload a photo of your utility bill
                                    </Text>
                                    <Text className="text-[12px] font-poppins-regular text-[#4A4A4A] mb-6">
                                        Ensure no glare and all corners are visible.
                                    </Text>
                                    <TouchableOpacity 
                                        onPress={() => setModalVisible(true)}
                                        className="bg-[#240046] h-12 px-10 rounded-full items-center justify-center mb-2"
                                    >
                                        <Text className="text-white font-poppins-medium text-[14px]">Upload</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                            {uploadStatus === 'uploading' && (
                                <View className="flex-row items-center w-[90%]">
                                    <View className="bg-[#FF3B30] rounded-md px-2 py-3 mr-4 items-center justify-center">
                                        <Text className="text-white text-[10px] font-bold">JPG</Text>
                                    </View>
                                    <View className="flex-1 mr-4">
                                        <Text className="text-[14px] font-poppins-medium text-[#000000] mb-2">
                                            Uploading file
                                        </Text>
                                        <View className="h-1.5 bg-[#C0B3D5] rounded-full w-full mb-1 overflow-hidden">
                                            <View className="h-full bg-[#240046] w-[10%]" />
                                        </View>
                                        <Text className="text-[10px] font-poppins-regular text-[#A0A0A0]">
                                            File img12.jpg | 10% Completed
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setUploadStatus('idle')}>
                                        <MaterialIcons name="close" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            )}
                            {uploadStatus === 'completed' && (
                                <View className="flex-row items-center w-[90%]">
                                    <View className="w-10 h-10 rounded-full bg-[#E5F5E9] items-center justify-center mr-4">
                                        <MaterialCommunityIcons name="check-circle" size={24} color="#28A745" />
                                    </View>
                                    <View className="flex-1 mr-4">
                                        <Text className="text-[14px] font-poppins-medium text-[#000000] mb-1">
                                            File uploaded successfully
                                        </Text>
                                        <Text className="text-[10px] font-poppins-regular text-[#A0A0A0]">
                                            File elec10.pdf | 100% Completed
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setUploadStatus('idle')}>
                                        <Feather name="trash-2" size={20} color="#4A4A4A" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Info Banner */}
                    <View className="flex-row items-center bg-[#EFECF9] rounded-[10px] p-4 mb-8">
                        <Feather name="alert-circle" size={18} color="#240046" />
                        <Text className="text-[12px] font-poppins-regular text-[#240046] ml-2">
                            Your details are encrypted and stored securely
                        </Text>
                    </View>

                    <View className="flex-1" />

                    {/* Bottom Button */}
                    <TouchableOpacity
                        disabled={address.length < 5}
                        onPress={handleSubmit}
                        className={`mb-[8%] h-14 rounded-full items-center justify-center ${address.length >= 5 ? 'bg-[#240046]' : 'bg-[#E5E5E5]'
                            }`}
                    >
                        <Text className={`text-[16px] font-bold font-inter ${address.length >= 5 ? 'text-white' : 'text-[#A0A0A0]'
                            }`}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Upload Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity 
                    style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                    activeOpacity={1} 
                    onPress={() => setModalVisible(false)}
                >
                    <TouchableWithoutFeedback>
                        <View className="bg-[#F8F9FA] pb-12 pt-6">
                            <TouchableOpacity 
                                className="py-5 items-center"
                                onPress={handleUploadSelect}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Take a photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className="py-5 items-center"
                                onPress={handleUploadSelect}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Select from files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className="py-5 items-center"
                                onPress={handleUploadSelect}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Choose from albums</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>

            {/* States Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={stateModalVisible}
                onRequestClose={() => setStateModalVisible(false)}
            >
                <TouchableOpacity 
                    style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                    activeOpacity={1} 
                    onPress={() => setStateModalVisible(false)}
                >
                    <TouchableWithoutFeedback>
                        <View className="bg-[#F8F9FA] pb-8 pt-6 px-6 rounded-t-[24px] h-[75%]">
                            <Text className="text-[16px] font-bold font-poppins-medium text-[#4A4A4A] mb-4">
                                States
                            </Text>
                            
                            {/* Search Bar */}
                            <View className="flex-row items-center bg-white border border-[#E0E0E0] rounded-full h-[50px] px-4 mb-4">
                                <TextInput
                                    placeholder="Search states"
                                    placeholderTextColor="#A0A0A0"
                                    className="flex-1 text-[12px] font-inter text-black h-full"
                                />
                                <Feather name="search" size={18} color="#000000" />
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                {statesList.map((item, index) => (
                                    <TouchableOpacity 
                                        key={index} 
                                        className="py-4"
                                        onPress={() => {
                                            setState(item);
                                            setStateModalVisible(false);
                                        }}
                                    >
                                        <Text className="text-[14px] font-poppins-regular text-black tracking-wide">
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                <View className="h-10" />
                            </ScrollView>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>

            {/* LGA Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={lgaModalVisible}
                onRequestClose={() => setLgaModalVisible(false)}
            >
                <TouchableOpacity 
                    style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                    activeOpacity={1} 
                    onPress={() => setLgaModalVisible(false)}
                >
                    <TouchableWithoutFeedback>
                        <View className="bg-[#F8F9FA] pb-8 pt-6 px-6 rounded-t-[24px] h-[75%]">
                            <Text className="text-[16px] font-bold font-poppins-medium text-[#4A4A4A] mb-4">
                                Local Government Area
                            </Text>
                            
                            {/* Search Bar */}
                            <View className="flex-row items-center bg-white border border-[#E0E0E0] rounded-full h-[50px] px-4 mb-4">
                                <TextInput
                                    placeholder="Search LGAs"
                                    placeholderTextColor="#A0A0A0"
                                    className="flex-1 text-[12px] font-inter text-black h-full"
                                />
                                <Feather name="search" size={18} color="#000000" />
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                {lgasList.map((item, index) => (
                                    <TouchableOpacity 
                                        key={index} 
                                        className="py-4"
                                        onPress={() => {
                                            setLga(item);
                                            setLgaModalVisible(false);
                                        }}
                                    >
                                        <Text className="text-[14px] font-poppins-regular text-black tracking-wide">
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                                <View className="h-10" />
                            </ScrollView>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>

            {/* Submitting Loading Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={isSubmitting}
                onRequestClose={() => setIsSubmitting(false)}
            >
                <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <Image source={logo} className="w-[60px] h-[60px] mb-4" resizeMode="contain" />
                    <Text className="text-[16px] font-bold text-[#240046]">
                        Uploading Utility Bill...
                    </Text>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default AddressVerification;
