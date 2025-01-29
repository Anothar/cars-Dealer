export default class FetchData {
  constructor(
    private readonly apiUrl: string = process.env.API_URL ?? ""
  ) {}

  public async fetchCarsFilters(): Promise<CarsFilter[]> {
    const fullUrl = `${this.apiUrl}GetMakesForVehicleType/car?format=json`;

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    const carFilters: CarsFilter[] = data.Results;

    return carFilters;
  }

  public async searchCarsByFilters(makeId: string, year: string): Promise<Car[]> {
    const fullUrl = `${this.apiUrl}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    const car: Car[] = data.Results;

    return car;
  }
}
