import React, { useState, useContext, useEffect } from 'react';
import { Spinner } from 'mdc-react';

import useApi from '../hooks/api';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoDetails from '../components/TodoDetails';

import './index.scss';
import AppSidenav from '../components/TodoDetails';

export default function TodoListPage({ match }) {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const { data: { lists, todos  }, actions } = useApi();

    useEffect(() => {
        actions.getListTodos(match.params.listId);
    }, [actions, match.params.listId]);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId); 
    }

    function handleUpdate(todoId, data) {
        action.updateTodo(todoId, data);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo);
    }

    const list = lists.find(list => list.id === match.params.listId);

    if (!list || !todos) return <Spinner />;

    return (
        <Layout id="todo-list-page" className="page" row>
            <TodoList
                list={list}
                todos={todos}
                onSelect={handleSelect}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />

            <TodoForm 
                onSubmit={handleSubmit}
            />
            {selectedTodo &&
                <TodoDetails 
                    todo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}
                />
            }
        </Layout>
    );
}
