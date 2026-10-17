import { Entity, Column } from 'typeorm';

@Entity('evaluation_types')
export class EvaluationType {
  @Column({primary: true, generated: true})
  id: number;

  @Column({ length: 50, unique: true })
  name: string;
}