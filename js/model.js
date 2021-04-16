export default class Model {
	constructor() {
		this.view = null
		this.todos = JSON.parse(localStorage.getItem('todos'))
		if (!this.todos || this.todos.length < 1){
			this.todos = [
				{
					id: 0,
					title: 'Learn JS',
					description: 'Watch JS Tutorials',
					completed: false
				}
			]
		this.currentId = 1
		} else {
			this.currentId = this.todos[this.todos.length - 1].id + 1
		}
	}

	setView(view) {
		this.view = view
	}

	save(){
		localStorage.setItem('todos', JSON.stringify(this.todos))
	}

	getTodos() {
		return this.todos.map(todo => ({...todo}))
	}

	findTodo(id){
		return this.todos.findIndex((todo) => todo.id === id)
	}

	toggleCompleted(id){
		const index = this.findTodo(id)
		this.todos[index].completed = !this.todos[index].completed		
		this.save()
	}

	addTodo(title, description){		
		const todo = {
			id: this.currentId++,
			title,
			description,
			completed: false
		}
		
		this.todos.push(todo)
		console.log(this.todos)

		this.save()
		// Esto va a devolver un clon de mi objeto
		return {...todo}
	}

	editTodo(id, values){
		const index = this.findTodo(id)
		Object.assign(this.todos[index], values)
		this.save()		
	}

	removeTodo(id) {
		const index = this.findTodo(id)		
		this.todos.splice(index, 1)
		this.save()
	}
}