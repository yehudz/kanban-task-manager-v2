// React component imports
import * as React from 'react';
import OptionsMenuButton from "../ui/OptionsMenuButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Typings imports
import { OptionMenuProps } from "../../typings/interfaces";

const OptionsMenu = ({menuItems}: OptionMenuProps)=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div data-testid="options-menu-container">
      <OptionsMenuButton data-testid="options-menu-button" handleClick={handleClick}/>
      <Menu
        id="basic-menu"
        data-testid="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map(item=> {
          return(
            <MenuItem onClick={handleClose} data-testid="options-menu-option">{}</MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

export default OptionsMenu