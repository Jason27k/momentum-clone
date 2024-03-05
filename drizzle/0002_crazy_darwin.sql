ALTER TYPE "subscription" ADD VALUE 'Free';--> statement-breakpoint
ALTER TYPE "subscription" ADD VALUE 'Premium';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "subscription" SET DEFAULT 'Free';