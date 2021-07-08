// react
import { React, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

// project
import { About, AddTask, Footer, Header, TaskList } from './components'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }

    const editTask = async (taskEdit) => {
        const res = await fetch(`http://localhost:5000/tasks/${taskEdit.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(taskEdit),
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === taskEdit.id
                    ? {
                          ...task,
                          text: data.text,
                          date: data.date,
                          reminder: data.reminder,
                      }
                    : task
            )
        )
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task))
        )
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    return (
        <Router>
            <div className="container">
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            {showAddTask && <AddTask onAdd={addTask} />}
                            {tasks.length > 0 ? (
                                <TaskList
                                    tasks={tasks}
                                    onDelete={deleteTask}
                                    onToggle={toggleReminder}
                                    onEdit={editTask}
                                />
                            ) : (
                                'No Tasks To Show'
                            )}
                        </>
                    )}
                />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
