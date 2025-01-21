const API_HOST = (process.env.NEXT_PUBLIC_API_HOST || "").replace(/\/$/, "");

/**
 * Utility function to fetch data from an API endpoint
 * @param endpoint - The endpoint path to fetch data from (e.g., "/metrics-dashboard/leaderboard")
 * @param errorContext - A string to provide context for error logging
 * @returns The parsed JSON response, typed as T
 */
export async function fetchFromApi<T>(
  endpoint: string,
  errorContext: string
): Promise<T> {
  const url = `${API_HOST}${endpoint}`;
  console.log(`Fetching from: ${url}`); // Debug log

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${errorContext}:`, error);
    throw error;
  }
}
