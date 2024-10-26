

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { sql } from "@vercel/postgres";
import { getUserInfo, getDogs, getUpcomingWalks } from "./data";
import { UserInfo, Dog, Walk } from "./contracts/dataContracts"; 
import UserLabel from "./components/UserLabel";
import UpcomingWalks from './components/UpcomingWalks';
import RegisterDogForm from './components/RegisterDogForm';
import ScheduleWalkForm from './components/ScheduleWalkForm';
import { cookies } from "next/headers";

export default async function HomePage() { 

    let userId : string = cookies().get("userId")?.value || '';
    let token : string = cookies().get("token")?.value || '';
    console.log(userId)
    const userData = await getUserInfo(userId);
    const dogs = await getDogs(userId);
    const walks = await getUpcomingWalks(userId);
    1
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Welcome, {userData?.first_name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UpcomingWalks userId={userId} scheduledWalks={walks} />
            <RegisterDogForm userId={userId} initialDogs={dogs} token={token}/>
          </div>
          <ScheduleWalkForm userId={userId} dogs={dogs} />
        </div>
      </div>
    );
};
