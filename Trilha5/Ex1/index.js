"use strict";
class TaskManager {
}
class Project extends TaskManager {
    constructor() {
        super();
        this.tasks = [];
    }
    addTask(task) {
        let exists = this.tasks.some((tasks) => tasks == task);
        if (!exists) {
            this.tasks.push(task);
            console.log("Task do projeto adicionada.");
        }
        else {
            console.log("A task já existe.");
        }
    }
    listTask() {
        return this.tasks;
    }
}
class DailyTask extends TaskManager {
    constructor() {
        super();
        this.tasks = [];
    }
    addTask(task) {
        let exists = this.tasks.some((tasks) => tasks == task);
        if (!exists) {
            this.tasks.push(task);
            console.log("Task diária adicionada;");
        }
        else {
            console.log("A task já existe.");
        }
    }
    listTask() {
        return this.tasks;
    }
}
let projeto1 = new Project();
projeto1.addTask("blablabla1");
projeto1.addTask("blablabla2");
projeto1.addTask("blablabla3");
projeto1.addTask("blablabla4");
let dailyTask = new DailyTask();
dailyTask.addTask("blablabla5");
dailyTask.addTask("blablabla6");
dailyTask.addTask("blablabla7");
dailyTask.addTask("blablabla8");
console.log(projeto1.listTask());
console.log(dailyTask.listTask());
