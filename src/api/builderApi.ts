const BASE_URL = 'https://cdn.builder.io/api/v3/content'; // Replace with the actual base URL of your Builder API

export const fetchLocations = async () => {
  try {
    const response = await fetch(`${BASE_URL}/locations?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Extract locations from the results
    return data.results.map(result => result.data) || []; // Return the data property of each result
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return []; // Return an empty array on error
  }
};
