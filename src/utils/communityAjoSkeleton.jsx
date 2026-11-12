import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';

const SkeletonBlock = ({ className, opacity }) => {
    return (
        <Animated.View style={{ opacity }}>
            <View className={`bg-gray-200 ${className}`} />
        </Animated.View>
    );
};

const SkeletonCard = ({ opacity }) => {
    return (
        <View className="bg-white border border-[#E8E1ED] rounded-[30px] p-5 mb-5">
            {/* Top Row */}
            <View className="flex-row items-center">
                {/* Community Icon */}
                <SkeletonBlock
                    opacity={opacity}
                    className="w-10 h-10 rounded-full"
                />

                {/* Title and Amount */}
                <View className="flex-1 ml-3">
                    <View className="flex-row items-center mb-2">
                        <SkeletonBlock
                            opacity={opacity}
                            className="w-28 h-4 rounded-md"
                        />
                        <SkeletonBlock
                            opacity={opacity}
                            className="w-20 h-3 rounded-md ml-2"
                        />
                    </View>

                    <SkeletonBlock
                        opacity={opacity}
                        className="w-48 h-5 rounded-md"
                    />

                    {/* Tags */}
                    <View className="flex-row items-center mt-3">
                        <SkeletonBlock
                            opacity={opacity}
                            className="w-16 h-6 rounded-full mr-2"
                        />
                        <SkeletonBlock
                            opacity={opacity}
                            className="w-16 h-6 rounded-full mr-2"
                        />
                        <SkeletonBlock
                            opacity={opacity}
                            className="w-20 h-6 rounded-full"
                        />
                    </View>
                </View>

                {/* Top Right Icon */}
                <View className="absolute right-0 top-[-2px]">
                    <SkeletonBlock
                        opacity={opacity}
                        className="w-8 h-8 rounded-full"
                    />
                </View>
            </View>

            {/* Avatars */}
            <View className="flex-row items-center mt-6 ml-[50px]">
                {[1, 2, 3, 4].map((item) => (
                    <Animated.View
                        key={item}
                        style={{ opacity }}
                        className={`w-5 h-5 rounded-full bg-gray-200 border-2 border-white ${item !== 1 ? '-ml-2' : ''
                            }`}
                    />
                ))}

                <SkeletonBlock
                    opacity={opacity}
                    className="w-6 h-5 rounded-full ml-1"
                />
            </View>

            {/* Bottom Row */}
            <View className="flex-row items-center mt-4 ml-[50px]">
                {/* Progress Bar */}
                <View className="flex-1 flex-row items-center">
                    <SkeletonBlock
                        opacity={opacity}
                        className="h-[9px] flex-1 rounded-full"
                    />

                    <SkeletonBlock
                        opacity={opacity}
                        className="w-8 h-3 rounded-md ml-2"
                    />
                </View>

                {/* Join Button */}
                <SkeletonBlock
                    opacity={opacity}
                    className="w-[68px] h-8 rounded-full ml-4"
                />
            </View>
        </View>
    );
};

const SkeletonSection = ({ title, opacity, tab }) => {
    return (
        <View className="mb-5">
            {tab !== "Active" && tab !== "Pending" && tab !== "Completed" ?
                < Text className="text-base font-medium text-[#141414] mb-4">{title}</Text>
                : ""
            }

            <SkeletonCard opacity={opacity} />
            <SkeletonCard opacity={opacity} />
        </View >
    );
};

const CommunityAjoSkeleton = ({ tab }) => {
    const opacity = useRef(new Animated.Value(0.4)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.9,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.4,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );

        animation.start();

        return () => animation.stop();
    }, [opacity]);

    return (
        <ScrollView
            className="flex-1 bg-white px-[5%] pt-5"
            showsVerticalScrollIndicator={false}
        >
            <SkeletonSection
                title="Weekly Community Ajo(s)"
                opacity={opacity}
                tab={tab}
            />

            <SkeletonSection
                title="Monthly Community Ajo(s)"
                opacity={opacity}
                tab={tab}
            />
        </ScrollView>
    );
};

export default CommunityAjoSkeleton;