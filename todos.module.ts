import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './todo.model';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
