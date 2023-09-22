const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
  '21 savage': { 
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation':'London, England'
  },
  'chance the rapper': { 
    'age':29,
    'birthName':'Chancelor',
    'birthLocation':'Chicago, Illinois'
  },
  'dylan': { 
    'age':29,
    'birthName':'Dylan',
    'birthLocation':'Dylan'
  }

}


//below are the node express request

app.get('/',(request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get(`/api/:rapperName`, (request, response) =>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){ //bracket notation handles spaces. dot notation doesnt
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
    // response.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`);
})



/**
 * heroku login -i
 * heroku create simple-rap-api
 * echo "web: node server.js"> Procfile
 * git add .
 * git commit -m "changes"
 * git push heroku main
 */