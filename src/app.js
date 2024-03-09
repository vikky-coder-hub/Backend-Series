import { Express } from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20k"}))
app.use(express.static("Public"))
app.use(cookieParser())




export {app}