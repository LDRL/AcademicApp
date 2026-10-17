import { Assignment } from 'src/evaluation/assignment/entities/assignment.entity';
import { SchoolGroup } from 'src/academic/school-group/entities/school-group.entity';
import { Subject } from 'src/academic/subject/entities/subject.entity';
import { TeacherAssignment } from 'src/teacher/entities/teacher-assigment.entity';

import {
  Entity,
  ManyToOne,
  OneToMany,
  Unique,
  JoinColumn,
  Column,
} from 'typeorm';


@Entity('academic_offerings')
@Unique(['schoolGroup', 'subject'])
export class AcademicOffering {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => SchoolGroup, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'school_group_id' })
  schoolGroup: SchoolGroup;

  @ManyToOne(() => Subject, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @OneToMany(
    () => TeacherAssignment,
    (teacherAssignment) => teacherAssignment.academicOffering,
  )
  teacherAssignments: TeacherAssignment[];

  @OneToMany(() => Assignment, (assignment) => assignment.academicOffering)
  assignments: Assignment[];
}