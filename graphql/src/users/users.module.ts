import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {KnownFilters} from './entities/knownFilters.entity';
import {User} from './entities/user.entity';
import {KnownFilterResolver} from './resolvers/knownfilters.resolver';
import {UsersResolver} from './resolvers/users.resolver';
import {knownFiltersService} from './services/knownFilters.service';
import {UsersService} from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, KnownFilters])],
  providers: [
    UsersService,
    UsersResolver,
    knownFiltersService,
    KnownFilterResolver,
  ],
})
export class UsersModule {}
