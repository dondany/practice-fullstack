<template>
  <div class="container">
    <div class="tictactoe-wrapper">
      <h1 class="header">Tic-<span class="tac">Tac</span>-Toe</h1>
      <span
        >Current Player:
        <i v-if="player === 'x'" class="fas fa-times" />
        <i v-if="player === 'o'" class="far fa-circle" />
      </span>
      <table ellspaing="0">
        <tr v-for="(n, i) in 3" :key="i">
          <td v-for="(n, j) in 3" :key="j">
            <Field @toggled="toggled(i, j)" :player="board[i][j]" />
          </td>
        </tr>
      </table>
      <div class="winner-wrapper">
        <div v-if="winner !== ''" class="winner-box">
          <h1 v-if="winner !== 'draw'">
            The winner is
            <i v-if="player === 'x'" class="fas fa-times" />
            <i v-if="player === 'o'" class="far fa-circle" />
          </h1>
          <h1 v-else>It's a draw!</h1>
          <button class="btn-replay" @click="restart">Replay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field from "./Field";

export default {
  components: {
    Field,
  },
  data() {
    return {
      winner: "",
      player: "o",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      rounds: 0,
    };
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
        this.winner = "draw";
        return;
      }
      this.player = this.player === "o" ? "x" : "o";
    },
    checkBoard() {
      for (let i = 0; i < 3; i++) {
        if (
          this.checkField(0, i) &&
          this.checkField(1, i) &&
          this.checkField(2, i)
        ) {
          return true;
        }
      }

      for (let i = 0; i < 3; i++) {
        if (
          this.checkField(i, 0) &&
          this.checkField(i, 1) &&
          this.checkField(i, 2)
        ) {
          return true;
        }
      }

      if (
        this.checkField(0, 0) &&
        this.checkField(1, 1) &&
        this.checkField(2, 2)
      ) {
        return true;
      }

      if (
        this.checkField(0, 2) &&
        this.checkField(1, 1) &&
        this.checkField(2, 0)
      ) {
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
          this.board[i][j] = "";
        }
      }
      this.winner = "";
      this.rounds = 0;
    },
  },
};
</script>



<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #343535;
}
.tictactoe-wrapper {
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0);
}

.header {
  font-size: 2.5rem;
}

table {
  border-collapse: separate;
  border-spacing: 0 0;
}

td,
tr {
  padding: 5px;
}

.fa-times {
  color: #ffb703;
}

.fa-circle {
  color: #ffb703;
}

.tac {
  color: #ffb703;
}

.btn-replay {
  color: #fff;
  background-color: #ffb703;
  border: none;
  padding: 10px;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
}

.btn-replay:hover {
  transform: scale(1.1);
}

.btn-replay:active {
  transform: scale(1);
}
</style>