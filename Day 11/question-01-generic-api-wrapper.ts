// Question 1: The Generic API Wrapper

interface Album {
  userId: number;
  id: number;
  title: string;
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

async function testFetchData(): Promise<void> {
  const album = await fetchData<Album>(
    "https://jsonplaceholder.typicode.com/albums/1",
  );

  console.log(album);
  console.log(`Album title: ${album.title}`);
}

testFetchData().catch((error: unknown) => {
  console.error(error);
});
