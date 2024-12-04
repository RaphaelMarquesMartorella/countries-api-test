import express, { Express } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger-docs';
import countriesRouter from './routes/countries';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/countries', countriesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
