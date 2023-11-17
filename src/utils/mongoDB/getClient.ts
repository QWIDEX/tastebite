import { MongoClient } from "mongodb";

let client: MongoClient;

async function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI!;

  if (client) {
    return client;
  }
  console.log("new connection");
  client = await MongoClient.connect(uri);

  return client;
}

export default getClient;
