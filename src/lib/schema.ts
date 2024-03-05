import {
  boolean,
  pgTable,
  serial,
  text,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

export const subscriptionEnum = pgEnum("subscription", ["Free", "Premium"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  name: varchar("name").notNull(),
  picture: text("picture").notNull().default(""),
  subscription: subscriptionEnum("subscription").notNull().default("Free"),
});

export const mailList = pgTable("mail_list", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  subscribed: boolean("subscribed").default(true).notNull(),
  createdAt: text("created_at").default("now()").notNull(),
  updatedAt: text("updated_at").default("now()").notNull(),
});
