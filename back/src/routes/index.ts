import {
  Request,
  Response,
  Router,
} from 'express';

const data = [
  // First row in the Timeline
  {
    title: {
      content: 'Event One Title',
    },
    description: {
      content: 'Event One Description',
    },
    time: {
      content: Date.now(), // moment().format('ll'),
    },
  },

  // Second row in the Timeline
  {
    title: {
      content: 'Event Two Title',
    },
    description: {
      content: 'Event Two Description',
    },
    time: {
      content: Date.now(), // moment().format('ll'),
    },
  },

  // You got the idea..
  {
    title: {
      content: 'Event Three Title',
    },
    description: {
      content: 'Event Three Description',
    },
    time: {
      content: Date.now(), // moment().format('ll'),
    },
    icon: {
      content: 'pencil',
    },
  },
];

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    result: true,
  });
});

router.get('/events', (req: Request, res: Response) => {
  res.json(data);
});

export default router;
