import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model'
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: "0",
            title: "Workout",
            status: TaskStatus.OPEN
        },
        {
            id: "1",
            title: "Reading",
            status: TaskStatus.OPEN
        },
        {
            id: "2",
            title: "Eating",
            status: TaskStatus.DONE
        }
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    // return task by id
    getTaskById(id: string): Task{
        return this.tasks.find((task) => task.id === id);
    }

    deleteTaskById(id: string): any{

        this.tasks = this.tasks.filter((task) =>
            task.id !== id
        );
    }

    updateTaskStatus(id: string, status: TaskStatus){
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

    updateTaskTitle(id: string, title: string){
        const task = this.getTaskById(id);
        task.title = title;
        return task;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto;
        var id_1 = this.tasks.length

        const task: Task = {
            id: id_1.toString(),
            title,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);

        return task
    }

    resetTask(): any{
        this.tasks = []
    }
}
