import {
  Request,
  Response,
  Router,
} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('respond with a resource');
});

export default router;
