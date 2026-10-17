import { Entity, Column } from 'typeorm';

@Entity('sections')
export class Section {
  @Column({primary: true, generated: true})
id: number;

  @Column({ length: 10 })
  name: string;
}