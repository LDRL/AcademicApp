import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchoolYear } from './entities/school-year.entity';
import { SchoolYearService } from './school-year.service';
import { SchoolYearController } from './school-year.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolYear])],
  controllers: [SchoolYearController],
  providers: [SchoolYearService],
  exports: [SchoolYearService],
})
export class SchoolYearModule {}