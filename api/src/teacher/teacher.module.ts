import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { TeacherAssignment } from './entities/teacher-assigment.entity';
import { AcademicModule } from 'src/academic/academic.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Teacher, TeacherAssignment]),
    AcademicModule
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],  
})
export class TeacherModule {}
