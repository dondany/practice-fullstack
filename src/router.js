import { createRouter, createWebHistory } from 'vue-router'
import ToDoPage from './components/todo/ToDoPage';
import QuotesPage from './components/quotes/QuotesPage';

const AppRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/todo',
            name: 'ToDo',
            component: ToDoPage
        },
        {
            path: '/quotes',
            name: 'Quotes',
            component: QuotesPage
        }
    ]
});

export default AppRouter;