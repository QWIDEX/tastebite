import { MongoClient } from "mongodb";
import { User } from "./types";
import bcrypt from "bcrypt";

const getUser = async (email: string, password: string): Promise<User> => {
  const uri = process.env.MONGODB_URI!;

  const client = new MongoClient(uri);

  try {
    const database = client.db("tastebite");

    const users = database.collection("users");

    const query = {
      email,
      password: await bcrypt.hash(password, process.env.BCRYPT_SALT),
    };

    let user: any = await users.findOne(query);

    return user;
  } finally {
    await client.close();
  }
};

export default getUser;
