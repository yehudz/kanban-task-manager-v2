import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { OptionsMenuButtonProps } from '../../typings/interfaces';

const OptionsMenuButton = ({handleClick}: OptionsMenuButtonProps)=> {
  return(
    <div data-testid="column-options-drop-down">
      <IconButton disableRipple data-testid="options-menu-button" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}

export default OptionsMenuButton