import { AuthModule } from './../auth/auth.module';

import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
    {
      name: 'Task',
      schema: TaskSchema
    }
  ])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
