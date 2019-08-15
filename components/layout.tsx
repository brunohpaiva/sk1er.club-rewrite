import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import Container from "@material-ui/core/Container"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import HomeIcon from "@material-ui/icons/Home"
import DashboardIcon from "@material-ui/icons/Dashboard"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import ScoreIcon from "@material-ui/icons/Score"
import ShowChartIcon from "@material-ui/icons/ShowChart"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import ContactMailIcon from "@material-ui/icons/ContactMail"

import { DrawerListItem } from "./drawerListItem"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    maxHeight: "100vh",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  drawerToolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
}))

function Layout(props: React.PropsWithChildren<{}>) {
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Home
          </Typography>
          <IconButton color="inherit">
            <img
              src="https://visage.surgeplay.com/face/32/7246b3fa2c4b40329562000fe7408312"
              width="24"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.drawerToolbar}>
          {"SK1ER.CLUB"}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component="nav" dense>
          <DrawerListItem primary="Home" icon={HomeIcon} href="/" />
          <DrawerListItem
            primary="User"
            icon={AccountCircleIcon}
            href="/user"
          />
          <DrawerListItem primary="Hypixel" icon={DashboardIcon}>
            <DrawerListItem
              primary="Player Stats"
              href="/hypixel/playerStats"
            />
            <DrawerListItem primary="Ranking" href="/hypixel/ranking" />
            <DrawerListItem primary="Comparator" href="/hypixel/comparator" />
            <DrawerListItem
              primary="XP and Quests"
              href="/hypixel/xpAndQuests"
            />
            <DrawerListItem primary="Friends" href="/hypixel/friends" />
            <DrawerListItem
              primary="Online Status"
              href="/hypixel/onlineStatus"
            />
            <DrawerListItem
              primary="Name History"
              href="/hypixel/nameHistory"
            />
            <DrawerListItem primary="Guild Stats" href="/hypixel/guildStats" />
            <DrawerListItem
              primary="Leaderboards"
              href="/hypixel/leaderboards"
            />
            <DrawerListItem primary="Boosters" href="/hypixel/boosters" />
          </DrawerListItem>
          <DrawerListItem
            primary="Premium Mods"
            icon={AttachMoneyIcon}
            href="/"
          >
            <DrawerListItem primary="View Premium Mods" href="/" />
            <DrawerListItem primary="License" href="/" />
            <DrawerListItem primary="Commission Us" href="/" />
          </DrawerListItem>
          <DrawerListItem primary="Frames+" icon={ScoreIcon} href="/" />
          <DrawerListItem
            primary="Custom Levelhead"
            icon={DashboardIcon}
            href="/"
          />
          <DrawerListItem primary="Hyperium" icon={DashboardIcon} href="/">
            <DrawerListItem primary="Cosmetics" href="/" />
            <DrawerListItem primary="Capes" href="/" />
          </DrawerListItem>
          <DrawerListItem primary="Analytics" icon={ShowChartIcon} href="/" />
        </List>
        <Divider />
        <List>
          <DrawerListItem
            primary="Support"
            icon={ContactSupportIcon}
            href="/"
          />
          <DrawerListItem primary="About" icon={ContactMailIcon} href="/" />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  )
}

export default Layout
