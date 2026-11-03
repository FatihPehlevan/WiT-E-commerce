import {
  changeCount,
  removeFromCart,
} from '@/store/actions/shoppingCartActions';

function ItemActions({ dispatch, item }) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => dispatch(changeCount(item.product.id, -1))}
        className="p-2 text-btn-text bg-light-gray-1 cursor-pointer"
      >
        {item.count === 1 ? (
          <i className="block iconify-[akar-icons--trash-can] size-6 lg:size-4" />
        ) : (
          <i className="block iconify-[akar-icons--minus] size-4" />
        )}
      </button>
      <span className="text-btn-text px-2">{item.count}</span>
      <button
        onClick={() => dispatch(changeCount(item.product.id, 1))}
        className="p-2 text-btn-text bg-light-gray-1 cursor-pointer"
      >
        <i className="block iconify-[akar-icons--plus] size-4" />
      </button>
      {item.count > 1 && (
        <button
          onClick={() => dispatch(removeFromCart(item.product.id))}
          className="p-2 ml-4 text-alert-text-color bg-light-gray-1 cursor-pointer"
        >
          <i className="block iconify-[akar-icons--trash-can] size-4" />
        </button>
      )}
    </div>
  );
}

export default ItemActions;
