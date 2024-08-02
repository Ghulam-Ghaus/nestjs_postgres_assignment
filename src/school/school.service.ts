import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/address/entities/address.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async createSchool(data: any): Promise<School[]> {
    const address = await this.addressRepository.save(data.address);
    const organization = await this.organizationRepository.save(
      data.organization,
    );

    const school = this.schoolRepository.create({
      ...data,
      address,
      organization,
    });

    return this.schoolRepository.save(school);
  }

  async updateSchool(
    name: string,
    addressData: any,
    updateData: any,
  ): Promise<School[] | School> {
    const address = await this.addressRepository.findOne({
      where: addressData,
    });
    if (!address) return this.createSchool(updateData);

    const school = await this.schoolRepository.findOne({
      where: { name, address },
    });
    if (school) {
      Object.assign(school, updateData);
      return this.schoolRepository.save(school);
    } else {
      return this.createSchool(updateData);
    }
  }

  async getSchoolById(id: number): Promise<School> {
    return;
    // this.schoolRepository.findOne(id, {
    //   relations: ['address', 'organization'],
    // });
  }

  async getAllSchools(): Promise<School[]> {
    return this.schoolRepository.find({
      relations: ['address', 'organization'],
    });
  }

  async deleteSchool(id: number): Promise<void> {
    await this.schoolRepository.delete(id);
  }
}
