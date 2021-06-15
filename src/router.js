import { createRouter, createWebHistory } from 'vue-router'
import ToDoPage from './components/todo/ToDoPage';
import QuotesPage from './components/quotes/QuotesPage';
import TicTacToePage from './components/tictactoe/TicTacToePage'
import CalcPage from './components/calc/CalcPage'
import PublicLibPage from './components/public-lib/PublicLibPage'

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
        },
        {
            path: '/calc',
            name: 'Calc',
            component: CalcPage
        },
        {
            path: '/public-lib',
            name: 'PublicLib',
            component: PublicLibPage
        }
    ]
});

export default AppRouter;