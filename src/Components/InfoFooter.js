import React from 'react';
import {
  Grid,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { withStyles } from "@material-ui/core/styles";

import {
  BUTTON_TITLES,
  PRODUCT_TITLES,
  NEWS_LIST
} from "../Constants/AppConstants";
import FooterList from "./FooterList";

const styles = (theme) => ({
  infoFooterContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  infoFooterGridItem1Title: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 10px 10px",
    lineHeight: "25px",
    textAlign: "left"
  },
  infoFooterListItem: {
    color: "#acacac",
    padding: 0
  },
  infoFooterListItemInline: {
    display: "inline",
    padding: 0,
    marginRight: "15px",
    color: "#acacac",
  },
  infoFooterListItemIcon: {
    color: "#acacac"
  },
  infoFooterListItemAnchor: {
    color: "#acacac",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  infoFooterGridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px"
  },
  infoFooterCopyRightAuth: {
    marginLeft: "10px"
  },
  infoFooterMediaGroup: {
    marginLeft: "10px"
  },
  infoFooterFacebookPagePlugin: {
    border: "none",
    overflow: "hidden"
  },
  // Override classes
  containerLgOverride: {
    maxWidth: "1170px"
  },
  listPadding: {
    paddingLeft: 0
  },
  listItemGutters: {
    paddingLeft: 0
  },
  listItemIconRoot: {
    minWidth: "25px"
  }
})

function InfoFooter(props) {
  const { classes } = props;

  return (
    <Container className={classes.infoFooterContainer} classes={{ maxWidthLg: classes.containerLgOverride }}>
      <Grid container>
        <Grid item sm={3} xs={3}>
          <div className={classes.infoFooterGridItem}>
            <FooterList
              title="LIÊN HỆ CAPVIRGO"
              list={[
                { content: "Hệ thống phân phối", href: "#" },
                { content: "Hotline: 0981.7065.88", href: "#" },
                { content: "Email: capvirgo2h@gmail.com", href: "#" },
                { content: "Kênh sỉ: 0961.706.588", href: "#" }
              ]}
            />
          </div>
          <div className={classes.infoFooterGridItem}>
            <Typography
              variant="h6"
              className={classes.infoFooterGridItem1Title}
            >
              CHỨNG THỰC BẢN QUYỀN
            </Typography>
            <a
              href="https://www.dmca.com/Protection/Status.aspx?ID=7e2563f4-f3d4-4bc9-a0cf-fb48d35d7ef4&amp;refurl=https://capvirgo.com/"
              title="DMCA.com Protection Status"
              className={classes.infoFooterCopyRightAuth}
            >
              <img src="//images.dmca.com/Badges/dmca_protected_sml_120aj.png?ID=7e2563f4-f3d4-4bc9-a0cf-fb48d35d7ef4" alt="DMCA.com Protection Status" class="lazyloaded" data-ll-status="loaded" />
              <noscript>
                <img
                  src="//images.dmca.com/Badges/dmca_protected_sml_120aj.png?ID=7e2563f4-f3d4-4bc9-a0cf-fb48d35d7ef4"
                  alt="DMCA.com Protection Status"
                />
              </noscript>
            </a>
          </div>
          <div className={classes.infoFooterGridItem}>
            <FooterList
              title="THƯƠNG HIỆU GIÀY"
              list={[
                { content: "Nike", href: "#" },
                { content: "Adidas", href: "#" },
                { content: "Balenciaga", href: "#" },
                { content: "Puma", href: "#" },
                { content: "Vans", href: "#" },
                { content: "Converse", href: "#" },
                { content: "New Balance", href: "#" },
                { content: "Gucci", href: "#" },
              ]}
            />
          </div>
        </Grid>
        <Grid item sm={3} xs={3}>
          <div className={classes.infoFooterGridItem}>
            <FooterList
              title="TRỢ GIÚP"
              list={[
                { content: "Giới thiệu", href: "#" },
                { content: "Chính sách bảo mật", href: "#" },
                { content: "Hỗ trợ khách hàng", href: "#" },
                { content: "Hình thức thanh toán", href: "#" },
                { content: "Hình thức vận chuyển", href: "#" },
                { content: "Tin tức", href: "#" },
                { content: "Liên hệ", href: "#" },
              ]}
            />
          </div>
          <div className={classes.infoFooterGridItem}>
            <Typography
              variant="h6"
              className={classes.infoFooterGridItem1Title}
            >
              THEO DÕI CAPVIRGO.COM
            </Typography>
            <List dense={true} className={classes.infoFooterMediaGroup} classes={{ padding: classes.listPadding }}>
              {[
                (<FacebookIcon />),
                (<YouTubeIcon />),
                (<InstagramIcon />)
              ].map(item => (
                <ListItem
                  disableGutters={true}
                  className={classes.infoFooterListItemInline}
                >
                  <ListItemIcon classes={{ root: classes.listItemIconRoot }} className={classes.infoFooterListItemIcon}>
                    {item}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid item sm={3} xs={3}>
          <div className={classes.infoFooterGridItem}>
            <Typography
              variant="h6"
              className={classes.infoFooterGridItem1Title}
            >
              TRÙM GIÀY THỂ THAO CAPVIRGO
            </Typography>
            <iframe
              title="Capvirgo Facebook Page"
              src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=1949439421788709&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df23662593e8849%26domain%3Dcapvirgo.com%26origin%3Dhttps%253A%252F%252Fcapvirgo.com%252Ff10343e46a64ff%26relation%3Dparent.parent&amp;container_width=263&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcapvirgo1%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" width="100%"
              height="196"
              className={classes.infoFooterFacebookPagePlugin}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media">
            </iframe>
          </div>
        </Grid>
        <Grid item sm={3} xs={3}>
          <FooterList
            title="GIÀY TÌM NHIỀU NHẤT"
            list={[
              { content: "Giày Adidas Nữ", href: "#" },
              { content: "Giày Adidas Nam", href: "#" },
              { content: "Giày Adidas trẻ em", href: "#" },
              { content: "Giày thể thao nữ", href: "#" },
              { content: "Giày thể thao nam", href: "#" },
              { content: "Giày thể thao trẻ em", href: "#" },
              { content: "Giày nike nữ", href: "#" },
              { content: "Giày nike nam", href: "#" },
              { content: "Giày Gucci nam", href: "#" },
              { content: "Giày Gucci nữ", href: "#" },
              { content: "Giày nike trẻ em", href: "#" },      
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withStyles(styles)(InfoFooter);