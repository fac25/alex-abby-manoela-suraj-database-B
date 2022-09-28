BEGIN;

CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS music (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES user(id),
    genre TEXT NOT NULL,
    artist TEXT NOT NULL,
    song TEXT NOT NULL,
    rating INTEGER NOT NULL
    -- CHECK (rating > (0)),
    -- CHECK (rating <= (5)) 
);

COMMIT;

