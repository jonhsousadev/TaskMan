import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';
import { TaskDto } from './dto/task.dto';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task> ) {

  }

  async create(task: TaskDto, user: User): Promise<Task> {
    const data = Object.assign(task, { createdByUser: user._id })
    const createdTask = this.taskModel.create(data);
    return createdTask;
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async update(id: string, task: TaskDto, user: User): Promise<Task> {
    const data = Object.assign(task, user._id)
    await this.taskModel.updateOne({_id: id}, data).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.taskModel.deleteOne({_id: id}).exec();
  }
}
