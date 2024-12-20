// Read the cats api and find the average weight of cat in metric unit.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    const res = await fetch(catsAPI);
    const breeds = await res.json();

    // Extract weights and calculate average weights for each breed
    const weights = breeds.map((breed) => {
      const weightRange = breed.weight.metric; // Example: "3 - 5"
      const [min, max] = weightRange.split(" - ").map(Number); // Split and convert to numbers
      return (min + max) / 2; // Average weight for this breed
    });

    // Calculate the overall average weight
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const averageWeight = totalWeight / weights.length;

    console.log(
      `The average weight of all cat breeds is: ${averageWeight.toFixed(2)} kg`
    );
  } catch (error) {
    console.log(error);
  }
};

fetchData();
