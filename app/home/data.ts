import { sql } from 'mssql'

async function getConnection() {
    const pool = await sql.connect(process.env.MSSQL_CONNECTION_STRING);
    return pool;
}
async function closeConnection(pool: any) {
    await pool.close();
}

export async function getUserInfo(id: string) {
    console.log(id)
   
    try {
        const pool = await getConnection();
        const data = await sql<UserInfo>`SELECT Id, first_name, last_name, email FROM Customers WHERE Id = ${id}`;
        await closeConnection(pool);
        return data.rows[0];
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw new Error('Failed to fetch user info');
       }
  
};

export  type UserInfo = {Id: string, first_name: string, last_name: string, email: string };
