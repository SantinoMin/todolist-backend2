import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudent() {
    return 'All stundents';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id of ${studentId}`;
  }

  // JSON.stringify(body) 작성하면, json형식으로 결과값을 보여줌
  @Post()
  createStudent(@Body() body) {
    return `Create Student with the follwing data ${JSON.stringify(body)}`;
  }
  @Put('/:studentId')
  updateStudent() {
    return 'Update Student By Id';
  }
}
