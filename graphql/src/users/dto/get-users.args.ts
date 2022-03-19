import { IsInt, Min, Max } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetUsersArgs {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  @IsInt()
  @Min(1)
  @Max(120)
  age?: number;

  @Field({ nullable: true })
  @IsInt()
  @Min(1)
  @Max(120)
  age_min?: number;


  @Field({ nullable: true })
  @IsInt()
  @Min(1)
  @Max(120)
  age_max?: number;

  @Field({ nullable: true })
  happy?: boolean;

  @Field({ nullable: true })
  healthy?: boolean;

  @Field({ nullable: true })
  busy?: boolean;
}
