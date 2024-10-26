'use client';

import { useState, useEffect } from 'react';
import { addDog } from '../utility/addDog';
import { DogRequest } from '../contracts/dataContracts';


type Dog = {
  Id: string;
  Name: string;
  Breed: string;
  Age: number;
  Notes: string;
};

export default function RegisterDogForm({ userId, initialDogs, token }: { userId: string, initialDogs: Dog[], token : string }) {
    const [dogs, setDogs] = useState<Dog[]>(initialDogs);
    const [showForm, setShowForm] = useState(false);
    const [name, setDogName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [notes, setNotes] = useState('');




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
    
        setShowForm(false);
        const dogRequest : DogRequest = { Name: name, Breed: breed, Age: parseInt(age), Notes: notes }
        const response = await addDog(userId, dogRequest, token)
        if(response.id)
       
        {
          console.log(response.id)
        setDogs(
          (prevdogs) => [...prevdogs, {Id: response.id,  ...dogRequest}]    
        );
        setDogName('');
        setBreed('');
        setAge('');
        setNotes('');
      }
      else {
        console.error('Failed to add dog:', response.error);
    } 
  }
  catch (error) {
      console.error('Error registering dog:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Dogs</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <div key={dog.Id} className="mb-4 p-4 border rounded">
              <h3 className="font-bold">{dog.Name}</h3>
              <p>Breed: {dog.Breed}</p>
              <p>Age: {dog.Age}</p>
              <p>Notes: {dog.Notes}</p>
            </div>
          ))
        ) : (
          <p>No dogs registered yet.</p>
        )}
      </div>
      {showForm ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setDogName(e.target.value)}
            placeholder="Dog Name"
            className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed"
            className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Register Dog
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="mt-4 bg-red-500 text-white px-4 mx-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Register Dog
        </button>
      )}
    </div>
  );
}