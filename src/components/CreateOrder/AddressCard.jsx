function AddressCard({
  address,
  radioName,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  isDeleting,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={radioName}
            checked={isSelected}
            onChange={onSelect}
            className="size-5 accent-primary-color cursor-pointer"
          />
          <span>{address.title}</span>
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onEdit}
            aria-label="Edit address"
            className="cursor-pointer text-second-text-color hover:text-primary-color"
          >
            <i className="iconify-[lucide--pencil] size-5" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            disabled={isDeleting}
            aria-label="Delete address"
            className="cursor-pointer text-second-text-color hover:text-danger-color disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <i className="iconify-[lucide--trash-2] size-5" />
          </button>
        </div>
      </div>

      <div
        onClick={onSelect}
        className={`flex flex-col gap-3 p-5 rounded-lg border-2 cursor-pointer ${
          isSelected
            ? 'border-primary-color bg-primary-color/10'
            : 'border-input-border bg-light-background-color'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="iconify-[mdi--account] size-5 text-primary-color" />
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
