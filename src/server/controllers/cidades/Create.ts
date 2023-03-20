import { Request, Response } from 'express';


interface ICidade {
  name: string,
}


export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

  const data: ICidade = req.body;



  return res.send(data);
};
