import express from "express"
import helmet from "helmet"
import mobxReact from "mobx-react"
import next from "next"

import { IS_DEV, PORT_APP } from "../utils/constants"

mobxReact.useStaticRendering(true)

const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get(["/_next/*", "/static/*"], (req, res) => {
    handle(req, res)
  })

  server.use(helmet())
  server.use(express.json())

  server.get("/hypixel/playerStats/:player", (req, res) => {
    app.render(req, res, "/hypixel/playerStats", { player: req.params.player })
  })

  server.get("*", (req, res): void => {
    handle(req, res)
  })

  server.listen(PORT_APP, (err): void => {
    if (err) {
      throw err
    }

    console.log(`> Ready on port ${PORT_APP}`)
  })
})
