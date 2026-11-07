import slugify from 'slugify';

const genders = {
  k: 'kadin',
  e: 'erkek',
};

export const getProductUrl = (product, categories) => {
  const category = categories.find(
    (category) => category.id === product.category_id,
  );
  return `/shop/${genders[category.gender]}/${slugify(category.title, { lower: true })}/${category.id}/${slugify(product.name, { lower: true })}/${product.id}`;
};
