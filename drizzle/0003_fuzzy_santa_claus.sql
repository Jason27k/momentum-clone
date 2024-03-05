ALTER TABLE "mail_list" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mail_list" ALTER COLUMN "subscribed" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mail_list" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mail_list" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email_verified" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "picture" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "picture" SET NOT NULL;