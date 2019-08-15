import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Stat from "../stat"
import Panel from "./panel"
import { Player } from "../../../api/models/Player"
import { getGameDisplayName } from "../../../utils/hypixelGames"

const useStyles = makeStyles(theme => ({
  innerPanel: {
    marginTop: theme.spacing(1),
  },
}))

interface GeneralPanelProps {
  player: Player
}

function GeneralPanel(props: GeneralPanelProps) {
  const classes = useStyles(props)
  const { player } = props

  console.log(props)

  const str = (val: number | Date | undefined, defaultValue: string = "") =>
    val ? val.toLocaleString() : defaultValue

  const realBundlesGiven = player.giftingMeta
    ? player.giftingMeta.realBundlesGiven
    : 0
  const realBundlesReceived = player.giftingMeta
    ? player.giftingMeta.realBundlesReceived
    : 0

  return (
    <Panel title="General">
      <Stat title="Gifts given:" value={str(realBundlesGiven, "0")} />
      <Stat title="Gifts received:" value={str(realBundlesReceived, "0")} />
      <Stat title="Quests completed:" value={str(player.questNumber, "0")} />
      <Stat
        title="Most recent played:"
        value={getGameDisplayName(player.mostRecentGameType)}
      />
      <Stat title="Rewards claimed:" value={str(player.totalRewards, "0")} />
      <Stat
        title="Daily rewards claimed:"
        value={str(player.totalDailyRewards, "0")}
      />
      <Stat
        title="Best reward streak:"
        value={str(player.rewardHighScore, "0")}
      />
      <Stat
        title="Current reward streak:"
        value={str(player.rewardStreak, "0")}
      />
      <Stat title="Times voted:" value={str(player.voting.total, "0")} />
      <Panel title="Pets" expansionPanelClasses={classes.innerPanel}>
        pets.
      </Panel>
    </Panel>
  )
}

export default GeneralPanel
