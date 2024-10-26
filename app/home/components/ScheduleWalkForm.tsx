'use client';

import { useState } from 'react';
import { Dog } from '../contracts/dataContracts';

export default function ScheduleWalkForm({ userId, dogs}: { userId: string, dogs : Dog[] }) {
  const [dogId, setDogId] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement walk scheduling logic here
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Schedule a Walk</h2>
      <form onSubmit={handleSubmit}>
         
        {/* Add form fields here */}
        <select
          value={dogId}
          onChange={(e) => setDogId(e.target.value)}
          className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        >
          {dogs.map((dog) => (
            <option key={dog.Id} value={dog.Id}>
              {dog.Name}
            </option>
          ))}
        </select>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (in minutes)"
          className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
        <input
          type="text"
          placeholder="Notes"
          className="w-full p-2 mb-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <input
          type="hidden"
          name="walker"
          value="1"
        />
        <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Schedule Walk
        </button>
      </form>
    </div>
  );
}