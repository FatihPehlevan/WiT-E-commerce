function AddressCard({ address, isSelected, onSelect, onEdit }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="address"
            checked={isSelected}
            onChange={onSelect}
            className="size-5 accent-alert-color cursor-pointer"
          />
          <span>{address.title}</span>
        </label>
        <button
          type="button"
          onClick={onEdit}
          className="underline font-bold text-sm cursor-pointer"
        >
          Düzenle
        </button>
      </div>

      <div
        onClick={onSelect}
        className={`flex flex-col gap-3 p-5 rounded-lg border-2 cursor-pointer ${
          isSelected
            ? 'border-alert-color bg-alert-color/10'
            : 'border-input-border bg-light-background-color'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="iconify-[mdi--account] size-5 text-alert-color" />
            <span>
              {address.name} {address.surname}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <i className="iconify-[mdi--cellphone] size-5" />
            <span>{address.phone}</span>
          </div>
        </div>
        <p className="text-sm text-second-text-color">
          {address.address} {address.neighborhood} {address.district}/
          {address.city}
        </p>
      </div>
    </div>
  );
}

export default AddressCard;
