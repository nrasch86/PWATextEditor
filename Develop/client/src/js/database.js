import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const result = await store.put({ content }); // Add content
    console.log('Data saved to the database', result); // Log success
    return result; // Return the result
  } catch (error) {
    console.error('Error saving data to the database', error); // Log any errors
    throw error;
  }
};

// Method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const result = await store.getAll(); // Fetch Data
    console.log('Data retrieved from the database', result);
    return result; // Return data
  } catch (error) {
    console.error('Error retrieving data from the database', error); // Log errors
    throw error;
  }
};

initdb();
