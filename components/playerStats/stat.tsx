import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 500,
  },
}))

interface StatProps {
  title: string
  value: string
}

function Stat(props: StatProps) {
  const classes = useStyles(props)
  return (
    <Typography variant="body2">
      <span className={classes.root}>{props.title}</span> {props.value}
    </Typography>
  )
}

export default Stat
