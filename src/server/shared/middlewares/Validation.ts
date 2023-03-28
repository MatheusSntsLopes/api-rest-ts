import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnyObject, Maybe, ObjectSchema, ValidationError } from 'yup';



type TProperty =  'body' | 'query' | 'header' | 'params';

type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>;

type AllSchema = Record<TProperty, ObjectSchema<any>>

type tGetAllSchema = (getSchema: TGetSchema) => Partial<AllSchema>

type TValidation =  (  getAllSchemas:  tGetAllSchema) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req,res, next) => {

  const schema = getAllSchemas(schema => schema);

  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schema).forEach(async ([key, schema]) => {

    try{
      schema.validateSync(req[key as TProperty], {abortEarly: false});
      // next();
    } catch (e){
      const yupError = e as ValidationError;
      const errors: Record<string, string> = {};


      yupError.inner.forEach(error => {
        if (error.path === undefined) return;
        errors[error.path] = error.message;
      });

      errorsResult[key] = errors;
    //  return res.status(StatusCodes.BAD_REQUEST).json({  errors });
    }
  });

  if (Object.entries(errorsResult).length ===0){
    return next();
  }
  else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult});
  }
};
