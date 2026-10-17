import { Entity, Column } from 'typeorm';

@Entity('subjects')
export class Subject {
  @Column({primary: true, generated: true})
  id: number;

  @Column({ length: 100, unique: true })
  name: string;
}