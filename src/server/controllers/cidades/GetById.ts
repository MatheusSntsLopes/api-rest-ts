import {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';


interface IParamProp {
  id?: number;
}

export const getByIdValidation = validation(getSchema => ({
  params: getSchema<IParamProp>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const getById = async (req: Request<IParamProp>,res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
