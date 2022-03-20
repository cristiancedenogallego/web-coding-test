import { Field, Int, ObjectType } from '@nestjs/graphql';

export type KnownFiltersTypes = 'numeric' | 'text' | 'boolean';

@ObjectType()
export class KnownFilter {
  @Field(() => Int)
  id: number;
  
  @Field()
  field_name: string;

  @Field()
  type: KnownFiltersTypes; 
}
