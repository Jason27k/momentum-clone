DO $$ BEGIN
 CREATE TYPE "subscription" AS ENUM('free', 'premium');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mail_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"subscribed" boolean DEFAULT true,
	"created_at" text DEFAULT 'now()',
	"updated_at" text DEFAULT 'now()',
	CONSTRAINT "mail_list_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"email_verified" boolean DEFAULT false,
	"name" varchar,
	"picture" text,
	"subscription" "subscription",
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
