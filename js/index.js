import Model from './model.js'
import View from './view.js'

// No ejecuta js hasta que todo el DOM haya cargado por completo
document.addEventListener('DOMContentLoaded', () => {
	const model = new Model()
	const view = new View()

	model.setView(view)
	view.setModel(model)

	view.render()
})

// serve -l 3000