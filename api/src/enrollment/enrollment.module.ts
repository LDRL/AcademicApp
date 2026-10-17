import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Enrollment } from './entities/enrollment.entity';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';

import { StudentModule } from '../student/student.module';
import { AcademicModule } from '../academic/academic.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    StudentModule,
    AcademicModule,
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}