const app = require('./app.js')
const db = require('./db')

const PORT = process.env.PORT || 3000

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))