import React from "react"
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    flexFlow: "column",
  },
  root: {
    "&:before": {
      height: 0,
      display: "none",
    },
  },
}))

interface PanelProps {
  title: string
  expansionPanelClasses?: string
}

function Panel(props: React.PropsWithChildren<PanelProps>) {
  const classes = useStyles(props)

  return (
    <ExpansionPanel className={clsx(classes.root, props.expansionPanelClasses)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{props.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.body}>
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Panel
