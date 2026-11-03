import React from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const SuccessDrawer = ({ visible, onClose, msg, msg1 }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-end bg-black/40">
                {/* The main drawer container */}
                <View className="bg-[#F4F4F4] rounded-t-[40px] flex-col justify-between overflow-hidden" style={{ height: height * 0.93 }}>

                    {/* Top Content area */}
                    <View className="flex-1 items-center justify-center px-10">
                        {/* Checkmark Icon Container */}
                        <View className="w-[140px] h-[140px] rounded-full bg-[#A8DAB5] flex items-center justify-center mb-8 shadow-sm">
                            <View className="w-[85px] h-[85px] rounded-full bg-[#4CAF50] items-center justify-center flex shadow-md">
                                <Feather name="check" size={45} color="white" />
                            </View>
                        </View>

                        {/* Title */}
                        <Text className="text-[16px] font-semibold text-center text-black leading-tight mb-1 mt-5">
                            {msg}
                        </Text>

                        {/* Subtitle */}
                        <Text className="text-[11px] text-gray-500 font-medium font-inter text-center px-4">
                            {msg1}
                        </Text>
                    </View>

                    {/* Bottom Button area inside a white curved container */}
                    <View className="bg-white rounded-t-[40px] border border-gray-100 px-6 pt-6 pb-12 shadow-sm">
                        <TouchableOpacity
                            onPress={onClose}
                            className="bg-[#240046] py-[18px] rounded-full items-center w-full"
                        >
                            <Text className="text-white text-[16px] font-bold tracking-wide">Done</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default SuccessDrawer;
