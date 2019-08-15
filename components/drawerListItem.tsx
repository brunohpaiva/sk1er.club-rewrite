import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Collapse from "@material-ui/core/Collapse"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import { withRouter, SingletonRouter } from "next/router"

const styles = theme =>
  createStyles({
    nestedItem: {
      paddingLeft: theme.spacing(4),
    },
  })

type DrawerListItemUnwrappedProps = React.PropsWithChildren<{
  router: SingletonRouter
  icon?: React.ReactElement | React.ComponentType
  href?: string
  as?: string
  primary: string
  secondary?: string
}>

type DrawerListItemUnwrappedStylizedProps = DrawerListItemUnwrappedProps &
  WithStyles<typeof styles>

interface DrawerListItemUnwrappedState {
  open: boolean
}

class DrawerListItemUnwrapped extends React.Component<
  DrawerListItemUnwrappedStylizedProps,
  DrawerListItemUnwrappedState
> {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()

    if (!this.props.children) {
      this.props.router.push(this.props.href, this.props.as)
    } else {
      this.setState({
        open: !this.state.open,
      })
    }
  }

  render() {
    const {
      children,
      icon: Icon,
      href,
      as,
      primary,
      secondary,
      router,
      classes,
      ...restProps
    } = this.props
    const { open } = this.state

    const iconComponent = Icon ? (
      React.isValidElement(Icon) ? (
        Icon
      ) : (
        <Icon />
      )
    ) : (
      undefined
    )

    const expandIconComponent = children ? (
      open ? (
        <ExpandLessIcon />
      ) : (
        <ExpandMoreIcon />
      )
    ) : (
      undefined
    )

    const routedChildren = React.Children.map(children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child, { router, className: classes.nestedItem })
        : child
    )

    return (
      <div>
        <ListItem
          button
          component={!children ? "a" : undefined}
          href={!children ? as || href : undefined}
          onClick={this.onClick}
          {...restProps}
        >
          {iconComponent && <ListItemIcon>{iconComponent}</ListItemIcon>}
          <ListItemText primary={primary} secondary={secondary} />
          {expandIconComponent}
        </ListItem>

        {children && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense>
              {routedChildren}
            </List>
          </Collapse>
        )}
      </div>
    )
  }
}

const DrawerListItemUnwrappedStylized = withStyles(styles)(
  DrawerListItemUnwrapped
)
// export const DrawerListItemChild = DrawerListItemUnwrappedStylized
export const DrawerListItem = withRouter<DrawerListItemUnwrappedProps>(
  DrawerListItemUnwrappedStylized
)
