import {Query, Resolver, Args} from "@nestjs/graphql";
import {User} from "../models/user.model";
import {UsersService} from "../services/users.service";
import {GetUsersArgs} from '../dto/get-users.args';
import { MoreThanOrEqual, LessThanOrEqual, Between, Like } from "typeorm";

type UserEntityFilters = {
  // NOTE: This is a workaround because that FindOperator is not exported from typeorm
  // https://github.com/typeorm/typeorm/issues/3589
  age?: any;
  name?: any;
  happy?: boolean;
  healthy?: boolean;
  busy?: boolean;
}

@Resolver((_of: unknown) => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {
  }
  
  @Query(_returns => [User])
  async users(@Args() args: GetUsersArgs) {
    const filters: UserEntityFilters = {
	happy: args.happy,
	healthy: args.healthy,
	busy: args.busy,
	name: args.name ? Like(`%${args.name}%`) : undefined,
    };

    if (args.age) {
      filters.age = args.age;
    } else if (args.age_min && args.age_max) {
      filters.age = Between(args.age_min, args.age_max);
    } else if (args.age_min) {
      filters.age = MoreThanOrEqual(args.age_min);
    } else if (args.age_max) {
      filters.age = LessThanOrEqual(args.age_max);
    }

    return this.usersService.findAll({
      where: filters,
    });
  }
}
