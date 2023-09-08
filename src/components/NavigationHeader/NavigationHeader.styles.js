import { StyleSheet } from "react-native"
import { BLACK, WHITE } from '../../constants/colors'

export default StyleSheet.create({
  container: {
    // flexGrow: 1,
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: BLACK,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    textTransform: 'capitalize',
    color: WHITE,
  },
})