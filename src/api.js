const BASE_URL =
  "https://cors-anywhere.herokuapp.com/http://43.200.61.214:8090";
export const getPlaces = async () => {
  const res = await fetch(`${BASE_URL}/places`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  return await res.json();
};
