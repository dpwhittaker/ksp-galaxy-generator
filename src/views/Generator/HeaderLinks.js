/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { CloudDownload, Visibility, VisibilityOff } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
            id="spoiler-tooltip"
            title="Show Editors"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            onClick={e => props.setShowEditors(!props.showEditors)}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {props.showEditors ?
              <span><VisibilityOff className={classes.icons} /> Hide Editors (Spoiler Alert!)</span>
            :
              <span><Visibility className={classes.icons} /> Show Editors (Spoiler Alert!)</span>
            }
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
            id="download-tooltip"
            title="Download Kopernicus pack"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            href="#"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Download
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Contribute on Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/dpwhittaker/ksp-galaxy-generator"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
