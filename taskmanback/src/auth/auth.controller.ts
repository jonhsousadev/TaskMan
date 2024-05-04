import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LogInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{token: string}> {
    return this.authService.signUp(signUpDto)
  }

  @Get('/login')
  logIn(@Body() LogInDto: LogInDto): Promise<{token: string}> {
  return this.authService.login(LogInDto)
  }
}
