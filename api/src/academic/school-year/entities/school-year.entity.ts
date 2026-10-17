import {
  Entity,
  Column,
} from 'typeorm';

@Entity('school_years')
export class SchoolYear {
  @Column({primary: true, generated: true})
  id: number;

  @Column({ length: 20, unique: true })
  name: string; // 2026

  @Column({ type: 'date', name: 'start_date' })
  startDate: string;

  @Column({ type: 'date', name: 'end_date' })
  endDate: string;

  @Column({ default: false })
  active: boolean;
}