import {Router, Response, Request} from 'express';
import TransactionSchema from './transactions.schema';

const router = Router();

router.get('/', (req: Request, res: Response<TransactionSchema[]>) => {
    res.json([{
        id: 'test_id',
        user_id: 1,
        payee: 'McDonalds',
        amount: new Date(),
        transaction_type_id: 1,
        status_id: 'paid',
        envelope_id: 1
    }]);
    });


export default router;
