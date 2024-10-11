

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { sql } from "@vercel/postgres";
import { getUserInfo, UserInfo } from "./data";
import UserLabel from "./components/UserLabel";
import { cookies } from "next/headers";

export default async function HomePage() {

    const userId : string = cookies().get("userId")
    console.log(userId)
    const userData = await getUserInfo(userId.value);
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          My Account
        </h1>
        {userData && <UserLabel userInfo={userData} />} ? {<span>Loading...</span>}
      </div>
    </div>
  );
};
