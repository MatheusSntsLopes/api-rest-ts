import {  Router} from 'express';
import { StatusCodes } from 'http-status-codes';
const router  = Router();

import { CidadeController } from '../controllers/';



router.get('/', (req, res) => {
  return res.send('Teste');
});


router.get('/cidades', CidadeController.getAllValidation, CidadeController.getAll);
router.get('/cidades/:id', CidadeController.getByIdValidation, CidadeController.getById);
router.put('/cidades/:id', CidadeController.updateByIdValidation, CidadeController.updateById);
router.post('/cidades', CidadeController.createValidation, CidadeController.create);
router.delete('/cidades/:id', CidadeController.deleteValidation, CidadeController.deleteById);
export {router};
