const app = new Vue({
  el: "#app",
  data() {
  	return {
    	task: '',
    	tasks: [],
      tasksDone: []
    };
  },
  methods: {
  	addTask() {
    	if (this.task.trim() !== '') {
      	this.tasks.push(this.task);
        this.task = '';
      } else {
      	alert('Warning: The task cannot be empty');
      }
    },
    removeTask(selectedTask) {
    	this.tasks = this.tasks.filter(task => task !== selectedTask);
      this.tasksDone.push(selectedTask);
    }
  }
});
