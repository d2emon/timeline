import {
  Request,
  Response,
  Router,
} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    result: true,
  });
});

export default router;
