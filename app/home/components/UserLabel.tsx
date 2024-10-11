import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { sql } from '@vercel/postgres';
import { getUserInfo, UserInfo } from '../data';

export default function UserLabel( {
  userInfo
}: {
  userInfo: UserInfo;
}) {

    return (
        <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">Email: {userInfo.email}</p>
        <p className="text-gray-700 dark:text-gray-300">First Name: {userInfo.first_name}</p>
        <p className="text-gray-700 dark:text-gray-300">Last Name: {userInfo.last_name}</p>
        
      </div>
    );
}
