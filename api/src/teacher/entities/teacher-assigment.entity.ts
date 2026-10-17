import {
  Entity,
  ManyToOne,
  Unique,
  JoinColumn,
  Column,
} from 'typeorm';

import { Teacher } from './teacher.entity';
import { AcademicOffering } from 'src/academic/academic-offering/entities/academic-offering.entity';

@Entity('teacher_assignments')
@Unique(['teacher', 'academicOffering'])
export class TeacherAssignment {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => Teacher, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @ManyToOne(() => AcademicOffering, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'academic_offering_id' })
  academicOffering: AcademicOffering;
}