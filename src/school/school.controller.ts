import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './entities/school.entity';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() data: any): Promise<School[]> {
    return this.schoolService.createSchool(data);
  }

  @Put()
  async update(@Body() data: any): Promise<School[] | School> {
    const { name, address, ...updateData } = data;
    return this.schoolService.updateSchool(name, address, updateData);
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: number): Promise<School> {
    return this.schoolService.getSchoolById(id);
  }

  @Get()
  async getAllSchools(): Promise<School[]> {
    return this.schoolService.getAllSchools();
  }

  @Delete(':id')
  async deleteSchool(@Param('id') id: number): Promise<void> {
    return this.schoolService.deleteSchool(id);
  }
}
