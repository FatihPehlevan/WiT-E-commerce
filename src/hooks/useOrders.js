import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/api/api';

export const useOrders = () =>
  useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    staleTime: Infinity,
  });
