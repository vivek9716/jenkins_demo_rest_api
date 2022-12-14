import app from "./config/app";
import dotenv from 'dotenv';
dotenv.config();

const PORT: any = process.env.PORT;
const HOST = 'api.vivek.com';

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});