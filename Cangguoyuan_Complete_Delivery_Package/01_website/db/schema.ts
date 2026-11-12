import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const websiteEvents=sqliteTable('website_events',{id:text('id').primaryKey(),month:text('month').notNull(),session:text('session').notNull(),event:text('event').notNull(),page:text('page').notNull(),createdAt:integer('created_at').notNull()},t=>[index('website_events_month').on(t.month)]);
