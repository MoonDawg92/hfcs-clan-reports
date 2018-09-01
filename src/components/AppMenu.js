import React, { Component } from "react"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Fade from "@material-ui/core/Fade"
import Icon from "@material-ui/core/Icon"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import background from "../images/background.jpg"

const drawerWidth = 240

const styles = ({ mixins, spacing, palette }) => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  toolbar: mixins.toolbar,
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  resourcesLabel: {
    marginLeft: spacing.unit,
    marginBottom: spacing.unit * 3
  },
  resourcesContainer: {
    marginLeft: spacing.unit,

    "& > a": {
      display: "block",
      color: palette.common.white,
      textDecoration: "none",
      marginBottom: spacing.unit
    }
  },
  flex: {
    flex: 1
  }
})

class AppMenu extends Component {
  state = {
    renderImage: false
  }

  renderImage = () => this.setState({ renderImage: true })

  render() {
    const { renderImage } = this.state
    const { classes, user } = this.props
    const resources = user ? { __html: user.resources } : null

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <Link className={classes.link} to="/search">
            <ListItem button>
              <ListItemIcon>
                <Icon>search</Icon>
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/new">
            <ListItem button>
              <ListItemIcon>
                <Icon>create</Icon>
              </ListItemIcon>
              <ListItemText primary="New Report" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List />
        <div className={classes.container}>
          {user && (
            <Typography variant="headline" className={classes.resourcesLabel}>
              Resources
            </Typography>
          )}
          <div
            className={classes.resourcesContainer}
            dangerouslySetInnerHTML={resources}
          />

          <span className={classes.flex} />

          <Fade in={renderImage} timeout={{ enter: 2000 }}>
            <img src={background} onLoad={this.renderImage} alt="ninja" />
          </Fade>
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(AppMenu)
