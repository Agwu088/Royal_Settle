import { Link } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions, Pressable, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get("window");

const slides = [
    {
        id: "1",
        title: "Build Wealth Through\nYour Community.",
        subtitle:
            "Create your Royalsettle account today and have your money work for you.",
        image: require("../assets/images/slide1.png"),
    },
    {
        id: "2",
        title: "More People. More\nPower. More Savings.",
        subtitle:
            "Create your Royalsettle account today and have your money work for you.",
        image: require("../assets/images/slide2.png"),
    },
    {
        id: "3",
        title: "Your Circle, Your\nStrength.",
        subtitle:
            "Create your Royalsettle account today and have your money work for you.",
        image: require("../assets/images/slide3.png"),
    },
];

// Add duplicate for infinite loop
const infiniteSlides = [...slides, { ...slides[0], id: "1-duplicate" }];

export default function OnboardingSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex < infiniteSlides.length - 1) {
                flatListRef.current?.scrollToIndex({
                    index: activeIndex + 1,
                    animated: true,
                });
            }
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval);
    }, [activeIndex]);

    // Handle Infinite Loop Reset
    useEffect(() => {
        if (activeIndex === infiniteSlides.length - 1) {
            // We are at the duplicate slide. Wait for animation to finish then snap to 0
            const timeout = setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                    index: 0,
                    animated: false,
                });
                setActiveIndex(0);
            }, 500); // 500ms matches default scroll animation roughly

            return () => clearTimeout(timeout);
        }
    }, [activeIndex]);

    const onScroll = (event) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setActiveIndex(index);
    };

    return (
        <View className="flex-1 py-[5%]">
            {/* Static Header with Logo and Dots */}
            <View className="px-6 mb-4">
                <Text className="text-white text-2xl font-bold">
                    Royalsettle™
                </Text>

                {/* Dots Indicator - Moved below Logo */}
                <View className="flex-row mt-2 space-x-1">
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            className={`h-1.5 rounded-full ml-[2px] ${(activeIndex % slides.length) === index
                                ? "w-2 bg-[#fea01c]"
                                : "w-1.5 bg-white"
                                }`}
                        />
                    ))}
                </View>
            </View>

            {/* Scrolling Content */}
            <FlatList
                ref={flatListRef}
                data={infiniteSlides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ width }} className="flex-1">
                        {/* Text Content */}
                        <View className="mt-4 px-6">
                            <Text className="text-white text-[40px] font-medium leading-tight tracking-tight">
                                {item.title}
                            </Text>
                            <Text className="text-white font-inter text-base mt-4 leading-6">
                                {item.subtitle}
                            </Text>
                        </View>
                        <ImageBackground
                            source={item.image}
                            resizeMode="cover"
                            className="px-6 h-full w-full"
                            style={{ width }}
                        />
                    </View>
                )}
            />

            {/* Static Footer */}
            <View className="px-6 mb-6 pt-4 absolute -bottom-5 w-full">
                <Text className="text-white mb-3 text-base font-[600]">
                    Already have an account?{" "}
                    <Link href="/login">
                        <Text className="text-[#fea01c] font-[600]">
                            Log in
                        </Text>
                    </Link>
                </Text>


                <Pressable className="bg-white py-4 rounded-full shadow-lg active:opacity-90">
                    <Link href="/(auth)">
                        <Text className="text-center text-[#1a0b2e] font-bold text-lg">
                            Create an account
                        </Text>
                    </Link>
                </Pressable>

            </View>
        </View>
    );
}
