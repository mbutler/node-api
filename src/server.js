import express from "express"

export const app = express()

//app.disable("x-powered-by")

//app.use(cors())
//app.use(json())
//app.use(urlencoded({ extended: true }))
//app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send({ message: "hey there" })
})

app.post("/", (req, res) => {
    console.log(req.body)
    req.send({ message: "ok" })
})

export const start = () => {
    app.listen(3003, () => {
        console.log("listening on port 3003!")
    })
}
