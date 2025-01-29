import FetchData from "@/services/FetchData";
import { years } from "@/utils/consts";

export async function generateStaticParams() {
  const apiClient = new FetchData();
  const carFilters = await apiClient.fetchCarsFilters();
  const makes = carFilters.map(item => item.MakeId);

  return makes.flatMap((make) =>
    years.map((year) => ({
      makeId: make,
      year: year,
    }))
  );
}