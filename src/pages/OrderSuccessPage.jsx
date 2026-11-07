import { Link } from 'react-router';

function OrderSuccessPage() {
  return (
    <div className="flex flex-col gap-4 items-center text-center py-20 px-6 text-text-color">
      <i className="iconify-[lucide--circle-check] text-success-color size-16" />
      <h2 className="text-h3">Tebrikler, siparişin alındı!</h2>
      <p className="text-paragraph text-second-text-color max-w-md">
        Siparişin için teşekkür ederiz. Siparişin hazırlanıp en kısa sürede
        kargoya verilecek.
      </p>
      <Link
        to="/shop"
        className="mt-4 py-2.5 px-10 rounded-md bg-primary-color text-btn-text text-light-text-color hover:bg-hover-color"
      >
        Alışverişe Devam Et
      </Link>
    </div>
  );
}

export default OrderSuccessPage;
