import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

import { GetPlayerResponse } from "../../api"
import PlayerGuild from "./playerGuild"
import Overview from "./overview"
import GeneralPanel from "./panels/generalPanel"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    "&:not(:first-child)": {
      marginTop: theme.spacing(2),
    },
  },
}))

interface PlayerStatsProps {
  player: string
  stats: GetPlayerResponse
}

function PlayerStats(props: PlayerStatsProps) {
  const classes = useStyles(props)
  const player = props.stats.player

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={classes.paper}>
          <Overview player={player} />
        </Paper>
        <Paper className={classes.paper}>
          <PlayerGuild player={player} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <GeneralPanel player={player} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PlayerStats
