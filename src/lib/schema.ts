import {
  boolean,
  pgTable,
  serial,
  text,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const subscriptionEnum = pgEnum("subscription", ["Free", "Premium"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  name: varchar("name").notNull(),
  picture: text("picture").notNull().default(""),
});

export const userRelations = relations(users, ({ one }) => ({
  subscriptions: one(subscriptions, {
    fields: [users.id],
    references: [subscriptions.userId],
  }),
}));

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey().notNull(),
  userId: serial("user_id")
    .notNull()
    .references(() => users.id),
  subscription: subscriptionEnum("subscription").notNull(),
});

export const mailList = pgTable("mail_list", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  subscribed: boolean("subscribed").default(true).notNull(),
});
