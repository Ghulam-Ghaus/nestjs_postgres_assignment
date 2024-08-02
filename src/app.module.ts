import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { OrganizationModule } from './organization/organization.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.HOST,
    //   port: Number(process.env.PORT),
    //   username: process.env.USER_NAME,
    //   password: process.env.PASSWORD,
    //   database: process.env.DATABASE,
    //   migrations: [__dirname + '/migrations/*{.ts,.js}'],
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
  AddressModule,
    OrganizationModule,
    SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
