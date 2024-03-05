import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users, mailList } from "./schema";

const schema = { users, mailList };

const connectionString = process.env.DATABASE_URL!;

export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
