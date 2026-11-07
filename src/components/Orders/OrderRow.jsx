const formatDate = (orderDate) =>
  new Date(`${orderDate}Z`).toLocaleString('tr-TR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

function OrderRow({ order, address, isOpen, onToggle }) {
  const itemCount = order.products.reduce(
    (sum, product) => sum + product.count,
    0,
  );

  const productList = (
    <div className="flex flex-col gap-4">
      <h4 className="text-h6">Ürünler</h4>
      {order.products.map((product) => (
        <div key={product.id} className="flex items-center gap-4">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="size-16 rounded-md object-cover"
          />
          <div className="flex flex-col gap-1">
            <span>{product.name}</span>
            <span className="font-bold">
              {(product.count * product.price).toFixed(2)} TL
            </span>
            <span className="text-paragraph text-second-text-color">
              {product.count} x {product.price.toFixed(2)} TL
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const orderInfo = (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h4 className="text-h6">Teslimat Adresi</h4>
        {address ? (
          <>
            <span className="font-bold">{address.title}</span>
            <p className="text-paragraph text-second-text-color">
              {address.address} {address.neighborhood} {address.district}/
              {address.city}
            </p>
          </>
        ) : (
          <p className="text-paragraph text-second-text-color">
            Adres bilgisi bulunamadı.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-h6">Ödeme</h4>
        <span className="tracking-wider">
          **** **** **** {String(order.card_no).slice(-4)}
        </span>
        <span className="text-paragraph text-second-text-color">
          {order.card_name}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <tr
        onClick={onToggle}
        className={`border-t border-light-gray-2 cursor-pointer hover:bg-light-gray-1 ${
          isOpen ? 'bg-light-gray-1' : ''
        }`}
      >
        <td className="px-3 py-4 md:px-5 font-bold">#{order.id}</td>
        <td className="px-3 py-4 md:px-5">{formatDate(order.order_date)}</td>
        <td className="hidden md:table-cell px-5 py-4">{itemCount} ürün</td>
        <td className="px-3 py-4 md:px-5 font-bold whitespace-nowrap">
          {order.price.toFixed(2)} TL
        </td>
        <td className="px-3 py-4 md:px-5 text-right">
          <i
            className={`iconify-[lucide--chevron-down] size-5 text-primary-color transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </td>
      </tr>

      {isOpen && (
        <tr className="bg-light-gray-1">
          <td colSpan={5} className="md:hidden px-3 pb-3">
            <div className="flex flex-col gap-6 p-4 rounded-lg bg-light-background-color border border-light-gray-2">
              {productList}
              {orderInfo}
            </div>
          </td>
          <td colSpan={3} className="hidden md:table-cell align-top px-5 pt-2 pb-6">
            {productList}
          </td>
          <td colSpan={2} className="hidden md:table-cell align-top px-5 pt-2 pb-6">
            {orderInfo}
          </td>
        </tr>
      )}
    </>
  );
}

export default OrderRow;
