import { useParams, useSearchParams } from 'react-router';
import { useProducts } from '@/hooks/useProducts';

export const useShopProducts = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const filter = searchParams.get('filter');
  const page = Number(searchParams.get('page')) || 1;
  const limit = 24;
  const offset = (page - 1) * limit;

  const query = useProducts(categoryId, sort, filter, limit, offset);
  return { ...query, page, limit, offset };
};
