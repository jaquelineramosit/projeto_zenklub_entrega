import express from 'express';
import helmet from 'helmet';
import {errorHandler, notFound, rateLimit} from  './middlewares';
import routes from './routes';


const app = express();

app.use(express.json())
    .use(helmet())
	.use(rateLimit)
	.use('/api', routes)
	.use(errorHandler)
	.all('*', notFound);

export default app;


// app.get('/test', (req, res) => {
//     console.log('dadadada');
//     return res.send('Olá dakjdalk!')
// })
