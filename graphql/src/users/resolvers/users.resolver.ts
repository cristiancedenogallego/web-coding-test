import {Query, ResolveField, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.model";

@Resolver((_of: unknown) => User)
export class UsersResolver {
  constructor() {
  }

  

  @Query(_returns => [User])
  async users() {
    return [];
  }
}
