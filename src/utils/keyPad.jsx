import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'backspace'],
];

function BackspaceIcon({ color = '#240B44' }) {
    return (
        <Svg width={26} height={20} viewBox="0 0 26 20" fill="none">
            <Path
                d="M8.72 1.85C9.28 1.16 10.12 0.75 11.01 0.75H22.25C23.91 0.75 25.25 2.09 25.25 3.75V16.25C25.25 17.91 23.91 19.25 22.25 19.25H11.01C10.12 19.25 9.28 18.84 8.72 18.15L1.96 11.22C1.27 10.52 1.27 9.48 1.96 8.78L8.72 1.85Z"
                fill={color}
            />
            <Path
                d="M13.5 7.5L18.5 12.5M18.5 7.5L13.5 12.5"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export const KeyPad = ({ onKeyPress, onBackspace, allowDecimal = true, }) => {

    const handlePress = (key) => {
        if (key === '.' && !allowDecimal) return;
        if (key === 'backspace' && onBackspace) {
            onBackspace();
        }
        onKeyPress(key);
    };

    return (
        <View className={`w-full gap-2.5`}>
            {ROWS.map((row, rowIndex) => (
                <View key={rowIndex} className="flex-row gap-2.5">
                    {row.map((key) => {
                        const isDecimalDisabled = key === '.' && !allowDecimal;
                        const isBackspace = key === 'backspace';

                        return (
                            <Pressable
                                key={key}
                                disabled={isDecimalDisabled}
                                onPress={() => handlePress(key)}
                                accessibilityRole="button"
                                accessibilityLabel={isBackspace ? 'Backspace' : key}
                                className={`h-[58px] flex-1 items-center justify-center rounded-[14px] bg-[#E5E7EB] active:scale-[0.98] active:bg-[#D1D5DB] ${isDecimalDisabled ? 'opacity-35' : ''
                                    }`}
                            >
                                {isBackspace ? (
                                    <BackspaceIcon color="#240B44" />
                                ) : (
                                    <Text className="text-[24px] font-normal text-[#111827]">
                                        {key}
                                    </Text>
                                )}
                            </Pressable>
                        );
                    })}
                </View>
            ))}
        </View>
    );
};

export default KeyPad;