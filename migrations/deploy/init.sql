-- Deploy originsTest:init to pg

BEGIN;

----
-- VIDEO
----

CREATE TABLE video (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" text NOT NULL,
    "description" text,
    "URL" VARCHAR NOT NULL,
    "createdAt" timestamptz,
    "updatedAt" timestamptz
);

----
-- TAG
----

CREATE TABLE tag (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "valeur" text NOT NULL UNIQUE
);

----
-- VIDEO_has_TAG
----

CREATE TABLE "video_has_tag" (
    "video_id" int NOT NULL REFERENCES "video"(id),
    "tag_id" int NOT NULL REFERENCES "tag"(id),
    PRIMARY KEY ("video_id", "tag_id")
);

COMMIT;
