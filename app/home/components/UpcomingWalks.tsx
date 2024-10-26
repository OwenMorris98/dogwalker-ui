import { sql } from '@vercel/postgres';
import { Walk } from '../contracts/dataContracts';

export default async function UpcomingWalks({ userId, scheduledWalks }: { userId: string, scheduledWalks: Walk[] }) {


  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Walks</h2>
      {/* Display walks data here */}
      {scheduledWalks.map((walk) => (
        <div key={walk.Id} className="mb-4 p-4 border rounded">
          <h3 className="font-bold">{walk.DogName}</h3>
          <p>Scheduled Time: {walk.ScheduledTime}</p>
          <p>Duration: {walk.Duration} minutes</p>
          <p>Status: {walk.Status}</p>
          <p>Notes: {walk.Notes}</p>
          <p>Address: {walk.Address}</p>
        </div>
      ))}
    </div>
  );
}

