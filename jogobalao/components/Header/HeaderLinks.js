/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* 
        -----------------------
        -- Exemplo de dropdown com items
        -----------------------

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="Components"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link href="/components">
                <a className={classes.dropdownLink}>All components</a>
              </Link>,
              <a
                href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                target="_blank"
                className={classes.dropdownLink}
              >
                Documentation
              </a>,
            ]}
          />
        </ListItem> 
      */}
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.google.com/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <SlowMotionVideoIcon className={classes.icons} /> Jogar agora
        </Button>
      </ListItem>

      
      {/* 
      -----------------------
        -- Exemplo de item com tooltip, aparece o tooltip ao fazer o hover
        -----------------------
      
      <ListItem className={classes.listItem}>
      
      
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      
    </List>
  );
}
