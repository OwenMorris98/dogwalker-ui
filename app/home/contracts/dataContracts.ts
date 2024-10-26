export type UserInfo = {
    Id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  
  export type Dog = {
    Id: string;
    Name: string;
    Breed: string;
    Age: number;
    Notes: string;
  };

  export type DogRequest = {
    Name: string;
    Breed: string;
    Age: number;
    Notes: string;
  };

  export type DogResponse = {
      id?: string;
      status?: number;
      error?: string;
  
  }
  
  export type Walk = {
    Id: string;
    DogId: string;
    WalkerName: string;
    DogName: string;
    ScheduledTime: string;
    Duration: number;
    Status: string;
    Notes: string;
    Address: string;
  };