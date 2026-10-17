import { AcademicOffering } from 'src/academic/academic-offering/entities/academic-offering.entity';
import { Enrollment } from 'src/enrollment/entities/enrollment.entity';
import { Grade } from 'src/academic/grade/entities/grade.entity';
import { SchoolYear } from 'src/academic/school-year/entities/school-year.entity';
import { Section } from 'src/academic/section/entities/section.entity';
import {
  Entity,
  ManyToOne,
  OneToMany,
  Unique,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('school_groups')
@Unique(['grade', 'section', 'schoolYear'])
export class SchoolGroup {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => Grade, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'grade_id' })
  grade: Grade;

  @ManyToOne(() => Section, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @ManyToOne(() => SchoolYear, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'school_year_id' })
  schoolYear: SchoolYear;

  @OneToMany(() => AcademicOffering, (offering) => offering.schoolGroup)
  academicOfferings: AcademicOffering[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.schoolGroup)
  enrollments: Enrollment[];
}