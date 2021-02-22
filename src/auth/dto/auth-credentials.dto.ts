import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^0-9]*[0-9]){2}).{8,}$/, {
    message: 'password too weak',
  })
  password: string;
}
