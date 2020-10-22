import 'alpinejs'

window.data = function () {
	return {
		todos: [],
		newTodoTitle: '',
		get activeTodo() {
			return this.todos.filter(todo => todo.completed !== true);
		},
		get activeTodosCount(){
			return this.activeTodo.length
		},
		get completedTodo() {
			return this.todos.filter(todo => todo.completed === true);
		},
		get completedTodosCount(){
			return this.activeTodo.length
		},
		addTodo() {
			if (this.newTodoTitle.trim()) {
				this.todos.push({
					id: Date.now(),
					title: this.newTodoTitle,
					completed: false
				})
				this.newTodoTitle = ''
			}
		},
		deleteTodo(todo) {
			this.todos.splice(
				this.todos.indexOf(todo), 1
			)
		},
		toggleCompleted(todo) {
			todo.completed = !todo.completed
		}
	}
}
