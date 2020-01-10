CREATE TABLE noteful_notes (
  id TEXT PRIMARY KEY,
  note_name TEXT NOT NULL,
  modified TIMESTAMP DEFAULT now() NOT NULL,
  folderId TEXT REFERENCES noteful_folders(id),
  content TEXT
);