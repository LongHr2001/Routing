import React from 'react';
import './App.css';

class Student {
	constructor(id, name, score) {
		this.id = id;
		this.name = name;
		this.score = score;
	}
	
	toString() {
		return "{Id: " + this.id + ", Name: " + this.name + ", Score: " + this.score + "}";
	}
}

var an = new Student(1, "An", 10);
var binh = new Student(2, "Binh", 9);
var cuc = new Student(3, "Cuc", 8);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [an, binh, cuc],
		}
	}
	
	render() {
		var id = parseInt(window.location.pathname.slice(1));
		if (id >= 0 && id <= this.state.students.length) {
			return (
				<div className="App">
				  <header className="App-header">
					<p>
					{this.state.students[id - 1].toString()}
					</p>
				  </header>
				</div>
			);
		} else {
			return (
				<div className="App">
				  <header className="App-header">
					<p>
					Can't find student Id.
					</p>
				  </header>
				</div>
			);
		}
	}
}

export default App;
