import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Students')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un estudiante' })
  @ApiBody({ type: CreateStudentDto })
  @ApiResponse({ status: 201, description: 'Estudiante creado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Lista de estudiantes' })
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un estudiante por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del estudiante' })
  @ApiResponse({ status: 200, description: 'Estudiante encontrado' })
  @ApiResponse({ status: 404, description: 'Estudiante no encontrado' })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un estudiante' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del estudiante' })
  @ApiBody({ type: UpdateStudentDto })
  @ApiResponse({ status: 200, description: 'Estudiante actualizado' })
  @ApiResponse({ status: 404, description: 'Estudiante no encontrado' })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un estudiante' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del estudiante' })
  @ApiResponse({ status: 200, description: 'Estudiante eliminado' })
  @ApiResponse({ status: 404, description: 'Estudiante no encontrado' })
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
