import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { OptionsMenuButtonProps } from '../../typings/interfaces';

const OptionsMenuButton = ({handleClick, disabled}: OptionsMenuButtonProps)=> {
  return(
    <div data-testid="column-options-drop-down">
      <IconButton disabled={disabled} disableRipple data-testid="options-menu-button" onClick={handleClick} edge="end">
        <MoreVertIcon fontSize="large" sx={{color: '#828FA3'}}/>
      </IconButton>
    </div>
  )
}

export default OptionsMenuButton