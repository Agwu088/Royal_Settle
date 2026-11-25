import React, { useMemo, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Close from "@/assets/images/close.svg";
import Chev from "@/assets/images/chev.svg";

const DEFAULT_SNAP_POINTS = ['55%'];

const LoanSheetWrapper = forwardRef(({ title, snapPoints = DEFAULT_SNAP_POINTS, onBack, onClose, children }, ref) => {

    const memoizedSnapPoints = useMemo(
        () => (Array.isArray(snapPoints) && snapPoints.length > 0 ? snapPoints : DEFAULT_SNAP_POINTS),
        [snapPoints]
    );

    const renderBackdrop = (props) => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.45}
            pressBehavior="close"
        />
    );

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={memoizedSnapPoints}
            enableDynamicSizing={false}
            backdropComponent={renderBackdrop}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: '#D1D5DB', width: 40 }}
            backgroundStyle={{
                backgroundColor: '#FFFFFF',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
            }}
        >
            <View className="flex-1 px-5 pt-1 pb-6">
                {/* Header Row: Back | Title | Close */}
                <View className="flex-row items-center justify-between pb-4 border-b border-gray-100">
                    <Pressable
                        onPress={onBack || onClose}
                        hitSlop={10}
                        className="w-8 h-8 items-center justify-center rounded-full active:bg-gray-100"
                    >
                        <Chev width={40} height={40} />
                    </Pressable>

                    <Text className="text-[16px] font-familjen-bold text-[#201F23]">
                        {title}
                    </Text>

                    <Pressable
                        onPress={onClose}
                        hitSlop={10}
                        className="w-8 h-8 items-center justify-center rounded-full active:bg-gray-100"
                    >
                        <Close width={40} height={40} />
                    </Pressable>
                </View>

                {/* Sheet Body */}
                <View className="flex-1 pt-4">{children}</View>
            </View>
        </BottomSheetModal>
    );
}
);

export default LoanSheetWrapper;