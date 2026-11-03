import React from 'react';
import { changeIsChecked } from '@/store/actions/shoppingCartActions';
import ItemActions from '@/components/ShoppingCart/ItemActions';
import { useDispatch } from 'react-redux';

function ItemCard({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id="includeInCart"
        name="includeInCart"
        checked={item.checked}
        onChange={() => dispatch(changeIsChecked(item.product.id))}
        className="size-4 accent-primary-color cursor-pointer"
      />
      <img
        src={item.product.images[0].url}
        className="w-24 h-32 shrink-0 object-cover rounded-md border border-light-gray-2"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <p className="text-h5">{item.product.name}</p>
        <p className="text-paragraph">{item.product.description}</p>
        <p className="text-paragraph font-bold text-secondary-text-color-1">
          {item.product.price} TL
        </p>
        <ItemActions item={item} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default ItemCard;
