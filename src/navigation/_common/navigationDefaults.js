import { BLACK, WHITE, AMARANTH } from '../../constants/colors'

export const headerOptions = {
  headerTintColor: WHITE,
  headerStyle: {
    paddingVertical: 24,
    backgroundColor: BLACK,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: WHITE,
  }
}

export const tabBarStyles = {
  tabBarItemStyle: { marginTop: 15 },
  tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14, marginTop: 8 },
}

export const bottomNavOptions = {
  tabBarActiveTintColor: AMARANTH,
  headerShown: false,
}