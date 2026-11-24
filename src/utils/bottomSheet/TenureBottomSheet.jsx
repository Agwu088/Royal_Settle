import React, { forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LoanSheetWrapper from './LoanSheetWrapper';

export const DEFAULT_TENURES = [
    { id: '180', label: '180 Days (6 months)', interest: '16%' },
    { id: '150', label: '150 Days (5 months)', interest: '16%' },
    { id: '120', label: '120 Days (4 months)', interest: '18%' },
    { id: '90', label: '90 Days (3 months)', interest: '20%' },
    { id: '60', label: '60 Days (2 months)', interest: '22%' },
    { id: '30', label: '30 Days (1 month)', interest: '24%' },
];

const TenureBottomSheet = forwardRef(
    ({ tenures = DEFAULT_TENURES, selectedId, onSelect, onBack, onClose }, ref) => {
        return (
            <LoanSheetWrapper
                ref={ref}
                title="Choose a Tenure"
                snapPoints={['65%']}
                onBack={onBack}
                onClose={onClose}
            >
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10, paddingBottom: 16 }}
                >
                    {tenures.map((item) => {
                        const isSelected = item.id === selectedId;

                        return (
                            <Pressable
                                key={item.id}
                                onPress={() => {
                                    onSelect(item);
                                    onClose?.();
                                }}
                                className={`flex-row items-center justify-between px-4 py-3.5 rounded-2xl border ${isSelected
                                    ? 'border-[#280A48] bg-[#FAF8FC]'
                                    : 'border-gray-100 bg-white'
                                    }`}
                            >
                                <View className="flex-row items-center flex-wrap flex-1 pr-2">
                                    <Text className="text-xs font-semibold text-gray-900">
                                        {item.label}
                                    </Text>
                                    <Text className="text-xs text-gray-400 ml-2">
                                        Monthly interest {item.interest}
                                    </Text>
                                </View>

                                {/* Radio Indicator */}
                                <View
                                    className={`w-5 h-5 rounded-full border items-center justify-center ${isSelected ? 'border-emerald-500' : 'border-gray-300'
                                        }`}
                                >
                                    {isSelected && (
                                        <View className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    )}
                                </View>
                            </Pressable>
                        );
                    })}
                </BottomSheetScrollView>
            </LoanSheetWrapper>
        );
    }
);

export default TenureBottomSheet;