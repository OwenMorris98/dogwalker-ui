import { sql } from "@vercel/postgres";
import { UserInfo, Dog, Walk } from "./contracts/dataContracts";

export async function getUserInfo(id: string) {
  console.log(id);

  try {
    const { rows } =
      await sql`SELECT "Id", "first_name", "last_name", "email" FROM "Customers" WHERE "Id" = ${id}`;
    return rows[0] as UserInfo;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw new Error("Failed to fetch user info");
  }
}


export async function getDogs(userId: string) {
  try {
    const { rows } =
      await sql`SELECT "Id", "Name", "Breed", "Age", "Notes" FROM "Dogs" WHERE customer_id = ${userId}`;
    return rows as Dog[];
  } catch (error) {
    console.error("Error fetching dogs:", error);
    throw new Error("Failed to fetch dogs");
  }
}


export async function getUpcomingWalks(userId: string) {
  try {
    const { rows } = await sql`SELECT w."WalkID",
       w."DogId",
       s."Name" AS "WalkerName",
       d."Name" AS "DogName",
       w."ScheduledTime",
       w."Duration",
       w."Status",
       w."Notes",
       w."Address"
FROM "Walks" w
LEFT JOIN "Dogs" d ON w."DogId" = d."Id"
LEFT JOIN "Walkers" s ON w."WalkerID" = s."WalkerID"
WHERE w."ScheduledTime" > CURRENT_TIMESTAMP 
  AND w."ScheduledTime" < CURRENT_TIMESTAMP + INTERVAL '7 days'
  AND d."customer_id" = ${userId}`;
    return rows as Walk[];
  } catch (error) {
    console.error("Error fetching upcoming walks:", error);
    throw new Error("Failed to fetch upcoming walks");
  }
}


