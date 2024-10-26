
import { Dog, DogRequest, DogResponse } from "../contracts/dataContracts"

export async function addDog(userId : string, dog : DogRequest, token : String) {
    
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${userId}/Dog`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dog)
          });
          const data = await response.json();
          console.log(data);
      
          if (response.ok) {
            return { id: data.id };
          } else {
            return { status: 401, error: "bad request" };
          }
        } catch (error) {
          console.error('Dog error:', error);
          return { status: 500, error: "server error" };
        }
    
};
