import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  completed: boolean;
}
