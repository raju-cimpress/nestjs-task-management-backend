import {
  IsAlphanumeric,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserCredentialsDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(4)
  @MaxLength(8)
  username: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message:
        'Password is not strong enough. Minimum length should be 8. There should be at least one uppercase, lowercase, number, symbol character.',
    },
  )
  password: string;
}
