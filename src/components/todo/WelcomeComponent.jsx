import {Link} from 'react-router-dom'

function WelcomeComponent() {

    return (
			<div className="WelcomeComponent">
				<h1>Welcome!</h1>
				<div>
					To Manage your todos - <Link to="/todos">Go here</Link>
				</div>
				<div>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vRbG9QNWjhITjRqr255XDDGHBc1l9-ne_tdpyA_N5vFxsDr-9I1O3RTo9uVAmyoCjjJ9o3ti09bO7ge/embed?start=true&loop=true&delayms=60000"
						frameborder="5"
						width="1080"
						height="649"
						allowfullscreen="true"
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
					></iframe>
				</div>
				<div>
					<iframe
						src="https://docs.google.com/presentation/d/e/2PACX-1vStLrIW8wlZWOTjobivz3qCQFyjIQze5UW87nKWstzLj0cxUWHCWWy1asdJEqKMwyaGtnun4L5GKL5-/embed?start=true&loop=true&delayms=60000"
						frameborder="5"
						width="1080"
						height="649"
						allowfullscreen="true"
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
					></iframe>
				</div>
			</div>
		);
}

export default WelcomeComponent