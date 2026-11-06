import { useNavigate } from 'react-router';
import {
  SHIPPING_FEE,
  DISCOUNT,
  calculatePayable,
} from '@/store/actions/shoppingCartActions';

function ShoppingCartSummaryBox({ total }) {
  const navigate = useNavigate();
  let roundedTotal = Math.round(total * 100) / 100 + 0;

  return (
    <div className="flex flex-col shrink-0 gap-4 bg-light-gray-1 px-4 py-4 rounded-sm lg:min-w-60 lg:self-start">
      <h3 className="text-primary-color text-h5">SİPARİŞ ÖZETİ</h3>
      <div className="flex flex-col gap-2">
        <span className="text-text-color text-h6 flex justify-between">
          <span>Ürünler</span>
          <span>{roundedTotal.toFixed(2)} TL</span>
        </span>
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>Kargo</span>
            <span>{SHIPPING_FEE.toFixed(2)} TL</span>
          </span>
        )}
        {total > 0 && (
          <span className="text-text-color text-h6 flex justify-between">
            <span>İndirim</span>
            <span className="text-secondary-color-1">-{DISCOUNT.toFixed(2)} TL</span>
          </span>
        )}
        <span className="text-text-color text-h6 flex justify-between">
          <span>Toplam</span>
          {total > 0 ? (
            <span>{calculatePayable(total).toFixed(2)} TL</span>
          ) : (
            <span>0 TL</span>
          )}
        </span>
      </div>
      <button
        onClick={() => navigate('/create-order')}
        className="py-2.5 rounded-md bg-primary-color text-btn-text text-light-text-color cursor-pointer hover:bg-hover-color disabled:bg-muted-color disabled:cursor-not-allowed"
        disabled={total === 0}
      >
        Alışverişi Tamamla
      </button>
    </div>
  );
}

export default ShoppingCartSummaryBox;
