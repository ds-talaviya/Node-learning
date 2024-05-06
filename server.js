const express = require("express")
const path = require("path")
const app = express()

// can add middleware by app.use
// app.use()

app.get('/', (req, res) => {
    // res.send("Express Home page")

    // if you want to send response as a file(here HTML).
    res.sendFile(path.join(__dirname, 'target.html'))

    // for send json object as a response
    res.json({
        name: "Dhruvil",
        age: 23,
        student: false
    })

    // set status 500 (for see status open console and select all type in networks , and refresh page and you can see details of api)
    res.status(500)
})

app.listen(5000, () => {
    console.log(">> server start over 5000")
})