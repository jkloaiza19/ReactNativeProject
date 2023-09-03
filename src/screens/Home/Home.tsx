import React, { useEffect } from "react"
import { View, Text, SafeAreaView, SafeAreaViewComponent } from 'react-native'

// Material components
import { Stack, Button, ActivityIndicator } from '@react-native-material/core'

// schema
import { IHomeComponentProps } from './schema'

// constants
import { SETTINGS_SCREEN } from '../../navigation/_common/routes'

// styles
import styles from './Home.styles'

export const Home: React.FC<IHomeComponentProps> = ({
  navigation,
  user,
  products,
  fetchUser,
}): JSX.Element  => {
  useEffect(() => {
    if (!user.loaded) {
      fetchUser({ id: 1 })
    }
  }, [])

  const goToSettings = () => navigation.navigate(SETTINGS_SCREEN.name)

  return (
    <View style={styles.homeContainer}>
      {user.loading ? (
        <ActivityIndicator size="large" />
      ) : (

      <Stack fill center spacing={4}>
        {user ? <Text>{user.name}</Text> : null}
        <Button title="Contained" onPress={() => alert('Hi there!')} />
        <Button variant="outlined" title="Go to settings" onPress={goToSettings} />
        <Button variant="text" title="Logout" onPress={() => navigation.replace('auth')} />
        <Button
          variant="contained"
          title="Go"
          loading={true}
          disabled={true}
        />
      </Stack>
    )}
    </View>
  )
}