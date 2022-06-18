import { v4 as uuid } from 'uuid';
import {
  Model,
  Table,
  Column,
  Default,
  PrimaryKey,
  DataType,
  Unique,
  NotNull,
} from 'sequelize-typescript';

export interface ExampleModelInterface {
  id: string;
  email: string;
  password: string;
}

@Table({ tableName: 'example' })
export class ExampleModel extends Model implements ExampleModelInterface {
  @Default(uuid())
  @PrimaryKey
  @Column({ type: DataType.TEXT })
  declare id: string;

  @Unique
  @NotNull
  @Column({ type: DataType.TEXT })
  declare email: string;

  @NotNull
  @Column({ type: DataType.TEXT })
  declare password: string;
}
