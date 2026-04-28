import { z } from 'zod';
import { insertSubscriberSchema, subscribers } from './schema';

export { insertSubscriberSchema };

export const api = {
  subscribers: {
    create: {
      method: 'POST' as const,
      path: '/api/subscribers',
      input: insertSubscriberSchema,
      responses: {
        201: z.custom<typeof subscribers.$inferSelect>(),
        400: z.object({ message: z.string() }),
        409: z.object({ message: z.string() }),
      },
    },
  },
};
