import "dotenv/config"
import express from "express";
import { router } from "./services/routes";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors())

const serverHttp = http.createServer(app);
app.use(express.json());
const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

app.use(router)

app.get("/github", (request, response) => {
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/singin/callback", (request, response) => {
    const { code } = request.query;
    return response.json(code);
})

export { serverHttp, io };