import React, { forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LoanSheetWrapper from './LoanSheetWrapper';
import Opay from "@/assets/images/opay.svg";

const AccountSelectBottomSheet = forwardRef(({ accounts = [], selectedAccountId, onSelectAccount, onAddNewAccount, onBack, onClose }, ref) => {
    return (
        <LoanSheetWrapper
            ref={ref}
            title="Select Account"
            snapPoints={['33%']}
            onBack={onBack}
            onClose={onClose}
        >
            <View className="flex-1 justify-between">
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10 }}
                >
                    {accounts.map((acc) => {
                        const isSelected = acc.id === selectedAccountId;

                        return (
                            <Pressable
                                key={acc.id}
                                onPress={() => {
                                    onSelectAccount(acc);
                                    onClose?.();
                                }}
                                className={`flex-row items-center justify-between px-4 py-3.5 rounded-full border border-gray-100`}
                            >
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 rounded-full bg-emerald-50 items-center justify-center">
                                        <Opay width={30} height={30} />
                                    </View>


                                    <View>
                                        <Text className="text-[12px] font-familjen-medium text-[#403E47]">
                                            {acc.bankName}
                                        </Text>
                                        <Text className="text-[11px] text-gray-400 mt-0.5">
                                            {acc.maskedNumber}
                                        </Text>
                                    </View>
                                </View>

                                <View className={`w-5 h-5 rounded-full border items-center justify-center ${isSelected ? 'border-emerald-500' : 'border-gray-300'}`}>
                                    {isSelected && (
                                        <View className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    )}
                                </View>
                            </Pressable>
                        );
                    })}
                </BottomSheetScrollView>

                {/* Primary CTA Button */}
                <Pressable
                    onPress={() => {
                        onClose?.();
                        onAddNewAccount?.();
                    }}
                    className="w-full h-14 rounded-full bg-[#240046] items-center justify-center active:opacity-85 mt-2"
                >
                    <Text className="text-[16px] font-familjen-bold text-[#FFFFFF]">
                        Add New Account
                    </Text>
                </Pressable>
            </View>
        </LoanSheetWrapper>
    );
}
);

export default AccountSelectBottomSheet;