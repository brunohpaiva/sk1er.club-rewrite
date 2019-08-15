export const NODE_ENV = process.env.NODE_ENV || "development"
export const IS_DEV = NODE_ENV !== "production"

export const PORT_APP = +process.env.PORT || 3000
export const PORT_API = +process.env.API_PORT || +process.env.PORT_API || 8000
