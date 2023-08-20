import { IsNotEmpty, Length } from 'class-validator';

// DTO - Data Transfer Object
export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.'
  })
  function: string;
}
