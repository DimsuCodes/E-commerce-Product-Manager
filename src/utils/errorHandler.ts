export class ApiError extends Error {
   public statusCode?: number | undefined; // for networking failure which has no status code

  
   constructor(message: string, statusCode?: number) {
        super(message); //hands the message to the built in error
           
            this.name = "ApiError";  //prints error
            
            this.statusCode = statusCode; //stores the optional status code
            
   }
}

export function handleError(error: unknown): void {
    if (error instanceof ApiError) {
        // shows the message and the HTTP status code (if there is one)
        console.error(`API error: ${error.message} (status: ${error.statusCode ?? "none"})`);
    } else if (error instanceof Error) {
        // any other builtin error, such as a network failure
        console.error(`Error: ${error.message}`);
    } else {
       
        console.error("Unknown error occurred:", error);
    }
}
            