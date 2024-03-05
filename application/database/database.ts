import Dexie from 'dexie';
import { getCurrentDateTime } from '../utils/functions';

// Define an interface for the Dexie database
interface VetDB extends Dexie {
  docData: Dexie.Table<any>;
}

// Create a new Dexie database
const db = new Dexie('vetDB') as VetDB;

// Define a table for documents
db.version(1).stores({
  docData: '++id,title,transcript,isFileUsed,note,summary,date,duration',
});

// Open the database asynchronously
async function openDatabase() {
  try {
    await db.open();
    console.log('Database opened successfully');
  } catch (err) {
    console.error('Error opening database: ', err);
  }
}

// Call the openDatabase function to open the database

// Define the transcript data interface
interface TranscriptData {
  title: string;
  transcript: string;
  isFileUsed: string;
  note: string;
  summary: string;
  date: string;
}

// Define the insertTranscript function with async
export async function insertTranscriptDB(
  title: string,
  transcript: string,
  isFileUsed: string,
  note: string,
  summary: string,
  date: string
): Promise<void> {
  // Create a new instance of the TranscriptData interface
  await openDatabase();
  const transcriptData: TranscriptData = {
    title,
    transcript,
    isFileUsed,
    note,
    summary,
    date,
  };

  try {
    // Use the Dexie 'docData' table to add the transcript data asynchronously
    const id = await db.docData.add(transcriptData);
    console.log(`Transcript with ID ${id} inserted successfully!`);

  } catch (error) {
    console.error('Error inserting transcript: ', error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
}

export async function createNewEncounterDB()
  {
    // Create a new instance of the TranscriptData interface
    await openDatabase();
    const tr = {
      title:"Encounter",
      date:getCurrentDateTime()
    };
  
    try {
      // Use the Dexie 'docData' table to add the transcript data asynchronously
      const id = await db.docData.add(tr);
      return id;
  
    } catch (error) {
      console.error('Error inserting transcript: ', error);
      throw error; // Rethrow the error for the caller to handle if needed
    }
  }

  export async function getAllEncouterDB(): Promise<any[]> {
    try {
        await openDatabase();
      // Use the Dexie 'docData' table to retrieve all encounters asynchronously
      const encounters = await db.docData.toArray();
      return encounters;
    } catch (error) {
      console.error('Error retrieving encounters: ', error);
      throw error; // Rethrow the error for the caller to handle if needed
    }
  }
  
  export async function getEncouterDB(id: any): Promise<any | null> {
    try {
        await openDatabase();
      // Use the Dexie 'docData' table to retrieve a specific encounter by ID asynchronously
      const encounter = await db.docData.get(id);
      return encounter || null; // Return null if the encounter is not found
    } catch (error) {
      console.error(`Error retrieving encounter with ID ${id}: `, error);
      throw error; // Rethrow the error for the caller to handle if needed
    }
  }

  export async function updateEncounterDB(id: any, field: string, value: any): Promise<void> {
    try {
      await openDatabase();
  
      // Ensure the field is a valid property of the TranscriptData interface
      const validFields: any = ['title', 'transcript', 'isFileUsed', 'note', 'summary', 'date'];
  
      if (!validFields.includes(field)) {
        console.error('Invalid field for update:', field);
        throw new Error('Invalid field for update');
      }
  
      // Use the Dexie 'docData' table to update the specified field asynchronously
      await db.docData.update(id, { [field]: value });
  
      console.log(`Encounter with ID ${id} updated successfully!`);
  
    } catch (error) {
      console.error(`Error updating encounter with ID ${id}: `, error);
      throw error; // Rethrow the error for the caller to handle if needed
    }
  }