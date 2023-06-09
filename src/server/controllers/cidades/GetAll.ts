import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares/Validation';

interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string,
}

export const getAllValidation = validation((getSchema) =>({
  query: getSchema<IQueryProps>( yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
  })),
}));

export const getAll = async (req: Request<{}, {}, {},IQueryProps >, res: Response) => {
  res.setHeader('acess-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count',1);


  return res.status(StatusCodes.OK).send({
    id:1,
    nome: 'Tobias',
  });
};
