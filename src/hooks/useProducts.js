import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getProducts } from '@/api/api';

export const useProducts = (categoryId, sort, filter, limit, offset) =>
  useQuery({
    queryKey: ['products', categoryId, sort, filter, limit, offset],
    queryFn: () => getProducts(categoryId, sort, filter, limit, offset),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
  });
