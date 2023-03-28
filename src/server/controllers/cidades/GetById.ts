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
  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });


  return res.status(StatusCodes.NO_CONTENT).send();
};
