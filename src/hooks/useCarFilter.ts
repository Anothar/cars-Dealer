import { useState, useEffect } from 'react';
import FetchData from '@/services/FetchData';

const useCarFilter = () => {
  const [loading, setLoading] = useState(true);
  const [filtersState, setFiltersState] = useState<CarsFilter[]>([]);

  const fetchData = async () => {
    const apiClient = new FetchData();
    const carFilters = await apiClient.fetchCarsFilters();

    setFiltersState(carFilters);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { filtersState, loading };
}

export default useCarFilter;