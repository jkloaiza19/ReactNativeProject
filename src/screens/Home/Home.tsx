import React, { useEffect } from "react"
import { View, Text, SafeAreaView, SafeAreaViewComponent } from 'react-native'

// Material components
import { Stack, Button, ActivityIndicator } from '@react-native-material/core'

// schema
import { IHomeComponentProps } from './schema'

// constants
import { SETTINGS_SCREEN, PLACES_SCREEN } from '../../navigation/_common/routes'

// styles
import styles from './Home.styles'

export const Home: React.FC<IHomeComponentProps> = ({
  navigation,
  user,
  fetchUser,
  signOut,
}): JSX.Element  => {
  // useEffect(() => {
  //   if (!user.loaded) {
  //     fetchUser({ id: 1 })
  //   }
  // }, [])

  const goToSettings = () => navigation.navigate(SETTINGS_SCREEN.name)
  const goToPlaces = () => navigation.navigate(PLACES_SCREEN.name)

  const logOut = () => {
    signOut()
  }

  return (
    <View style={styles.homeContainer}>
      {user.loading ? (
        <ActivityIndicator size="large" />
      ) : (

      <Stack fill center spacing={4}>
        {user ? <Text style={{ color: 'white' }}>{`${user.firstName} ${user.lastName}`}</Text> : null}
        <Button variant="text" title="Logout" onPress={logOut} />
        <Button
          variant="contained"
          title="Go"
          loading={true}
          disabled={true}
        />
        <Button
          variant="contained"
          title="Go to Settings"
          onPress={goToSettings}
        />
        <Button
          variant="contained"
          title="Go to MY PLACES"
          onPress={goToPlaces}
        />
      </Stack>
    )}
    </View>
  )
}