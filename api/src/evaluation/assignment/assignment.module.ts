import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Assignment } from './entities/assignment.entity';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';

import { TeacherModule } from '../../teacher/teacher.module';
import { AcademicModule } from '../../academic/academic.module';
import { EvaluationPeriodModule } from '../evaluation-period/evaluation-period.module';
import { EvaluationTypeModule } from '../evaluation-type/evaluation-type.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Assignment]),
    TeacherModule,
    AcademicModule,
    EvaluationPeriodModule,
    EvaluationTypeModule,
  ],
  controllers: [AssignmentController],
  providers: [AssignmentService],
  exports: [AssignmentService],
})
export class AssignmentModule {}