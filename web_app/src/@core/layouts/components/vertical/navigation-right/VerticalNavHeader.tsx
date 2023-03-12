// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons
import Close from 'mdi-material-ui/Close'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import LanguageDropdown from '../../shared-components/LanguageDropdown'
import ModeToggler from '../../shared-components/ModeToggler'
import NotificationDropdown from '../../shared-components/NotificationDropdown'
import UserDropdown from '../../shared-components/UserDropdown'

interface Props {
  hidden: boolean
  navHover: boolean
  settings: Settings
  collapsedNavWidth: number
  menuLockedIcon?: ReactNode
  menuUnlockedIcon?: ReactNode
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props

  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { skin, direction, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const svgFillSecondary = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.68)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.68)`
    } else {
      return theme.palette.text.secondary
    }
  }
  const svgFillDisabled = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.38)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.38)`
    } else {
      return theme.palette.text.disabled
    }
  }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 8
      }
    } else {
      return 5.5
    }
  }

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0
        } else {
          return 180
        }
      } else {
        if (navHover) {
          return 180
        } else {
          return 0
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180
      } else {
        return 0
      }
    }
  }

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown settings={settings} />
        <UserDropdown settings={settings} />
      </Box>
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
