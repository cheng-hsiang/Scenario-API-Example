import { Client } from "https://deno.land/x/mysql/mod.ts";
// fake
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "dbname",
  password: "password",
});

export default client
