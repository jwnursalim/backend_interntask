import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model'
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { identity } from 'rxjs';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        // @Body('title') title: string,
        // @Body('description') description: string,
        @Body() createTaskDto: CreateTaskDto
    ): Task {
        return this.tasksService.createTask(createTaskDto);
    }
 
    @Patch("/:id/status")
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,
        ): Task{
        return this.tasksService.updateTaskStatus(id, status);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void{
        return this.tasksService.deleteTaskById(id)
    }

    @Patch('/reset')
    resetTask(): void{
        return this.tasksService.resetTask()
    }

    @Patch('/:id/title')
    updateTaskTitle(
        @Param('id') id: string,
        @Body('title') title: string,
        ): Task{
        return this.tasksService.updateTaskTitle(id, title);
    }
    
    
    
}

