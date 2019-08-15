import React from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"

import { getExactLevel } from "../../utils/hypixelLeveling"
import { Player } from "../../api/models/Player"
import Stat from "./stat"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  nickname: {
    margin: theme.spacing(1, 0, 1, 0),
    display: "flex",
  },
  headSkin: {
    marginRight: theme.spacing(1),
    width: "32px",
    height: "32px",
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

interface OverviewProps {
  player: Player
}

function Overview(props: OverviewProps) {
  const classes = useStyles(props)
  const { player } = props

  const str = (val: number | Date | undefined, defaultValue: string = "") =>
    val ? val.toLocaleString() : defaultValue
  const networkLevelStr = str(getExactLevel(player.networkExp), "0")
  const firstLoginStr = str(new Date(player.firstLogin))
  const lastLoginStr = str(new Date(player.lastLogin))

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Overview
      </Typography>
      <Typography
        component="h4"
        variant="h6"
        color="secondary"
        gutterBottom
        className={classes.nickname}
      >
        <img
          src={`https://visage.surgeplay.com/face/32/${player.uuid}`}
          className={classes.headSkin}
        />
        {player.display}
      </Typography>
      <Divider className={classes.marginBottom} />
      <Stat title="Network Level:" value={networkLevelStr} />
      <Stat title="Karma:" value={str(player.karma)} />
      <Stat title="Friends:" value={str(player.friends)} />
      <Stat
        title="Achievement Points:"
        value={str(player.achievementPoints, "0")}
      />
      <Stat title="Quests Completed:" value="504" />
      <Stat title="Total Current Coins:" value={str(player.coins, "0")} />
      <Stat title="Total Kills:" value={str(player.kills, "0")} />
      <Stat title="Total Wins:" value={str(player.wins, "0")} />
      <Stat title="First Login:" value={firstLoginStr} />
      <Stat title="Latest Login:" value={lastLoginStr} />
      <Stat title="Online Status:" value="Offline" />
    </>
  )
}

export default Overview
