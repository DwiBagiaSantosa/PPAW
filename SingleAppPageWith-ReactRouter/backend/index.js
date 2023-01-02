import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MatkulRoute from "./routes/MatkulRoute.js";
import MateriRoute from "./routes/MateriRoute.js";
import JadwalDosenRoute from "./routes/JadwalDosenRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: "process.env.SESS_SECRET",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(MatkulRoute);
app.use(MateriRoute);
app.use(JadwalDosenRoute);
// store.sync();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running on port '+process.env.APP_PORT);
});
