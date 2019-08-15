import Store from "./Store"
import { IS_DEV } from "../utils/constants"

let store: Store

function initStore(initialState = {}) {
  const isServer = typeof window === "undefined"

  if (isServer) {
    return new Store({ initialState, isServer: true })
  } else {
    const win: any = window

    if (!store) {
      if (IS_DEV) {
        if (!win.__INITIAL_STATE__) {
          win.__INITIAL_STATE__ = initialState
        } else if (Object.keys(initialState).length === 0) {
          initialState = win.__INITIAL_STATE__
        }
      }

      store = new Store({ initialState, isServer: false })

      if (IS_DEV) {
        win.__STORE__ = store
      }
    }

    return store || win.__STORE__
  }
}

function getStore(): Store {
  return (typeof window !== "undefined" && (window as any).__STORE__) || store
}

export { Store, initStore, getStore }
