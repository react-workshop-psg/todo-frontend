import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

import './TodoApp.css'


export default function TodoApp() {
	return (
		<div className="TodoApp">
				<BrowserRouter>
					<HeaderComponent />
					<Routes>
						<Route path="/" element={<WelcomeComponent />} />
						<Route path="/todos" element={<ListTodosComponent />} />
						<Route path="/todos/:id" element={<TodoComponent />} />
						<Route path="*" element={<ErrorComponent />} />
					</Routes>
				</BrowserRouter>
		</div>
	);
}
