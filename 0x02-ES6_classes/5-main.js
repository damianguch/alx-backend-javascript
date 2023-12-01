import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
	evacuationWarningMessage() {
    return `evacuationWarningMessage implemented`;
		}
	}

try {
    const msg = new TestBuilding(200).evacuationWarningMessage();
		console.log(msg);
}
catch(err) {
    console.log(err.message);
}
