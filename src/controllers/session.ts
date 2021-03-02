import db from '../config';

const getSession = (req: string) => {
   db.get(req, (err, reply) => {
      if (err) {
         return err
      }
      return reply;
   })
};

export { getSession };