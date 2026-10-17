import { Module } from '@nestjs/common';
import { EvaluationPeriodModule } from './evaluation-period/evaluation-period.module';
import { EvaluationTypeModule } from './evaluation-type/evaluation-type.module';
import { AssignmentModule } from './assignment/assignment.module';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [
    EvaluationPeriodModule,
    EvaluationTypeModule,
    AssignmentModule,
    SubmissionModule,
  ],
  exports: [
    EvaluationPeriodModule,
    EvaluationTypeModule,
    AssignmentModule,
    SubmissionModule,
  ],
})
export class EvaluationsModule {}