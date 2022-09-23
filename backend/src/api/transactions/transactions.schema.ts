import * as  z from 'zod';

export const TransactionSchema = z.object({
   id: z.string(),
   user_id: z.number(),
   payee: z.string(),
   amount: z.date(),
   transaction_type_id: z.number(),
   status_id: z.string(),
   envelope_id: z.number()
})

type TransactionSchema = z.infer<typeof TransactionSchema>;

export default TransactionSchema;
