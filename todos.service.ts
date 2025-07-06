import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create({ title: createTodoDto.title });
  }

  findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todoModel.findByPk(id);
  }

  async update(id: number, data: Partial<CreateTodoDto>): Promise<Todo | null> {
    const todo = await this.todoModel.findByPk(id);
    if (todo) {
      await todo.update(data);
      return todo;
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    const todo = await this.todoModel.findByPk(id);
    if (todo) {
      await todo.destroy();
    }
  }
}
