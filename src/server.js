import express from "express"
import { json, urlencoded } from "body-parser"

export const app = express()
export const router = express.Router()

//app.disable("x-powered-by")

//app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
//app.use(morgan("dev"))

router.get("/me", (req, res) => {
    res.send({ me: "hellow" })
})

app.use("/api", router)

const log = (req, res, next) => {
    console.log("logging")
    next()
}

app.get("/data", log, (req, res) => {
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
