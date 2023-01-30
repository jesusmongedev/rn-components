import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const styles = StyleSheet.create({
  globalContainer: {
    margin: 20,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  //Switch
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  spacing: {
    marginTop: 12,
  },
});
