import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/api';

export const useProducts = (categoryId, sort) =>
  useQuery({
    queryKey: ['products', categoryId, sort],
    queryFn: () => getProducts(categoryId, sort),
    staleTime: 1000 * 60,
  });
