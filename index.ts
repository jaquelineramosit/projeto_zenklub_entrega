import * as dotenv from 'dotenv';
dotenv.config();
import app from './src/app';

const port = process.env.PORT || 8080;
app.listen(port, () => console.info(`Server on port: ${port}`));

export default app;
