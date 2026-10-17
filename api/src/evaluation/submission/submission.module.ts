import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AssignmentSubmission } from './entities/assignment-submission.entity';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { StudentModule } from '../../student/student.module';
import { AssignmentModule } from '../assignment/assignment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssignmentSubmission]),
    AssignmentModule,
    StudentModule,
  ],
  controllers: [SubmissionController],
  providers: [SubmissionService],
  exports: [SubmissionService],
})
export class SubmissionModule {}