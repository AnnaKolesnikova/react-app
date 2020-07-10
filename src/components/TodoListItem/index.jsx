import React from 'react';
import {
    List, ListItem, ListItemGraphic, ListItemText,
    Checkbox
} from 'mdc-react';

import DBContext from '../../context/db';

export default function TodoListItem({ todo, onStatusChange: onCompleteChange }) {

    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox 
                    checked={todo.completed}
                    onChange={onCompleteChange}
                />
            </ListItemGraphic>

            <ListItemText>
                {todo.title}
            </ListItemText>
        </ListItem>
    );
}