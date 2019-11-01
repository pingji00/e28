<template>
  <div>
    <p>{{ welMessage }}</p>
    <input type="text" v-model.lazy="playerName" />
    <button>Enter</button>
    <div v-if="playerName">
      <p>Player {{ playerName }}! Please choose the difficulty Levels.</p>
      <select name="level" id="level" v-model="level">
        <option v-for="(value, name) in levelOptions" v-bind:key="name">{{ name }}</option>
      </select>
    </div>
    <div>
      <div v-if="gamebody">
        <p>
          You choosed level of {{ level }}.
          <br />
          I have a number in my mind. It's a integer that between 1 to
          {{ levelNumber }}. Now try to guess it
        </p>
        <p class="guess-times">
          You can guess
          <span class="chance">{{ chance }}</span>
          more time{{ timeplural }}
        </p>
        <input
          type="number"
          id="filledNumber"
          placeholder="Give me a number..."
          v-model.number.lazy="inputNumber"
        />
        <button v-on:click="guess">guess</button>
      </div>
      <ul v-bind:class="missed ? wrongClass : correctClass">
        <li v-for="result in results" v-bind:key="result">{{ result }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      welMessage: "Hi, there! Please enter your name",
      playerName: null,
      levelOptions: {
        Easy: 10,
        Medium: 50,
        Hard: 100
      },
      levelNumber: "",
      levelOptionsNames: [],
      level: "",
      randomNumber: 0,
      chance: 6,
      inputNumber: null,
      timeplural: "s",
      inputs: [],
      result: "",
      results: [],
      gamebody: false,
      missed: true,
      wrongClass: "wrong",
      correctClass: "correct"
    };
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    winner: {
      type: String,
      default: ""
    }
  }
};
</script>