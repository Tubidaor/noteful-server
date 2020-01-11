DROP TABLE IF EXISTS noteful_notes;

CREATE TABLE noteful_notes (
  id TEXT PRIMARY KEY NOT NULL,
  note_name TEXT NOT NULL,
  modified TIMESTAMP DEFAULT now() NOT NULL,
  content TEXT
);


ALTER TABLE IF EXISTS noteful_notes
  ADD COLUMN
    folder_id TEXT REFERENCES noteful_folders(id) NOT NULL;