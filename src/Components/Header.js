import React, { useState, useEffect } from 'react';
import {
  Grid,
  Button,
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

import DropdownMenu from "./DropdownMenu";
import {
  BUTTON_TITLES,
  PRODUCT_TITLES,
  NEWS_LIST
} from "../Constants/AppConstants";

const styles = (theme) => ({
  menuContainer: {
    height: 40,
    backgroundColor: "#466082",
  },
  toolBarContainer: {
    width: '1170px',
    margin: "auto"
  },
  toolBar: {
    height: 40,
  },
  toolBarDense: {
    minHeight: 40,
  },
  toolBarButton: {
    height: "100%",
    padding: "0 20px",
    borderRadius: 0,
    color: "#FFF",
    fontSize: "14px",
    fontFamily: `"Roboto Condensed", sans-serif`,
    whiteSpace: "nowrap",
    letterSpacing: 0,
    "&:hover": {
      backgroundColor: "#EEE",
      color: "#000",
    }
  },
  listProductContainer: {
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "rgb(0,0,0,0.1)"
    }
  },
  listProductButton: {
    height: 40,
    fontSize: "14px",
    fontFamily: `"Roboto Condensed", sans-serif`,
    color: "#FFF",
    justifyContent: "left",
  },
  menuButton: {
    height: 40,
  },
  productItem: {
    width: 230,
    backgroundColor: "#FFF",
    borderBottom: "solid 1px rgb(221, 221, 221)",
    fontSize: "14px",
    fontFamily: `Tahoma, Arial, sans-serif`,
  },
  productListPadding: {
    paddingTop: 0
  }
});

function Header(props) {
  const { classes } = props;

  //------------------------------------
  // Declare Hook State
  //------------------------------------

  const [anchorEl, setAnchorEl] = useState(null);
  const [mouseStateInListProductButton, setMouseStateInListProductButton] = useState({ isEnter: false, isEnterPopper: false });
  const [mouseStateInListNewButton, setMouseStateInListNewButton] = useState({ isEnter: false, isEnterPopper: false });

  //------------------------------------
  // Declare Local Variables
  //------------------------------------
  const menuItems = [
    { content: PRODUCT_TITLES[0], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[1], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[2], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[3], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[4], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[5], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[7], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[8], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[9], onClick: () => console.log(1) },
    { content: PRODUCT_TITLES[10], onClick: () => console.log(1) },
  ];

  const newItems = [
    { content: NEWS_LIST[0], onClick: () => console.log(1) },
    { content: NEWS_LIST[1], onClick: () => console.log(1) },
    { content: NEWS_LIST[2], onClick: () => console.log(1) },
    { content: NEWS_LIST[3], onClick: () => console.log(1) },
    { content: NEWS_LIST[4], onClick: () => console.log(1) },
    { content: NEWS_LIST[5], onClick: () => console.log(1) },
    { content: NEWS_LIST[6], onClick: () => console.log(1) },
  ];

  useEffect(() => {
    const { isEnter, isEnterPopper } = mouseStateInListProductButton;
    const listProductButtonContainerNode = document.getElementById("list-product-button-container");

    setAnchorEl(isEnter || isEnterPopper ? listProductButtonContainerNode : null);
  }, [mouseStateInListProductButton]);

  useEffect(() => {
    const { isEnter, isEnterPopper } = mouseStateInListNewButton;
    const listNewButtonContainerNode = document.getElementById("list-new-button");

    setAnchorEl(isEnter || isEnterPopper ? listNewButtonContainerNode : null);
  }, [mouseStateInListNewButton]);

  //------------------------------------
  // Declare Local Methods
  //------------------------------------

  const handleShowListProductDropdown = (event, isEnter) => {
    switch (event.currentTarget.id) {
      case "list-product-button-container":
        setMouseStateInListProductButton({ ...mouseStateInListProductButton, isEnter: isEnter });
        break;
      case "list-new-button":
        setMouseStateInListNewButton({ ...mouseStateInListNewButton, isEnter: isEnter });
        break;
      case "list-product-popper":
        setMouseStateInListProductButton({ ...mouseStateInListProductButton, isEnterPopper: isEnter });
        break;
      case "list-new-popper":
        setMouseStateInListNewButton({ ...mouseStateInListNewButton, isEnterPopper: isEnter });
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuContainer} elevation={0}>
        <Container classes={{ maxWidthLg: classes.containerLgOverride }}>
          <Grid item sm={12} xs={12} className={classes.toolBarContainer}>
            <Toolbar variant="dense" className={classes.toolBar} classes={{ dense: classes.toolBarDense }}>
              <Grid
                id="list-product-button-container"
                className={classes.listProductContainer}
                onMouseEnter={(event) => handleShowListProductDropdown(event, true)}
                onMouseLeave={(event) => handleShowListProductDropdown(event, false)}
              >
                <Button className={classes.listProductButton}>
                  <Typography variant="body1">
                    {BUTTON_TITLES.LIST_PRODUCT_BUTTON_TITLE}
                  </Typography>
                </Button>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Button
                color="inherit"
                className={classes.toolBarButton}
              >
                {BUTTON_TITLES.HOME_BUTTON_TITLE}
              </Button>
              <Button
                id="list-new-button"
                color="inherit"
                onMouseEnter={(event) => handleShowListProductDropdown(event, true)}
                onMouseLeave={(event) => handleShowListProductDropdown(event, false)}
                className={classes.toolBarButton}
              >
                {BUTTON_TITLES.NEWS_BUTTON_TITLE}
              </Button>
              <Button color="inherit" className={classes.toolBarButton}>
                {BUTTON_TITLES.MEN_PRODUCT_BUTTON_TITLE}
              </Button>
              <Button color="inherit" className={classes.toolBarButton}>
                {BUTTON_TITLES.WOMEN_PRODUCT_BUTTON_TITLE}
              </Button>
              <Button color="inherit" className={classes.toolBarButton}>
                {BUTTON_TITLES.CHILD_PRODUCT_BUTTON_TITLE}
              </Button>
            </Toolbar>
          </Grid>
        </Container>
      </AppBar>
        <DropdownMenu
          id="list-product-popper"
          isOpen={(Boolean(anchorEl) && anchorEl.id === "list-product-button-container")}
          anchorEl={(anchorEl && anchorEl.id === "list-product-button-container") ? anchorEl : null}
          placement="bottom-start"
          onMouseLeave={(event) => handleShowListProductDropdown(event, false)}
          menuList={menuItems}
        />
        <DropdownMenu
          id="list-new-popper"
          isOpen={(Boolean(anchorEl) && anchorEl.id === "list-new-button")}
          anchorEl={(anchorEl && anchorEl.id === "list-new-button") ? anchorEl : null}
          placement="bottom-start"
          onMouseLeave={(event) => handleShowListProductDropdown(event, false)}
          menuList={newItems}
        />
    </div>
  );
}

export default withStyles(styles)(Header);