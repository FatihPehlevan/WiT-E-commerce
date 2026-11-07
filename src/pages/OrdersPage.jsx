import { useState } from 'react';
import { Link } from 'react-router';
import OrderRow from '@/components/Orders/OrderRow';
import { useOrders } from '@/hooks/useOrders';
import { useAddresses } from '@/hooks/useAddresses';

function OrdersPage() {
  const { data: orders, isPending, isError } = useOrders();
  const { data: addresses } = useAddresses();
  const [openOrderId, setOpenOrderId] = useState(null);

  const toggleOrder = (id) =>
    setOpenOrderId((currentId) => (currentId === id ? null : id));

  return (
    <div className="flex flex-col gap-6 py-10 px-6 lg:px-0 text-text-color lg:max-w-275 lg:mx-auto">
      <h2 className="text-h3">Siparişlerim</h2>

      {isPending ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-danger-text-color">Error fetching orders</p>
      ) : orders.length === 0 ? (
        <div className="flex flex-col gap-4 items-center py-10">
          <i className="iconify-[lucide--package] text-second-text-color size-10" />
          <p className="text-h4">Henüz siparişin yok</p>
          <Link
            to="/shop"
            className="py-2.5 px-10 rounded-md bg-primary-color text-btn-text text-light-text-color hover:bg-hover-color"
          >
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <div className="rounded-lg border border-light-gray-2 overflow-x-auto">
          <table className="w-full min-w-140 text-left">
            <thead className="bg-light-gray-1 text-h6">
              <tr>
                <th className="px-5 py-4">Sipariş No</th>
                <th className="px-5 py-4">Tarih</th>
                <th className="px-5 py-4">Ürünler</th>
                <th className="px-5 py-4">Tutar</th>
                <th className="px-5 py-4" />
              </tr>
            </thead>
            <tbody>
              {[...orders]
                .sort((a, b) => b.id - a.id)
                .map((order) => (
                  <OrderRow
                    key={order.id}
                    order={order}
                    address={addresses?.find(
                      (address) => address.id === order.address_id,
                    )}
                    isOpen={openOrderId === order.id}
                    onToggle={() => toggleOrder(order.id)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
