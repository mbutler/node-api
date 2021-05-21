import express from "express"
import { json, urlencoded } from "body-parser"

export const app = express()

//app.disable("x-powered-by")

//app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
//app.use(morgan("dev"))

app.get("/data", (req, res) => {
    res.send({ message: "hey poopy" })
})

app.post("/data", (req, res) => {
    res.send(req.body)
})

export const start = () => {
    app.listen(3003, () => {
        console.log("listening on port 3003!")
    })
}
