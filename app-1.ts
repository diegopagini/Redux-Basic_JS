/** @format */

// Una Accion es una simple interfaz, con un type obligatorio, y un payload opcional.
interface Action {
	type: string;
	payload?: any;
}

// const incrementadorAction: Action = {
// 	type: 'INCREMENTAR',
// };

// Un reducer es una funcion que recibe siempre, un estado y una acccion. O State y Action.
function reducer(state = 10, action: Action) {
	if (action.type === 'INCREMENTAR') {
		return (state += 1);
	}
	return state;
}

// Usar el Reducer

//Una Accion es un modificador del stado o State.
const incrementadorAction: Action = {
	type: 'INCREMENTAR',
};

console.log(reducer(10, incrementadorAction));
