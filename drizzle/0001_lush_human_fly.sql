ALTER TABLE "users" ALTER COLUMN "subscription" SET DEFAULT 'free';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "subscription" SET NOT NULL;