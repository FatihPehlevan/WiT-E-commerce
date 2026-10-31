import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/api';

export const useProducts = (categoryId, sort, filter) =>
  useQuery({
    queryKey: ['products', categoryId, sort, filter],
    queryFn: () => getProducts(categoryId, sort, filter),
    staleTime: 1000 * 60,
  });
