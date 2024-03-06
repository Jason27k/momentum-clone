CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"subscription" "subscription" NOT NULL
);
--> statement-breakpoint
ALTER TABLE "mail_list" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "mail_list" DROP COLUMN IF EXISTS "updated_at";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "subscription";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
