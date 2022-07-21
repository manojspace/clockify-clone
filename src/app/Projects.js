function Projects({timers}) {
	return (
		<div className="list" style={{marginTop: '1rem'}}>
		{
			!!timers.length &&
			timers.map((item, index) => {
				return <div className="row">
					<span className="columns task">{item.task}</span>
					<span className="columns project">{item.project}</span>
					<span className="columns time">{item.timer}</span>
				</div>
			})
		}
		</div>
	)
}

export default Projects;