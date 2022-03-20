import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {KnownFilters} from '../entities/knownFilters.entity';

@Injectable()
export class knownFiltersService {
  constructor(
    @InjectRepository(KnownFilters)
    private repository: Repository<KnownFilters>,
  ) {}

  findAll(params = {}): Promise<KnownFilters[]> {
    return this.repository.find(params);
  }
}
