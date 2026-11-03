import { useState, useRef, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const FloatingLabel = ({ label, isActive }) => {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(isActive ? 4 : 32),
            fontSize: withTiming(isActive ? 12 : 16),
            transform: [
                { translateY: withTiming(isActive ? 0 : -10) }
            ],
        };
    });

    return (
        <Animated.Text
            className="absolute left-5 pl-[7%] text-white"
            style={animatedStyle}
        >
            {label}
        </Animated.Text>
    );
};

// OTP FUNCTION
const OtpInput = ({ formData, setFormData, buttonText }) => {

    let numInputs;
    if (buttonText === "Set Pin") {
        numInputs = 4; // or however many OTP digits you expect
    } else {
        numInputs = 6; // or however many OTP digits you expect
    }

    const [otp, setOtp] = useState([]);

    useEffect(() => {
        setOtp(Array(numInputs).fill(""));
    }, [numInputs]);

    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const value = text.replace(/[^0-9]/g, "");

        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        setFormData(prev => ({
            ...prev,
            otp: newOtp.join(""),
        }));

        if (value && index < numInputs - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <View className="flex-1 flex-row items-center justify-center">
            {otp?.map((digit, index) => (
                <TextInput
                    name={otp[digit]}
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    className={`items-center justify-center rounded-[23px] border-2 border-[#fff] text-[#fff] text-[20px] font-[500] w-[15%] p-[5%] mx-[1%] ${buttonText === "Set Pin" ? "mx-[5%]" : "mx-0"}`}
                    keyboardType="number-pad"
                    type={"number"}
                    maxLength={1}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    placeholder=""
                    autoFocus={index === 0}
                    autoCapitalize="none"
                />
            ))}
        </View>
    )
};
// ******************************************************//


const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText, isLoading, resendCode, formatTime, secondsLeft, isDisable }) => {
    const [focused, setFocused] = useState(null);

    const renderInputsByComponentType = (getControlItem) => {
        const value = formData[getControlItem.name] || "";
        const isActive = focused === getControlItem.name || value.length > 0;

        let element = null;
        const Icon = getControlItem.icon?.library;

        switch (getControlItem.componentType) {
            case "input":
                element = (
                    <View className="flex-1">
                        {Icon && (
                            <Icon
                                name={getControlItem.icon.name}
                                size={20}
                                color="#fff"
                                style={{
                                    position: 'absolute',
                                    left: 16,
                                    top: '50%',
                                    marginTop: -10,
                                }}
                            />
                        )}

                        <FloatingLabel label={getControlItem.label} isActive={isActive} />

                        <TextInput
                            className="w-full py-[5%] pl-[12%] pr-[2%] rounded-[30px] border-2 border-[#fff] text-[#fff] ${
                                Icon ? 'pl-[14%]' : 'px-[4%]'
                            }"
                            placeholderTextColor="#ffffff"
                            name={getControlItem.name}
                            keyboardType={getControlItem.type === "email" ? "email-address" : getControlItem.type === "number" ? "number-pad" : "text"}
                            secureTextEntry={getControlItem.type === "password" ? true : false}
                            placeholder=""
                            onFocus={() => setFocused(getControlItem.name)}
                            onBlur={() => setFocused(null)}
                            id={getControlItem.name}
                            type={getControlItem.type}
                            value={value}
                            autoCapitalize="none"
                            onChangeText={text => setFormData({
                                ...formData,
                                [getControlItem.name]: text
                            })}
                        />
                    </View>
                );
                break;
            case "textarea":
                element = (
                    <TextInput
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        keyboardType={getControlItem.type === "email" ? "email-address" : getControlItem.type === "number" ? "number-pad" : "text"}
                        secureTextEntry={getControlItem.type === "password" ? true : false}
                        type={getControlItem.type}
                        value={value}
                        autoCapitalize="none"
                        multiline
                        className="bg-white rounded-[5px] w-full p-3 min-h-[120px]"
                        style={{
                            textAlignVertical: 'top', // IMPORTANT for Android
                        }}
                        onChangeText={text => setFormData({
                            ...formData,
                            [getControlItem.name]: text
                        })}
                    />
                );
                break;
            default:
                element = (
                    <TextInput
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        autoCapitalize="none"
                        onChangeText={text => setFormData({
                            ...formData,
                            [getControlItem.name]: text
                        })}
                    />
                );
                break;
            case "otpInput":
                return <OtpInput formData={formData} setFormData={setFormData} buttonText={buttonText} />;
        }
        return element;
    }

    return (
        <View
            className={`flex-1  
                ${buttonText === "Verify Number" && "gap-[55%]" ||
                buttonText === "Sign Up" && "gap-[10%]" ||
                buttonText === "Get Code" && "gap-[65%]" ||
                buttonText === "Verify Email" && "gap-[65%]" ||
                buttonText === "Login" && "gap-[55%]" ||
                buttonText === "WellBack" && "gap-[62%]" ||
                buttonText === "Set Pin" && "gap-[58%]"
                }`}>
            <View className="flex-row flex-wrap justify-start items-end w-full gap-6">
                {
                    formControls.map((controlItem, index) =>
                        <View className="flex-row flex-wrap w-full gap-[6px]" key={index}>
                            {renderInputsByComponentType(controlItem)}
                        </View>)
                }
            </View>

            {
                buttonText === "Get Code" || buttonText === "Sign Up" || buttonText === "Login" || buttonText === "WellBack" ?
                    <TouchableOpacity
                        onPress={onSubmit}
                        className="py-4 w-full bg-white rounded-full"
                    >
                        {isLoading
                            ? <ActivityIndicator size="small" color="#000000" />
                            : <Text className="self-center text-[#27153E] text-[16px] font-[700]">{buttonText === "WellBack" ? "Login" : "Submit"}</Text>
                        }
                    </TouchableOpacity>
                    :
                    buttonText !== "Set Pin" ? (
                        <View className="flex-row flex-wrap justify-between items-center w-full">
                            <View>
                                <Text className="text-[#fff]">Resend code in {formatTime(secondsLeft)}</Text>
                                <Text className="text-[#fff]">Didn't receive the code?{" "}
                                    <Text onPress={resendCode} disabled={isDisable} className={isDisable ? "text-[#ef9913] font-bold opacity-50" : "text-[#ef9913] font-bold"}>
                                        Resend
                                    </Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={onSubmit}
                                className="py-5 w-[15%] bg-white rounded-full"
                            >
                                {isLoading
                                    ? <ActivityIndicator size="small" color="#000000" />
                                    : <Text className="self-center text-[#27153E] text-[16px] font-[700]">
                                        <Feather name="arrow-right" size={24} color="black" />
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View className="flex-row flex-wrap justify-end w-full">
                            <TouchableOpacity
                                onPress={onSubmit}
                                className="py-5 w-[15%] bg-white rounded-full"
                            >
                                {isLoading
                                    ? <ActivityIndicator size="small" color="#000000" />
                                    : <Text className="self-center text-[#27153E] text-[16px] font-[700]">
                                        <Feather name="arrow-right" size={24} color="black" />
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    )
            }
        </View>
    )
}

export default CommonForm;
