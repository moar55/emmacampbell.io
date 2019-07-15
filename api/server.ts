import app from "./app";
import 'dotenv/config';

const {
    DB_HOST,
    DB_PORT,
    HOST,
    PORT
} = process.env;

app.listen(PORT, () => {
    console.log("Server access: http://" + HOST + ":" + PORT);
});
