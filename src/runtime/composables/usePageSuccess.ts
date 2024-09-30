import { useStore } from '../store/store';
import { formatDateReadable } from '../utils';

export const usePageSuccess = () => {
  const store = useStore();
  const [paymentDueDate, paymentDueTime] = store.detailBooking?.batas_pembayaran.split(' ') ?? [new Date(), new Date()];
  const [orderDate, orderTime] = store.detailBooking?.waktu_pesan.split(' ') ?? ['', ''];
  const formattedDate = formatDateReadable(new Date(store.detailBooking?.tgl_berangkat_pergi) ?? new Date());
  const formattedDueDate = formatDateReadable(new Date(paymentDueDate) ?? new Date());
  const formattedOrderDate = formatDateReadable(new Date(orderDate) ?? new Date());

  return {
    formattedDate,
    formattedDueDate,
    paymentDueTime,
    formattedOrderDate,
    orderTime
  }
};
