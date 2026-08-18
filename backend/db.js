import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sip_n_shred",
  password: "YOUR_PASSWORD",
  port: 5432,
});

export default pool;
