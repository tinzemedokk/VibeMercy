CREATE TABLE `website_events` (
	`id` text PRIMARY KEY NOT NULL,
	`month` text NOT NULL,
	`session` text NOT NULL,
	`event` text NOT NULL,
	`page` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `website_events_month` ON `website_events` (`month`);