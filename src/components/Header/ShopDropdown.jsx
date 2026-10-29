import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const genders = [
  { key: 'k', label: 'Kadın', slug: 'kadin' },
  { key: 'e', label: 'Erkek', slug: 'erkek' },
];

export default function ShopDropdown() {
  const categories = useSelector((state) => state.product.categories);

  return (
    <div className="absolute top-full left-0 z-10 hidden pt-4 lg:group-hover:block">
      <div className="flex gap-20 bg-light-background-color px-6 py-6 shadow-md">
        {genders.map((gender) => (
          <div key={gender.key} className="flex flex-col gap-6">
            <h6 className="text-h6 text-text-color">{gender.label}</h6>
            <div className="flex flex-col gap-4 text-link text-second-text-color">
              {categories
                .filter((category) => category.gender === gender.key)
                .map((category) => (
                  <Link
                    key={category.id}
                    to={`/shop/${gender.slug}/${category.code.split(':')[1]}/${category.id}`}
                    className="hover:text-text-color"
                  >
                    {category.title}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
