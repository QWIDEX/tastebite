import getClient from "@/utils/mongoDB/getClient";
import { NextRequest, NextResponse } from "next/server";
//@ts-ignore
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

export const POST = async (req: NextRequest, {}) => {
  const { password, email } = await req.json();

  if (!password)
    return NextResponse.json(
      { message: "Password is requiered" },
      { status: 400 }
    );
  if (!email)
    return NextResponse.json(
      { message: "Email is requiered" },
      { status: 400 }
    );

  const client = await getClient();
  const db = client.db("tastebite");
  const users = db.collection("users");

  const userExists = await users.findOne({ email });

  if (userExists)
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );

  const userId = new ObjectId();
  users.insertOne({
    _id: userId,
    email,
    password: await bcrypt.hash(password, process.env.BCRYPT_SALT!),
  });

  return NextResponse.json({ message: "User created" });
};
