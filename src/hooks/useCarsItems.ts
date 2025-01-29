import { useState, useEffect } from 'react';
import FetchData from '@/services/FetchData';

const useCarsItems = (makeId: string, year: string) => {
  const [loading, setLoading] = useState(true);
  const [carsState, setCarsState] = useState<Car[]>([]);

  const fetchData = async () => {
    const apiClient = new FetchData();
    const carFilters = await apiClient.searchCarsByFilters(makeId, year);

    setCarsState(carFilters);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { carsState, loading };
}

export default useCarsItems;