import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EvaluationPeriod } from './entities/evaluation-period.entity';
import { EvaluationPeriodService } from './evaluation-period.service';
import { EvaluationPeriodController } from './evaluation-period.controller';

import { AcademicModule } from '../../academic/academic.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EvaluationPeriod]),
    AcademicModule,
  ],
  controllers: [EvaluationPeriodController],
  providers: [EvaluationPeriodService],
  exports: [EvaluationPeriodService],
})
export class EvaluationPeriodModule {}