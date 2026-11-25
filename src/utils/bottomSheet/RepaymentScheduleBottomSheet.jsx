import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LoanSheetWrapper from './LoanSheetWrapper';

const RepaymentScheduleBottomSheet = forwardRef(({ installmentsCount = 4, repayPerPeriod = '55,556', schedule = [], onBack, onClose }, ref) => {
    return (
        <LoanSheetWrapper
            ref={ref}
            title="Repayment Schedule"
            snapPoints={['50%']}
            onBack={onBack}
            onClose={onClose}
        >
            {/* Top Summary Pill Card */}
            <View className="flex-row bg-[#EEEDFF] rounded-[24px] p-4 mb-5">
                <View className="flex-1 items-center">
                    <Text className="text-[14px] font-familjen text-[#403E47]">
                        {installmentsCount}
                    </Text>
                    <Text className="text-[13px] font-familjen text-[#807C8D] mt-1">
                        Installments
                    </Text>
                </View>

                <View className="flex-1 items-center">
                    <Text className="text-[14px] font-familjen text-[#403E47]">
                        ₦{repayPerPeriod}
                    </Text>
                    <Text className="text-[13px] font-familjen text-[#807C8D] mt-1">
                        Repay Per Period
                    </Text>
                </View>
            </View>

            <View className="border border-[#EAECF0] rounded-[24px] p-5">
                {/* Timeline List */}
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={false}
                // contentContainerStyle={{ paddingBottom: 160 }}
                >
                    {schedule.map((entry, index) => {
                        const isFirst = index === 0;
                        const isLast = index === schedule.length - 1;

                        return (
                            <View key={entry.id || index} className="flex-row h-[58px]">
                                {/* Left Timeline Node & Connector Line */}
                                <View className="w-6 items-center mr-3">
                                    <View
                                        className={`w-3 h-3 rounded-full mt-1 border-2 ${isFirst
                                            ? 'border-[#280A48] bg-[#280A48]'
                                            : 'border-gray-300 bg-white'
                                            }`}
                                    />
                                    {!isLast && (
                                        <View className="w-[1.5px] flex-1 bg-gray-200 my-1" />
                                    )}
                                </View>

                                {/* Date & Label */}
                                <View className="flex-1 pb-4">
                                    <Text className="text-[14px] font-familjen-bold text-[#403E47]">
                                        {entry.date}
                                    </Text>
                                    <Text className="text-[13px] font-familjen text-[#807C8D] mt-1">
                                        {entry.label}
                                    </Text>
                                </View>

                                {/* Right Repay Amount */}
                                <View className="items-end">
                                    <Text className="text-[14px] font-familjen-bold text-[#403E47]">
                                        ₦{entry.amount}
                                    </Text>
                                    <Text className="text-[13px] font-familjen text-[#807C8D] mt-1">
                                        Repay Amount
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </BottomSheetScrollView>
            </View>
        </LoanSheetWrapper>
    );
}
);

export default RepaymentScheduleBottomSheet;