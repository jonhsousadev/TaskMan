import { IsNotEmpty, MinLength, IsString, IsBoolean, IsEmpty } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';


export class TaskDto {
  readonly title: string;

  @IsBoolean()
  readonly completed: boolean;

  @IsEmpty({ message: 'You cannot pass user Id'})
  readonly createdByUser: User;

  readonly assignedToUser: User;
}