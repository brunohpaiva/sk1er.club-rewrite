import React from "react"
import { withRouter, SingletonRouter } from "next/router"
import { NextPageContext } from "next"

import Layout from "../../components/layout"
import PlayerStats from "../../components/playerStats"
import NicknameForm from "../../components/nicknameForm"
import { getPlayer, GetPlayerResponse } from "../../api"

type PlayerStatsPageQuery = Record<"player", string>

interface PlayerStatsPageProps {
  stats?: GetPlayerResponse
  error?: Error
}

type PlayerStatsPagePropsWithRouter = {
  router: SingletonRouter
} & PlayerStatsPageQuery &
  PlayerStatsPageProps

class PlayerStatsPage extends React.Component<PlayerStatsPagePropsWithRouter> {
  public static async getInitialProps(context: NextPageContext) {
    const player = context.query.player as string
    const props: PlayerStatsPageProps = {}

    console.log(context.res)

    if (typeof player !== "undefined") {
      try {
        props.stats = await getPlayer(player)
      } catch (e) {
        console.log("erro", e)
        props.error = e
      }
    }

    return props
  }

  onSubmitForm = (player: string) => {
    this.props.router.push(
      `/hypixel/playerStats?player=${player}`,
      `/hypixel/playerStats/${player}`
    )
  }

  public render() {
    const { router, stats, error } = this.props
    const isPlayerSet = typeof router.query.player !== "undefined"

    console.log("abc", error)

    let content = null
    if (!isPlayerSet) {
      content = <NicknameForm onSubmit={this.onSubmitForm} />
    } else if (!stats || error) {
      content = "error getting stats " + (error ? error.message : "")
    } else {
      content = (
        <PlayerStats player={router.query.player as string} stats={stats} />
      )
    }

    return <Layout>{content}</Layout>
  }
}

export default withRouter(PlayerStatsPage)
