import "dotenv/config"
import { DataSource } from "typeorm"
import { entities } from "../domains/entities";

export const dataSource = new DataSource({
  type: "sqlite",
  database: 'db/sql',
  synchronize: true,
  entities,
});