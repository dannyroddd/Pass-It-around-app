const express = require('express')
const app = express()
const port = 3000

let number = 99
let link = `<html><body><a href= "/98">take one down, pass it around</a></body></html>`

app.get('/', (req, res)=>{
   res.send(`${number} bottles of beer on the wall, ` + ' ' + `${link}`)
})

app.get('/:number', (req, res) =>{
        let bottles = req.params.number
        let newBottles = `${bottles} bottles of beer on the wall, ` 
        if(bottles > 0 ){
            newBottles += `<a href= "/${bottles-=1}">take one down, pass it around</a>`
        } else {
            newBottles += `<a href= "/">Back to 99 Bottles?</a>`
        }
        
        res.send(newBottles)
})
     

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})