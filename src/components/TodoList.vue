<script setup>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { todosRef } from '../services/firebase';

const db = todosRef.firestore

const todos = useCollection(collection(db, 'todos'))
</script>

<template>
    <div>
        <h1>Todo List</h1>
        <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
        </li>
        </ul>
    </div>
</template>
