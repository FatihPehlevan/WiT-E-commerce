import { useQuery } from '@tanstack/react-query';
import { getCards } from '@/api/api';

export const useCards = () =>
  useQuery({
    queryKey: ['cards'],
    queryFn: getCards,
    staleTime: Infinity,
  });
