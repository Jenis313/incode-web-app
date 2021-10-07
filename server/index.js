const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/api/auth.routes')
const usersRouter = require('./routes/api/users.routes')
const cohortRouter = require('./routes/api/cohort.routes')
const emailRouter = require('./routes/api/email.routes')

const app = express()
const PORT = process.env.PORT || 5000

// Database
require('./db-init')

// Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route middleware
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/cohort/:id', cohortRouter)
app.use('/api/email', emailRouter)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
