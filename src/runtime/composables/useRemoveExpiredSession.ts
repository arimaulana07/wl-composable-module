export const useRemoveExpiredSession = () => {
  const isSessionExpired = (storedData: any) => {
    const sessionTimeStamp = storedData.sessionTimeStamp;
    const currentTimeStamp = new Date().getTime();
    
    const diffInMinutes = (currentTimeStamp - sessionTimeStamp) / (1000 * 60);
    console.log('diffInMinutes', diffInMinutes);
    return diffInMinutes > 15;
  }


  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key as string);
    try {
      // Try to parse the value as JSON
      const item = JSON.parse(value as string);
      
      // Check if the parsed object has the specified property
      if (item && typeof item === 'object' && Object.hasOwnProperty.call(item, 'sessionId') && isSessionExpired(item)) {
          console.log(item);
          localStorage.removeItem(key as string);
          i--; // Adjust index after removal
      }
    } catch (e) {
      // If JSON.parse fails, it means the value is not a JSON object, so skip it
      continue;
    }
  }
};