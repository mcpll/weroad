import type { User } from '~/types/User';
import type { Travel } from '~/types/Travel';

export interface Booking {
  id: string;
  user_info: User | undefined;
  travel: Travel | undefined;
  payment_type: string | undefined;
  notes: string | undefined;
}
