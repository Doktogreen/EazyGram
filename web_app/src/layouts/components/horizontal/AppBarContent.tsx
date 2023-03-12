// ** MUI Imports
import Box from '@mui/material/Box'

// Styles
import { Theme } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import useMediaQuery from '@mui/material/useMediaQuery'
import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings } = props
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Autocomplete hidden={hidden} settings={settings} /> */}
      <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      <ModeToggler settings={settings} saveSettings={saveSettings} />
      <NotificationDropdown settings={settings} />
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
