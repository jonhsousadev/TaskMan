import { IsNotEmpty, MinLength, IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly title: string;

  @IsBoolean()
  readonly completed: boolean;
}