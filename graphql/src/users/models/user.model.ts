import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  age: number;

  @Field()
  name: string;

  @Field(() => Boolean)
  happy: boolean;

  @Field(() => Boolean)
  healthy: boolean;

  @Field(() => Boolean)
  busy: boolean;
}
