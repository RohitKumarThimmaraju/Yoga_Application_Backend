import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
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
