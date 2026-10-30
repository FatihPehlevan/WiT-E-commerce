import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/api';

export const useProducts = (categoryId) =>
  useQuery({
    queryKey: ['products', categoryId],
    queryFn: () => getProducts(categoryId),
    staleTime: 1000 * 60,
  });
