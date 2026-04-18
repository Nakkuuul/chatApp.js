import app from "./src/app.js";
import connectDB from './src/config/db.js';

connectDB();

app.listen(8080, (req, res) => {
    console.log('Server is up and running at port', 8080);
});
