import * as z from 'zod';

const User = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
});

type User = z.infer<typeof User>;

export default User;