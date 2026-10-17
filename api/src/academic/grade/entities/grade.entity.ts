import { Entity, Column } from 'typeorm';

@Entity('grades')
export class Grade {
  @Column({primary: true, generated: true})
  id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ length: 10 })
  abbreviation: string;

  @Column({ nullable: true })
  description: string; // Una breve descripción opcional

}