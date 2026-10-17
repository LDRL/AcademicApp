import { AcademicOffering } from 'src/academic/academic-offering/entities/academic-offering.entity';
import { EvaluationPeriod } from 'src/evaluation/evaluation-period/entities/evaluation-period.entity';
import { EvaluationType } from 'src/evaluation/evaluation-type/entities/evaluation-type.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('assignments')
export class Assignment {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => AcademicOffering, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'academic_offering_id' })
  academicOffering: AcademicOffering;

  @ManyToOne(() => Teacher, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @ManyToOne(() => EvaluationPeriod, {
    nullable: true,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'evaluation_period_id' })
  evaluationPeriod: EvaluationPeriod | null;

  @ManyToOne(() => EvaluationType, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'evaluation_type_id' })
  evaluationType: EvaluationType;

  @Column({ length: 150 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'timestamp', nullable: true, name: 'assigned_at' })
  assignedAt: Date | null;

  @Column({ type: 'timestamp', nullable: true, name: 'due_date' })
  dueDate: Date | null;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    name: 'max_score',
  })
  maxScore: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}