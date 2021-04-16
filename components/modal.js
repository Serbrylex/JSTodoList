import Alert from './alert.js'

// ctrl + p asldfjasldfj
export default class Modal {

	constructor(){		
		this.title = document.getElementById('modal-title')
		this.description = document.getElementById('modal-description')
		this.completed = document.getElementById('modal-completed')
		this.btn = document.getElementById('modal-btn')		
		this.todo = null

		this.alert = new Alert('modal-alert')
	}

	setValues(todo){
		this.todo = todo
		this.title.value = todo.title
		this.description.value = todo.description
		this.completed.value = todo.completed
	}

	onClick(callback) {
		this.btn.onclick = () => {
			if (this.title.value?.length && this.description.value?.length){								
				$('#modal').modal('toggle')				
				callback(this.todo.id, {
					title: this.title.value,
					description: this.description.value,
					completed: this.completed.checked
				})
				return;					
			}
			this.alert.show('Title and description are required')
			return;
		}
	}
}