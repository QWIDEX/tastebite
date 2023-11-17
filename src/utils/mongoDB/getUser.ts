import type { User } from "next-auth";
import getClient from "./getClient";
//@ts-ignore
import bcrypt from "bcrypt";

const getUser = async (
  email: string,
  receivedPassword: string
): Promise<User | null> => {
  try {
    const client = await getClient();
    const database = client.db("tastebite");
    const users = database.collection("users");

    const query = {
      email: email,
      password: await bcrypt.hash(receivedPassword, process.env.BCRYPT_SALT!),
    };

    const user: any = await users.findOne(query);
    const { password, ...userWithoutPass } = user;

    return userWithoutPass as User;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getUser;
