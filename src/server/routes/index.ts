import {  Router} from 'express';
import { StatusCodes } from 'http-status-codes';
const router  = Router();

import { CidadeController } from '../controllers/';



router.get('/', (req, res) => {
  return res.send('Teste');
});

router.post('/cidades', CidadeController.create);


export {router};
