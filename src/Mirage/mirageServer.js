import { createServer } from "miragejs"
import Data from '../data/data.json'

createServer({
  routes() {
    this.namespace = "api"
    this.get("/hotelData", () => {
      return Data
    })
  },
})