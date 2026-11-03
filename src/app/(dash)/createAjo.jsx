import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { Entypo, FontAwesome6, Ionicons, Feather } from '@expo/vector-icons';
import SuccessDrawer from '@/components/SuccessDrawer';
import Toast from 'react-native-toast-message';

const initialState = {
    name: "",
    amount: "",
    slots: "",
    frequency: "",
    duration: "",
    startDate: "",
    maturityDate: "",
}

const CustomDatePickerModal = ({ visible, onClose, onSelectDate, initialDate, title }) => {
    const [formData, setFormData] = useState(initialState);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        if (visible) {
            const d = initialDate ? new Date(initialDate) : new Date();
            const validDate = isNaN(d.getTime()) ? new Date() : d;
            setSelectedDate(validDate);
            setCurrentMonth(validDate);
        }
    }, [visible, initialDate]);

    if (!visible) return null;

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(year, month + 1, 1));
    };

    const handleDayPress = (dayNumber) => {
        const newD = new Date(year, month, dayNumber);
        setSelectedDate(newD);
    };

    const handleConfirm = () => {
        const yyyy = selectedDate.getFullYear();
        const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const dd = String(selectedDate.getDate()).padStart(2, '0');
        onSelectDate(`${yyyy}-${mm}-${dd}`);
        onClose();
    };

    const daysArray = [];
    for (let i = 0; i < firstDayIndex; i++) {
        daysArray.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        daysArray.push(d);
    }

    const isSelected = (dayNumber) => {
        if (!dayNumber || !selectedDate) return false;
        return (
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === dayNumber
        );
    };

    const isToday = (dayNumber) => {
        if (!dayNumber) return false;
        const today = new Date();
        return (
            today.getFullYear() === year &&
            today.getMonth() === month &&
            today.getDate() === dayNumber
        );
    };

    const handleSubmit = () => {
        const { username, password } = formData;

        if (!username) {
            Toast.show({
                type: 'error',
                text1: 'Email is required',
            });
            return;
        }

        if (!password) {
            Toast.show({
                type: 'error',
                text1: 'Password is required',
            });
            return;
        }
    }

    return (
        <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
            <TouchableOpacity
                className="flex-1 bg-black/40 justify-end"
                activeOpacity={1}
                onPress={onClose}
            >
                <View className="bg-white rounded-t-3xl p-5 pb-8" onStartShouldSetResponder={() => true}>
                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-4 pb-3 border-b border-gray-100">
                        <TouchableOpacity onPress={onClose}>
                            <Text className="text-gray-500 font-medium text-base">Cancel</Text>
                        </TouchableOpacity>
                        <Text className="text-lg font-semibold text-[#141414]">
                            {title || "Select Date"}
                        </Text>
                        <TouchableOpacity onPress={handleConfirm}>
                            <Text className="text-[#240046] font-bold text-base">Done</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Month Navigator */}
                    <View className="flex-row justify-between items-center my-2 px-2">
                        <TouchableOpacity onPress={handlePrevMonth} className="p-2 rounded-full bg-gray-100">
                            <Ionicons name="chevron-back" size={20} color="#141414" />
                        </TouchableOpacity>
                        <Text className="text-base font-bold text-[#141414]">
                            {monthNames[month]} {year}
                        </Text>
                        <TouchableOpacity onPress={handleNextMonth} className="p-2 rounded-full bg-gray-100">
                            <Ionicons name="chevron-forward" size={20} color="#141414" />
                        </TouchableOpacity>
                    </View>

                    {/* Weekday Labels */}
                    <View className="flex-row justify-between my-2">
                        {dayNames.map((day, idx) => (
                            <Text key={idx} className="w-[14%] text-center text-xs font-semibold text-gray-400">
                                {day}
                            </Text>
                        ))}
                    </View>

                    {/* Calendar Days Grid */}
                    <View className="flex-row flex-wrap">
                        {daysArray.map((day, idx) => {
                            if (day === null) {
                                return <View key={idx} className="w-[14%] h-10" />;
                            }
                            const selected = isSelected(day);
                            const today = isToday(day);

                            return (
                                <TouchableOpacity
                                    key={idx}
                                    onPress={() => handleDayPress(day)}
                                    className={`w-[14%] h-10 items-center justify-center rounded-full my-1 ${selected
                                        ? "bg-[#240046]"
                                        : today
                                            ? "bg-[#F4F4FB]"
                                            : ""
                                        }`}
                                >
                                    <Text
                                        className={`text-sm font-medium ${selected
                                            ? "text-white font-bold"
                                            : today
                                                ? "text-[#240046] font-bold"
                                                : "text-gray-800"
                                            }`}
                                    >
                                        {day}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const InputField = ({ label, placeholder, icon, rightIcon, value, onChangeText, onPress, editable = true, ...props }) => {
    const inputContent = (
        <View className="mb-1">
            {label && (
                <Text className="text-gray-600 text-base mb-2 font-medium">
                    {label}
                </Text>
            )}

            <View className="flex-row items-center bg-white rounded-full px-4 py-4 border border-gray-200">
                {icon && <View className="mr-3">{icon}</View>}

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    className="flex-1 text-base text-gray-800"
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable}
                    pointerEvents={onPress ? "none" : "auto"}
                    {...props}
                />

                {rightIcon && <View>{rightIcon}</View>}
            </View>
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {inputContent}
            </TouchableOpacity>
        );
    }

    return inputContent;
};

export default function CreateAjo() {
    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [isSuccessDrawerVisible, setIsSuccessDrawerVisible] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [activeDateField, setActiveDateField] = useState(null); // 'startDate' | 'maturityDate'

    const privacyPolicy = "By signing in to this app you agree with our Terms of Use and Privacy Policy."

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const openDatePicker = (field) => {
        setActiveDateField(field);
        setShowDatePicker(true);
    };

    const onSubmit = () => {
        const { groupName, contributionPerSlot, slots, frequency, duration, startDate, maturityDate } = formData

        if (!groupName) {
            Toast.show({
                type: 'error',
                text1: 'Group name is required',
            });
            return;
        }

        if (!contributionPerSlot) {
            Toast.show({
                type: 'error',
                text1: 'Contribution per slot is required',
            });
            return;
        }

        if (!slots) {
            Toast.show({
                type: 'error',
                text1: 'number of slots is required',
            });
            return;
        }

        if (!frequency) {
            Toast.show({
                type: 'error',
                text1: 'Frequency is required',
            });
            return;
        }

        if (!duration) {
            Toast.show({
                type: 'error',
                text1: 'duration is required',
            });
            return;
        }

        if (!startDate) {
            Toast.show({
                type: 'error',
                text1: 'Start date is required',
            });
            return;
        }

        if (!maturityDate) {
            Toast.show({
                type: 'error',
                text1: 'Maturity date is required',
            });
            return;
        }

        console.log("Create Ajo Form Data:", formData);
        setIsSuccessDrawerVisible(true);
        setFormData(initialState);
    }

    return (
        <SafeAreaView className="flex-1 bg-[#FFFFFF]">
            <View className="flex-1 px-[4%] py-4">
                <View className="flex-row items-center gap-[24%]">
                    <View className="w-10 h-10 rounded-full items-center justify-center border border-[#141414]">
                        <Entypo name="chevron-small-left" size={24} color="#141414" />
                    </View>
                    <Text className="text-[#141414] text-[24px] font-[500] leading-tight">Create Ajo</Text>
                </View>
                <View className="mt-[10%] flex-row items-center justify-between">
                    <View>
                        <Text className="text-[#141414] text-[24px] font-[500] leading-tight">Set up your Ajo plan</Text>
                        <Text className="text-[#141414] text-[12px] font-[500] leading-tight">Provide the details for your Ajo plan.</Text>
                    </View>
                    <View className="w-10 h-10 bg-[#F4F4FB] rounded-full items-center justify-center">
                        <FontAwesome6 name="user-group" size={24} color="#240046" />
                    </View>
                </View>
                <View className="flex-1">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 20, paddingBottom: 10 }}
                    >

                        {/* Thrift Name */}
                        <InputField
                            label="Group name"
                            placeholder="e.g Detty december"
                            icon={<Feather name="users" size={20} color="#6B7280" />}
                            value={formData.groupName}
                            onChangeText={(text) => handleChange("groupName", text)}
                        />

                        {/* Savings Target */}
                        <InputField
                            label="How will each individual contribute per slot?"
                            placeholder="Enter amount"
                            icon={<Feather name="slash" size={20} color="#6B7280" />}
                            value={formData.contributionPerSlot}
                            onChangeText={(text) => handleChange("contributionPerSlot", text)}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            This is the amount each person contribute for every slot selected.
                        </Text>

                        {/* Frequency */}
                        <InputField
                            label="How many slots will this ajo group have?"
                            placeholder="Select an item"
                            icon={<Feather name="refresh-ccw" size={20} color="#6B7280" />}
                            rightIcon={<Ionicons name="chevron-down" size={20} color="#6B7280" />}
                            value={formData.slots}
                            onChangeText={(text) => handleChange("slots", text)}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            Minimum of 3 slots and maximum of 12 slots
                        </Text>

                        {/* Frequency */}
                        <InputField
                            label="How often will contribution be made?"
                            placeholder="Select an item"
                            icon={<Feather name="refresh-ccw" size={20} color="#6B7280" />}
                            rightIcon={<Ionicons name="chevron-down" size={20} color="#6B7280" />}
                            value={formData.frequency}
                            onChangeText={(text) => handleChange("frequency", text)}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            Choose if members will contribute weekly or monthly
                        </Text>

                        {/* Frequency */}
                        <InputField
                            label="How long will this savings take?"
                            placeholder="Select an item"
                            icon={<Feather name="refresh-ccw" size={20} color="#6B7280" />}
                            rightIcon={<Ionicons name="chevron-down" size={20} color="#6B7280" />}
                            value={formData.duration}
                            onChangeText={(text) => handleChange("duration", text)}
                        />

                        <Text className="text-[#24004680] text-sm mb-5">
                            Set the duration of this group saving
                        </Text>

                        {/* Dates */}
                        <View className="flex-row justify-between mb-5">
                            <View className="w-[48%]">
                                <InputField
                                    label="Start date"
                                    placeholder="Pick a date"
                                    icon={
                                        <Feather name="calendar" size={20} color="#6B7280" />
                                    }
                                    rightIcon={
                                        <Ionicons name="chevron-down" size={18} color="#6B7280" />
                                    }
                                    value={formData.startDate}
                                    editable={false}
                                    onPress={() => openDatePicker("startDate")}
                                />
                                <Text className="text-[#24004680] text-xs">
                                    When First Payment cycle begins
                                </Text>
                            </View>

                            <View className="w-[48%]">
                                <InputField
                                    label="Maturity date"
                                    placeholder="Pick a date"
                                    icon={
                                        <Feather name="calendar" size={20} color="#6B7280" />
                                    }
                                    rightIcon={
                                        <Ionicons name="chevron-down" size={18} color="#6B7280" />
                                    }
                                    value={formData.maturityDate}
                                    editable={false}
                                    onPress={() => openDatePicker("maturityDate")}
                                />
                                <Text className="text-[#24004680] text-xs">
                                    When the withdrawal will happen
                                </Text>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Bottom Button */}

                    <TouchableOpacity onPress={onSubmit} className="bg-[#240046] py-5 rounded-full items-center">
                        <Text className="text-white text-lg font-semibold">
                            Create Ajo
                        </Text>
                    </TouchableOpacity>
                </View>

                <SuccessDrawer
                    visible={isSuccessDrawerVisible}
                    onClose={() => {
                        setIsSuccessDrawerVisible(false);
                        router.push({ pathname: "/ajo", params: { newAjo: 'true' } });
                    }}
                    msg="Congratulations! your Ajo has been created"
                    msg1="You can now invite your friends."
                />

                <CustomDatePickerModal
                    visible={showDatePicker}
                    onClose={() => setShowDatePicker(false)}
                    initialDate={activeDateField ? formData[activeDateField] : ""}
                    title={activeDateField === 'startDate' ? 'Select Start Date' : 'Select Maturity Date'}
                    onSelectDate={(formattedDate) => {
                        if (activeDateField) {
                            handleChange(activeDateField, formattedDate);
                        }
                    }}
                />

            </View>
        </SafeAreaView >
    )
}



