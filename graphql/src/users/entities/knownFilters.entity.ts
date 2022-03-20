import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { KnownFiltersTypes } from '../models/knownFilters.model';

@Entity({ name: 'known_filters' })
export class KnownFilters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field_name: string;

  @Column()
  type: KnownFiltersTypes;
}
