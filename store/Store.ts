import User from "./user"

interface StoreOptions {
  initialState?: any
  isServer: boolean
}

class Store {
  public initialState?: any
  public isServer: boolean
  public currentUser?: User

  public constructor({ initialState, isServer }: StoreOptions) {
    this.initialState = initialState
    this.isServer = isServer
  }
}

export default Store
