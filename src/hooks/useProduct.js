import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/api/api';

export const useProduct = (productId) =>
  useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
    staleTime: 1000 * 60,
  });
