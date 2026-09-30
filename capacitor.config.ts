import type { CapacitorConfig } from '@capacitor/cli'
import { KeyboardResize } from '@capacitor/keyboard'

const config: CapacitorConfig = {
  appId: 'xyz.chatboxapp.ce',
  appName: 'Chatty',
  webDir: 'release/app/dist/renderer',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: ['*'],
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#18181b',
      androidSplashResourceName: 'splash',
    },
    Keyboard: {
      resize: KeyboardResize.Body,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
}

export default config
