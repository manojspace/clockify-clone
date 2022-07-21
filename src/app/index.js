import React, {useState, useEffect} from 'react';
import Projects from './Projects';
import './style.css';

function MainApp() {
	const [counter, setCounter] = useState(0);
	const [task, setTask] = useState("");
	const [isStarted, setIsStarted] = useState(false);
	const [timers, setTimers] = useState([]);
	const [counterDisplay, setCounterDisplay] = useState("00:00:00");

	useEffect(() => {
		if (isStarted) {
			setTimeout(() => {
				setCounter(prev => prev + 1);
			}, 1000);
		} else {
			setCounter(0);
		}
	}, [counter, isStarted])

	useEffect(() => {
		if (counter) {
			let hrs = parseInt(counter / (60 * 60));
			let minutes = parseInt(counter / 60);
			let seconds = parseInt(counter % 60);
			if (hrs < 10) {
				hrs = "0" + hrs;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			setCounterDisplay((hrs ? hrs : "00") + ":" + (minutes ? minutes : "00") + ":" + (seconds ? seconds : "00"));
		} else {
			setCounterDisplay("00:00:00");
		}
	}, [counter]);

	const handleStart = () => {
		setIsStarted(true);
		setCounter(prev => prev + 1);
	}

	const handleStop = () => {
		const newList = [...timers];
		newList.push({
			task: task ? task : "untitled",
			project: 'new',
			timer: counterDisplay
		});
		setTimers(newList);
		setIsStarted(false);
		setTask("");
	}
	return (
		<div className="content">
			<div className="timer">
				<input type="text" className="input" value={task} onChange={(event) => setTask(event.target.value)}/>
				<span className="project-button">
					<span className="plus">+</span>
					<span>Project</span>
				</span>
				<span className="counter">{counterDisplay}</span>
				{
					isStarted ?
					<button onClick={handleStop}>STOP</button>
					:
					<button onClick={handleStart}>START</button>
				}
			</div>
			<Projects timers={timers} />
		</div>
	)
}

export default MainApp;