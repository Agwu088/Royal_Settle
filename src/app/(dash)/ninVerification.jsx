import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const NINVerification = () => {
    const router = useRouter();
    const [nin, setNin] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

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
                        <MaterialCommunityIcons name="card-account-details" size={30} color="white" />
                    </View>

                    {/* Title and Description */}
                    <Text className="text-[18px] font-bold text-[#240046] mb-2 font-poppins-medium">
                        Enter your National{'\n'}Identification Number
                    </Text>
                    <Text className="text-[14px] font-inter text-[#7A6B9B] mb-8 font-poppins-regular">
                        Enter the correct National Identification{'\n'}Number to enable us confirm your identity.
                    </Text>

                    {/* Input Field */}
                    <View className="mb-6">
                        <Text className="text-[14px] font-[500] font-poppins-regular text-[#4A4A4A] mb-2">
                            Enter your national identification number
                        </Text>
                        <TextInput
                            value={nin}
                            onChangeText={setNin}
                            placeholder="Enter your NIN"
                            placeholderTextColor="#A0A0A0"
                            keyboardType="number-pad"
                            maxLength={11}
                            className={`bg-white border rounded-full h-[55px] px-[5%] text-[12px] font-inter text-black ${
                                nin.length > 0 && nin.length < 11 ? 'border-[#FF9999]' : 'border-[#E0E0E0]'
                            }`}
                        />
                        {nin.length > 0 && nin.length < 11 && (
                            <Text className="text-[#FF4A4A] text-[12px] font-poppins-regular mt-1 ml-1">
                                Input must be 11 characters
                            </Text>
                        )}
                    </View>

                    {/* Upload Section */}
                    <View className="mb-6">
                        <Text className="text-[14px] font-bold font-poppins-medium text-[#000000] mb-1">
                            Upload NIN slip or card
                        </Text>
                        <Text className="text-[14px] font-poppins-regular text-[#7A6B9B] mb-4">
                            To verify your NIN, kindly upload your NIN{'\n'}slip/card
                        </Text>

                        {/* Dashed Border Upload Area */}
                        <View className="border-2 border-dashed border-[#D2D2D2] rounded-[20px] items-center justify-center py-[10%] bg-white overflow-hidden">
                            {!isUploading ? (
                                <>
                                    <Text className="text-[14px] font-bold font-poppins-medium text-[#000000] mb-2 mt-2">
                                        Upload a photo of your document
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
                            ) : (
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
                                    <TouchableOpacity onPress={() => setIsUploading(false)}>
                                        <MaterialIcons name="close" size={24} color="black" />
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
                        disabled={nin.length < 11}
                        onPress={() => router.push('/addressVerification')}
                        className={`mb-[8%] h-14 rounded-full items-center justify-center ${nin.length >= 11 ? 'bg-[#240046]' : 'bg-[#E5E5E5]'
                            }`}
                    >
                        <Text className={`text-[16px] font-bold font-inter ${nin.length >= 11 ? 'text-white' : 'text-[#A0A0A0]'
                            }`}>
                            Submit
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
                                onPress={() => { setModalVisible(false); setIsUploading(true); }}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Take a photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className="py-5 items-center"
                                onPress={() => { setModalVisible(false); setIsUploading(true); }}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Select from files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className="py-5 items-center"
                                onPress={() => { setModalVisible(false); setIsUploading(true); }}
                            >
                                <Text className="text-[16px] font-poppins-regular text-black tracking-wide">Choose from albums</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
};

export default NINVerification;
