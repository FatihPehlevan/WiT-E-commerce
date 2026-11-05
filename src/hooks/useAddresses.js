import { useQuery } from '@tanstack/react-query';
import { getAddresses } from '@/api/api';

export const useAddresses = () =>
  useQuery({
    queryKey: ['addresses'],
    queryFn: getAddresses,
    staleTime: Infinity,
  });
