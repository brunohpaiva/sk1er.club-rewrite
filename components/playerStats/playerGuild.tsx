import React from "react"
import Typography from "@material-ui/core/Typography"

import { Player } from "../../api/models/Player"

interface PlayerGuildProps {
  player: Player
}

// @ts-ignore
const PlayerGuild = (props: PlayerGuildProps) => (
  <>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Guild
    </Typography>
  </>
)

export default PlayerGuild
