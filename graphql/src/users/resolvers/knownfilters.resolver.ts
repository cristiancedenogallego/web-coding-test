import {Query, Resolver, Args} from "@nestjs/graphql";
import {KnownFilter} from '../models/knownFilters.model';
import {knownFiltersService} from "../services/knownFilters.service";

@Resolver((_of: unknown) => KnownFilter)
export class KnownFilterResolver {
  constructor(
    protected readonly knownFilterService: knownFiltersService,
  ) {
  }

  @Query((_returns: unknown) => [KnownFilter])
  async knownFilter() {
    return this.knownFilterService.findAll();
  }
}
