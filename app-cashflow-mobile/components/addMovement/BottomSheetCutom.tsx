import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native-reanimated/lib/typescript/Animated'
export type Ref=BottomSheetModal

const BottomSheetCutom = forwardRef<Ref>((props, ref)=>{
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const handleSheetChanges = useCallback((index: number) => {
  }, []);
 /*  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []); */
    return (
        <View style={styles.container}>
        <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
        </BottomSheetModal>
      </View>
    )
}) 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
  });