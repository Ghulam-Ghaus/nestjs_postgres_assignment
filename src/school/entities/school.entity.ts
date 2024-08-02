import { Address } from 'src/address/entities/address.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column()
  shift: string;

  @Column()
  hasProjector: boolean;

  @Column()
  hasLaptop: boolean;

  @ManyToOne(() => Address, { cascade: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Organization, { cascade: true })
  @JoinColumn()
  organization: Organization;
}
