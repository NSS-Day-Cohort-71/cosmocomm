export const getAllPlanets = async () => {
  const response = await fetch("http://localhost:8088/planets");
  const data = await response.json();
  return data;
};
