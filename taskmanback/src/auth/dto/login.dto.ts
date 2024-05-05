import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class LogInDto {

  @IsNotEmpty()
  @IsEmail({}, {message: 'Please enter a valid email address.'})
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}