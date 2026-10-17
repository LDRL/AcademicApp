import { Module } from '@nestjs/common';
import { GradeModule } from './grade/grade.module';
import { SubjectModule } from './subject/subject.module';
import { SectionModule } from './section/section.module';
import { SchoolYearModule } from './school-year/school-year.module';
import { SchoolGroupModule } from './school-group/school-group.module';
import { AcademicOfferingModule } from './academic-offering/academic-offering.module';

@Module({
  imports: [
    GradeModule,
    SubjectModule,
    SectionModule,
    SchoolYearModule,
    SchoolGroupModule,
    AcademicOfferingModule,
  ],
  exports: [
    GradeModule,
    SubjectModule,
    SectionModule,
    SchoolYearModule,
    SchoolGroupModule,
    AcademicOfferingModule,
  ],
})
export class AcademicModule {}