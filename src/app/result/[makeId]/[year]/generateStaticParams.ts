import FetchData from "@/services/FetchData";

export async function generateStaticParams() {
  const apiClient = new FetchData();
  const carFilters = await apiClient.fetchCarsFilters();
  const makes = carFilters.map(item => item.MakeId);
  const years = [...new Array(2025 - 2015 + 1)].map((_, i) => 2015 + i);

  return makes.flatMap((make) =>
    years.map((year) => ({
      makeId: make,
      year: year,
    }))
  );
}