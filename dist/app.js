// Notes:
// Use this script for development purpose only. 
// For production stage you may need some additional configurations.
// See the docs here https://vuejs.org/v2/guide/installation.html#Development-vs-Production-Mode

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
