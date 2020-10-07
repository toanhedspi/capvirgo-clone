import React from 'react';
import {
  MenuItem,
  MenuList,
  Popper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  menuList: {
    paddingTop: 0
  },
  menuItem: {
    width: 230,
    backgroundColor: "#FFF",
    borderBottom: "solid 1px rgb(221, 221, 221)",
    fontSize: "14px",
    fontFamily: `Tahoma, Arial, sans-serif`,
  },
});

function DropdownMenu(props) {
  const { 
    classes,
    id,
    isOpen,
    anchorEl,
    placement,
    onMouseLeave,
    menuList
  } = props;
  return (
    <Popper
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      placement={placement}
      onMouseLeave={onMouseLeave}
    >
      <MenuList classes={{ padding: classes.menuList }}>
        {menuList.map((item, i) => (
          <MenuItem
            key={`product-key-${i}`}
            onClick={(event) => console.log("1")}
            className={classes.menuItem}
          >
            {item.content}
          </MenuItem>
        ))}
      </MenuList>
    </Popper>)
}

export default withStyles(styles)(DropdownMenu);