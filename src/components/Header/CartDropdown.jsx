import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function CartDropdown() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className="absolute top-full right-0 w-96 z-10 hidden pt-4 lg:group-hover:block">
      <div className="flex flex-col bg-light-background-color border border-light-gray-2 rounded-md shadow-lg text-text-color">
        <span className="px-5 pt-4 pb-3 text-h6">
          Sepetim ({cart.length} ürün)
        </span>
        <div className="flex flex-col max-h-80 overflow-y-auto">
          {cart.map((item) => (
            <div
              className="flex gap-4 px-5 py-4 border-t border-light-gray-2"
              key={item.product.id}
            >
              <img
                src={item.product.images[0].url}
                alt=""
                className="w-20 h-24 shrink-0 object-cover rounded-md border border-light-gray-2"
              />
              <div className="flex flex-col gap-1">
                <span className="text-paragraph text-text-color line-clamp-2">
                  {item.product.name}
                </span>
                <span className="text-small text-second-text-color">
                  Adet: {item.count}
                </span>
                <span className="text-h6 text-secondary-color-1">
                  $ {item.product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 px-5 py-4 border-t border-light-gray-2">
          <button
            onClick={() => {
              navigate('/shoppingCart');
            }}
            className="flex-1 py-2.5 rounded-md border border-muted-color text-btn-text text-text-color cursor-pointer hover:bg-light-gray-1"
          >
            Sepete Git
          </button>
          <button
            onClick={() => navigate('/create-order')}
            className="flex-1 py-2.5 rounded-md bg-primary-color text-btn-text text-light-text-color cursor-pointer hover:bg-hover-color"
          >
            Alışverişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
