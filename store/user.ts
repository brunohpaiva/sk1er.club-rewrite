class User {
  public uuid: string
  public nickname: string
  public theme: "light" | "dark" = "light"

  constructor(params: { uuid: string; nickname: string }) {
    this.uuid = params.uuid
    this.nickname = params.nickname
  }
}

export default User
