import React from "react"
import { getStore, Store, initStore } from "../store"
import { AppContext } from "next/app"

function withStore(TargetComponent) {
  class ComponentWithStore extends React.Component {
    public static async getInitialProps(componentContext: AppContext) {
      let componentProps = {}

      if (typeof TargetComponent.getInitialProps === "function") {
        componentProps = await TargetComponent.getInitialProps.call(
          TargetComponent,
          componentContext
        )
      }

      if (getStore()) {
        return componentProps
      }

      return {
        ...componentProps,
        initialState: {},
      }
    }

    private store: Store

    public constructor(props) {
      super(props)

      this.store = initStore(props.initialState)
    }

    public render() {
      return <TargetComponent {...this.props} store={this.store} />
    }
  }

  return ComponentWithStore
}

export default withStore
