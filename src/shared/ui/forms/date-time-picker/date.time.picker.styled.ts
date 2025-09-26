// date.time.picker.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from 'react-native'

export const dateTimePickerComponentStyles = (theme: AppTheme) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};
