-- Deploy originsTest:correctionTableVideo to pg

BEGIN;

ALTER TABLE video
RENAME COLUMN "URL" TO video_url;


COMMIT;
