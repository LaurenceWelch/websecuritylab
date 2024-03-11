import sqlite3 from "sqlite3";

const userData = [
  { name: "Amy Apple", secret: "I actually prefers pears" },
  { name: "Beth Banana", secret: "I like anime" },
  { name: "Chris Carrot", secret: "I don't eat veges" },
  { name: "Logan Lemon", secret: "My password is 123" },
];

const postData = [
  { title: "post1", content: "apples are the best" },
  { title: "post2", content: "no pears are the best" },
  { title: "post3", content: "<img src='bad' onerror='alert(1)' />" },
];

const db = new sqlite3.Database(":memory:");

// create user database
db.serialize(() => {
  db.run("CREATE TABLE users (name TEXT, cash INTEGER)");
  const stmt = db.prepare("INSERT INTO users (name, cash) VALUES (?, ?)");
  for (const i of userData) {
    stmt.run(i.name, 100);
  }
  stmt.finalize();
});

// create posts database
db.serialize(() => {
  db.run("CREATE TABLE posts (title TEXT, content TEXT)");
  const stmt = db.prepare("INSERT INTO posts (title, content) VALUES (?, ?)");
  for (const i of postData) {
    stmt.run(i.title, i.content);
  }
  stmt.finalize();
});

export default db;
