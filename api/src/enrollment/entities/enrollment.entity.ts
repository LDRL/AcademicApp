import { SchoolGroup } from 'src/academic/school-group/entities/school-group.entity';
import { Student } from 'src/student/entities/student.entity';
import {
  Entity,
  ManyToOne,
  Unique,
  JoinColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';


@Entity('enrollments')
@Unique(['student', 'schoolGroup'])
export class Enrollment {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => Student, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => SchoolGroup, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'school_group_id' })
  schoolGroup: SchoolGroup;

  @CreateDateColumn({ name: 'enrolled_at' })
  enrolledAt: Date;
}