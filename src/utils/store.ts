

// Helper function to update localStorage
export function updateLocalStorage(key: string, data: any) {
  // Check if window is defined (running on the client side)
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

// Helper function to get data from localStorage
export function getLocalStorageData(key: string) {
  // Check if window is defined (running on the client side)
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
