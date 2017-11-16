const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Install the Slack App to start dealing cards!')
})

app.post('/deal', (req, res) => {
  const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A']
  const suits = ['C', 'D', 'H', 'S']

  const cardNumber = cardNumbers[Math.floor(Math.random()*cardNumbers.length)]
  const suit = suits[Math.floor(Math.random()*suits.length)]

  const host = req.protocol + '://' + req.hostname
  
  res.json({
    "text": "Is THIS your card?",
    "attachments": [{"image_url": `${host}/images/${cardNumber}${suit}.jpg`}]
  })
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})
