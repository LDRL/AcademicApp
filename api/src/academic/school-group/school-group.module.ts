import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchoolGroup } from './entities/school-group.entity';
import { SchoolGroupService } from './school-group.service';
import { SchoolGroupController } from './school-group.controller';
import { GradeModule } from '../grade/grade.module';
import { SectionModule } from '../section/section.module';
import { SchoolYearModule } from '../school-year/school-year.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([SchoolGroup]),
    GradeModule,
    SectionModule,
    SchoolYearModule,
  ],
  controllers: [SchoolGroupController],
  providers: [SchoolGroupService],
  exports: [SchoolGroupService],
})
export class SchoolGroupModule {}