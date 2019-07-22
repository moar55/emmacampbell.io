import app from "./app";
import "dotenv/config";

const {
    HOST,
    PORT
} = process.env;

const server = app.listen(PORT, () => {
    console.log("Server now listening on http://" + HOST + ":" + PORT);
    console.log("   PRESS CTRL-C TO STOP");
});

export default server;
