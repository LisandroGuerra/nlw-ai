import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get_all_prompts"

const app = fastify()


app.register(getAllPromptsRoute)




app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server running...")
})