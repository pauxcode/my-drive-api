import express from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import path from 'path'

export const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
