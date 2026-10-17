import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EvaluationType } from './entities/evaluation-type.entity';
import { EvaluationTypeService } from './evaluation-type.service';
import { EvaluationTypeController } from './evaluation-type.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([EvaluationType]),
  ],
  controllers: [EvaluationTypeController],
  providers: [EvaluationTypeService],
  exports: [EvaluationTypeService],
})
export class EvaluationTypeModule {}