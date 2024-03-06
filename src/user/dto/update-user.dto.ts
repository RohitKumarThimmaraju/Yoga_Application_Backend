import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsNumber()
  age: number;

  @IsString()
  phone: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  address: string;
}
