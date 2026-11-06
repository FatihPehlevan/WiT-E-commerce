const maskCardNumber = (cardNo) =>
  `${cardNo.slice(0, 4)} ${cardNo.slice(4, 6)}** **** ${cardNo.slice(-4)}`;

function CardItem({ card, isSelected, onSelect, onEdit, onDelete, isDeleting }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="card"
            checked={isSelected}
            onChange={onSelect}
            className="size-5 accent-primary-color cursor-pointer"
          />
          <span>{card.name_on_card}</span>
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onEdit}
            aria-label="Edit card"
            className="cursor-pointer text-second-text-color hover:text-primary-color"
          >
            <i className="iconify-[lucide--pencil] size-5" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            disabled={isDeleting}
            aria-label="Delete card"
            className="cursor-pointer text-second-text-color hover:text-danger-color disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <i className="iconify-[lucide--trash-2] size-5" />
          </button>
        </div>
      </div>

      <div
        onClick={onSelect}
        className={`flex flex-col justify-between gap-8 p-5 rounded-lg border-2 cursor-pointer ${
          isSelected
            ? 'border-primary-color bg-primary-color/10'
            : 'border-input-border bg-light-background-color'
        }`}
      >
        <i className="iconify-[lucide--credit-card] size-8 text-primary-color" />
        <div className="flex flex-col items-end gap-1 text-paragraph">
          <span className="tracking-wider">{maskCardNumber(card.card_no)}</span>
          <span className="text-second-text-color">
            {card.expire_month}/{card.expire_year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
