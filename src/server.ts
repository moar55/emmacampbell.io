// src/server.ts
import app from './app';
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + PORT);
});