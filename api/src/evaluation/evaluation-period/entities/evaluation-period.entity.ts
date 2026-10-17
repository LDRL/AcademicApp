import { Assignment } from 'src/evaluation/assignment/entities/assignment.entity';
import { SchoolYear } from 'src/academic/school-year/entities/school-year.entity';
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
  JoinColumn,
} from 'typeorm';


@Entity('evaluation_periods')
@Unique(['schoolYear', 'name'])
export class EvaluationPeriod {
  @Column({primary: true, generated: true})
  id: number;

  @ManyToOne(() => SchoolYear, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'school_year_id' })
  schoolYear: SchoolYear;

  @Column({ length: 50 })
  name: string; // First term

  @Column({ type: 'date', name: 'start_date' })
  startDate: string;

  @Column({ type: 'date', name: 'end_date' })
  endDate: string;

  @OneToMany(() => Assignment, (assignment) => assignment.evaluationPeriod)
  assignments: Assignment[];
}