import Account, {Client,ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client()
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Set the Appwrite API Endpoint
      .setProject(conf.appwriteProjectId); // Set the Appwrite Project ID

    this.account = new Account(this.client); // Initialize Account service
  }

  // Method to create an account
  async createAccount({ email, password, name }) {
    try {
      // Create a new user account
      const userAccount = await this.account.create(
        ID.unique(), // Ensure you call ID.unique() as a function
        email,
        password,
        name // Passing the name to the account creation as a parameter
      );

      if (userAccount) {
        return this.login({email,password}) // Return the account object if successful
      } else {
        return null; // Return null if the creation failed
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error; // It's better to throw the error so it can be handled by the caller
    }
  }

    async login ({email,password}){
        try{
            return await this.account.createSession(
                email,password)
        }
        catch (error){
            throw error;
        }
    } 
    
    async getCurrentUser(){
        try {   

            return await account.get();
            
        } catch (error) {
            throw error;
            
        }
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;





