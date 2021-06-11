import { createRouter, createWebHistory } from 'vue-router'
import ToDoPage from './components/todo/ToDoPage';
import QuotesPage from './components/quotes/QuotesPage';
import TicTacToePage from './components/tictactoe/TicTacToePage'

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
        },
        {
            path: '/tictactoe',
            name: 'TicTacToe',
            component: TicTacToePage
        }
    ]
});

export default AppRouter;