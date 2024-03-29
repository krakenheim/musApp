//* Credit to Reactiive on https://www.youtube.com/watch?v=KvRqsRwpwhY

import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  event,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

type BottomSheetProps = {
  children?: React.ReactNode 
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children }, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination: number) => {
      "worklet";

      active.value = destination !== 0;

      translateY.value = withSpring(destination, { damping: 500 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        console.log(event.translationY);
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        // * the lower threshold for modal snap to bottom of the screen (Bigger number (now 5) equals closer to bottom to disappear )
        if (translateY.value > -SCREEN_HEIGHT / 5) {
          scrollTo(0);
          /*         translateY.value = withSpring(0, { damping: 500 }); */
          // * the higher threshold for modal snap to top of the screen
          // * (higher number (now 1.5) means snap to top will happen on more of the screen)
        } else if (translateY.value < -SCREEN_HEIGHT / 1.8) {
          scrollTo(MAX_TRANSLATE_Y);
          /*         translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 }); */
        }
      });

    /* useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 4);
  }, []);
 */
    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );
      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT-100,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});
