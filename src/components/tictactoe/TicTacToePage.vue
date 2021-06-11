<template>
    <div class="tictactoe-wrapper">
        <h1>Tic-Tac-Toe</h1>
        <span>Current Player: {{ player }}</span>
        <table>
            <tr v-for="(n, i) in 3" :key="i">
                <td v-for="(n, j) in 3" :key="j">
                    <Field @toggled="toggled(i, j)" :player="board[i][j]"/>
                </td>
            </tr>
        </table>
        <div v-if="winner !== ''" class="winner-box">
            <h1 v-if="winner !== 'draw'"> The winner is {{ player }} </h1>
            <h1 v-else>It's a draw!</h1>
            <button @click="restart">Replay</button>
        </div>
        
        
    </div>
</template>

<script>
import Field from './Field'

export default {
    components: {
        Field
    },
    data() {
        return {
            winner: '',
            player: 'o',
            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            rounds: 0
        }
    },
    methods: {
        toggled(i, j) {
            this.rounds++;
            this.board[i][j] = this.player;
            if (this.checkBoard()) {
                this.winner = this.player;
                return;
            }
            if (this.rounds >= 9) {
                this.winner = 'draw';
                return;
            }
            this.player = this.player === 'o' ? 'x' : 'o';
        },
        checkBoard() {
            console.log(this.board);
            for(let i = 0; i < 3; i++) {
                if (this.checkField(0, i) && this.checkField(1, i) && this.checkField(2, i)) {
                    return true;
                }
            }

            for(let i = 0; i < 3; i++) {
                if (this.checkField(i, 0) && this.checkField(i, 1) && this.checkField(i, 2)) {
                    return true;
                }
            }

            if (this.checkField(0, 0) && this.checkField(1, 1) && this.checkField(2, 2)) {
                return true;
            }

            if (this.checkField(0,2) && this.checkField(1,1) && this.checkField(2,0)) {
                return true;
            }

            return false;
        },
        checkField(i, j) {
            return this.board[i][j] === this.player;
        },
        restart() {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    this.board[i][j] = '';
                }
            }
            this.winner = '';
            this.rounds = 0;
        }
    }
}
</script>

<style>
.tictactoe-wrapper {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
}

</style>