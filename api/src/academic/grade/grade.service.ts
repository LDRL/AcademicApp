import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Grade } from './entities/grade.entity';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
  ) {}

  async create(body: any) {
    const grade = this.gradeRepository.create(body);
    return await this.gradeRepository.save(grade);
  }

  async findAll() {
    return await this.gradeRepository.find();
  }

  async findOne(id: number) {
    const grade = await this.gradeRepository.findOne({
      where: { id },
    });

    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }

    return grade;
  }

  async update(id: number, body: any) {
    const grade = await this.findOne(id);

    Object.assign(grade, body);

    return await this.gradeRepository.save(grade);
  }

  async remove(id: number) {
    const grade = await this.findOne(id);

    await this.gradeRepository.remove(grade);

    return { message: 'Grade deleted successfully' };
  }
}