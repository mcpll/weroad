import type { Travel } from '~/types/Travel';
import type { User } from '~/types/User';
import type { Booking } from '~/types/Booking';
import { v4 as uuid } from 'uuid';

export default function normalizeBooking(
  travel: Travel | undefined,
  user: User | undefined,
  payment: string | undefined,
  notes: string | undefined,
): Booking {
  return {
    notes,
    payment_type: payment,
    travel,
    user_info: user,
    id: uuid(),
  };
}
