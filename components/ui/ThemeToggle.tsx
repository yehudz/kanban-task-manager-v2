import styles from '../../styles/ui/ThemeToggle.module.scss'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import useTheme from '../../components/hooks/useTheme'
import {AppContext} from '../../context/AppContext';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '3px 0px 0px 7px',
    transitionDuration: '300ms',
    transform: 'translateX(-4px)',
    color: '#fff',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(16px)',
      '& + .MuiSwitch-track': {
        color: '#fff',
        backgroundColor: '#635FC7',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 14,
    height: 14,
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#635FC7',
    opacity: 1,
  },
}));

const ThemeToggle = ()=> {
  const {theme} = React.useContext(AppContext)
  const [colorScheme, setTheme] = useTheme()
  const [checked, setChecked] = React.useState<boolean>()
  React.useEffect(()=> {
    if (theme === 'dark' || localStorage.kanbanTheme === 'dark') setChecked(true)
    if (theme === 'light') setChecked(false)
  }, [theme])

  function handleToggleTheme() {
    setTheme(colorScheme)
  }

  return(
    <>
      {checked !== undefined && <div data-testid="theme-toggle-container" className={`${styles.container} flex flex-row items-center justify-center bg-grey-100 dark:bg-midnight rounded-lg`}>
        <img src="images/icon-light-theme.svg" className='mr-6'/>
        <IOSSwitch onChange={handleToggleTheme} defaultChecked={checked} disableRipple data-testid="toggle-theme-button"/>
        <img src="images/icon-dark-theme.svg" className='ml-8'/>
      </div>}
    </>
  )
}

export default ThemeToggle