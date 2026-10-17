import { Assignment } from 'src/evaluation/assignment/entities/assignment.entity';
import { Student } from 'src/student/entities/student.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


export enum SubmissionStatus {
  PENDING = 'PENDING',
  SUBMITTED = 'SUBMITTED',
  GRADED = 'GRADED',
  NOT_SUBMITTED = 'NOT_SUBMITTED',
}

@Entity('assignment_submissions')
@Unique(['assignment', 'student'])
export class AssignmentSubmission {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => Assignment, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment;

  @ManyToOne(() => Student, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column({
    type: 'enum',
    enum: SubmissionStatus,
    default: SubmissionStatus.PENDING,
  })
  status: SubmissionStatus;

  @Column({ type: 'decimal', precision: 7, scale: 2, nullable: true })
  score: string | null;

  @Column({ type: 'timestamp', nullable: true, name: 'submitted_at' })
  submittedAt: Date | null;

  @Column({ type: 'text', nullable: true, name: 'file_url' })
  fileUrl: string | null;

  @Column({ type: 'text', nullable: true })
  comments: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}