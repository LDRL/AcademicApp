import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AcademicOffering } from './entities/academic-offering.entity';
import { SchoolGroupModule } from '../school-group/school-group.module';
import { SubjectModule } from '../subject/subject.module';
import { AcademicOfferingController } from './academic-offering.controller';
import { AcademicOfferingService } from './academic-offering.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([AcademicOffering]),
    SchoolGroupModule,
    SubjectModule,
  ],
  controllers: [AcademicOfferingController],
  providers: [AcademicOfferingService],
  exports: [AcademicOfferingService],
})
export class AcademicOfferingModule {}