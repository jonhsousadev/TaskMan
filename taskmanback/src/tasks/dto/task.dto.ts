import { IsNotEmpty, MinLength, IsString, IsBoolean } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly title: string;

  @IsBoolean()
  readonly completed: boolean;
}