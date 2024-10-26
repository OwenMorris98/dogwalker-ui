require('dotenv').config({ path: '.env.local' })
const { sql } = require('@vercel/postgres');

async function seedDatabase() {
  try {
    await sql`
      INSERT INTO public."Customers" ("Id", "first_name", "last_name", "email", "passwordHash") VALUES
      ('7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f', 'Owen', 'Morris', 'opmmorris98@gmail.com', 'Admin123'),
      ('9e94e74d-40a2-4e6e-89a8-a000383e44c2', 'Owen', 'Smurf', 'owenmorrissmurf@gmail.com', 'Admin123'),
      ('f989648b-d98e-4688-9aaa-0b8ef427f61b', 'Riley', 'Zarko', 'rileyzarkoo@outlook.com', 'Admin123')
    `;
    console.log('Customers inserted successfully');
    await sql`
      INSERT INTO "Dogs" ("Id", "Name", "Breed", "Age", "Notes", "customer_id") VALUES
      ('45c4e01a-cbe2-4fc3-910b-7b0395005801', 'Ella', 'Westie', 15, 'She is dead', '7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f'),
      ('495a8f7e-da53-494a-aaa6-def198935294', 'Pheobie', 'Cockapoo', 1, 'She is actually Abbys dog', '7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f'),
      ('4ead772f-b949-4655-9f11-dabf81f7d0d1', 'Pheobie', 'Cockapoo', 1, 'She is actually Abbys dog', '7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f'),
      ('c01e2480-1b18-4fb7-93f3-45365c7595f1', 'Louie', 'Golden Doodle', 4, 'He is crazy', '7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f'),
      ('cd920197-0f51-4c5d-b974-1b5f752a8dfa', 'Penelope', 'Chihuahua', 0, 'She is 3 months old and so cute', 'f989648b-d98e-4688-9aaa-0b8ef427f61b')
    `;
    console.log('Dogs inserted successfully');
    await sql`
      INSERT INTO "Roles" ( "name") VALUES
      ( 'Customer'),
      ( 'Admin'),
      ( 'Walker')
    `;
    console.log('Roles inserted successfully');
    await sql`
      INSERT INTO "Walkers" ( "Name", "Email", "Phone", "ExperienceLevel", "Availability") VALUES
      ( 'Jarrett Hansen', 'jhansen@yahoo.com', '610-555-6842', '2 yrs', 'M-F')
    `;
    console.log('Walkers inserted successfully');
    await sql`
      INSERT INTO "Walks" ( "DogId", "WalkerID", "ScheduledTime", "Duration", "Status", "Notes", "Address") VALUES
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-06-14 18:33:56.142000', 20, 'request', 'Please walk my dog', 'Address'),
      ( '45c4e01a-cbe2-4fc3-910b-7b0395005801', 1, '2024-06-27 02:10:29.868000', 60, 'Pending', 'She is white', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-06-28 00:00:00.000000', 30, 'Pending', 'Testing addresses', 'Address'),
      ( '45c4e01a-cbe2-4fc3-910b-7b0395005801', 1, '2024-07-04 00:00:00.000000', 60, 'Pending', 'Testing status codes', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-06-30 00:00:00.000000', 15, 'Pending', 'Testing useEffect request', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-06-30 00:00:00.000000', 60, 'Pending', 'Testing form state', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-25 03:04:52.275000', 30, 'requested', 'here are notes', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-25 03:04:52.275000', 30, 'requested', 'here are notes', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-26 03:04:52.275000', 30, 'requested', 'here are notes', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-26 03:04:52.275000', 30, 'requested', 'here are notes', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-25 03:04:52.275000', 30, 'requested', 'here are notes for hopefully last time', 'Address'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-07-25 17:00:56.735000', 10, 'Pending', 'Testing command handler', 'Address'),
      ( '45c4e01a-cbe2-4fc3-910b-7b0395005801', 1, '2024-08-20 00:00:00.000000', 30, 'Pending', 'asdf', '7 Whitely Rd'),
      ( '45c4e01a-cbe2-4fc3-910b-7b0395005801', 1, '2024-08-20 00:00:00.000000', 30, 'Pending', 'asdf22222', '7 Whitely Rd'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-09-03 00:00:00.000000', 60, 'Pending', '8/11 at 1035', '9 E New Jersery Ave'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-08-26 00:00:00.000000', 30, 'Pending', 'He is a bitch', '7 Whitely Rd'),
      ( 'cd920197-0f51-4c5d-b974-1b5f752a8dfa', 1, '2024-08-27 00:00:00.000000', 30, 'Pending', 'She doesn''t go far', '145 Jamestown Ave'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-08-30 00:00:00.000000', 30, 'Pending', 'Test email service', 'Alexs house'),
      ( 'c01e2480-1b18-4fb7-93f3-45365c7595f1', 1, '2024-08-28 21:30:00.000000', 15, 'Pending', 'Testing something', '145 Jamestown Ave')
    `;
    console.log('Walks inserted successfully');
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();