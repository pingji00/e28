Vue.component('guess-game', {
    // Note how the data property receives a function in a Component
    data: function () {
        return {
            welMessage: "Hi, there! Please enter your name",
            playerName: null,
            levelOptions: {
                Easy: 10,
                Medium: 50,
                Hard: 100,
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
            correctClass: "correct",
        }
    },
    template: `
    <div>
        <p>{{ welMessage }}</p> <input type="text" v-model.lazy="playerName"><button>Enter</button>
        <div v-if='playerName'>
            <p>Player {{ playerName }}! Please choose the difficulty Levels.</p>
            <select name="level" id="level" v-model="level">
                <option v-for="(value, name) in levelOptions">{{ name }}</option>
            </select>
        </div>
        <div>
            <div v-if="gamebody">
                <p>You choosed level of {{ level }}. <br>I have a number in my mind. It's a integer that between 1 to
                    {{ levelNumber }}. Now try to guess it</p>
                <p class="guess-times">You can guess <span class="chance">{{ chance }}</span> more time{{ timeplural }}
                </p>
                <input type="number" id="filledNumber" placeholder="Give me a number..."
                    v-model.number.lazy="inputNumber">
                <button v-on:click="guess">guess</button>
            </div>
            <ul v-bind:class="missed ? wrongClass : correctClass">
                <li v-for="result in results">{{ result }}</li>
            </ul>
        </div>
    </div>
    `,
    watch: {
        level: function (level) {
            this.gamebody = true;

            if (this.level == "Easy") {
                this.levelNumber = this.levelOptions.Easy;
                this.randomNumber = Math.floor(Math.random() * this.levelNumber) + 1;
                console.log("The difficult level is easy. The random number is " + this.randomNumber);
            } else if (this.level == "Medium") {
                this.levelNumber = this.levelOptions["Medium"];
                this.randomNumber = Math.floor(Math.random() * this.levelNumber) + 1;
                console.log("The difficult level is Medium. The random number is " + this.randomNumber);
            } else if (this.level == "Hard") {
                this.levelNumber = this.levelOptions["Hard"];
                this.randomNumber = Math.floor(Math.random() * this.levelNumber) + 1;
                console.log("The difficult level is Hard. The random number is " + this.randomNumber);
            }
        }
    },
    methods: {
        guess: function () {

            this.chance--;

            console.log(this.chance);
            if (this.chance === 1) {
                this.timeplural = "";
            }

            this.inputs.push(this.inputNumber);

            if (this.inputNumber <= 0 || this.inputNumber > this.levelNumber) {
                this.result = "You just input " + this.inputNumber + ". Please give me a interger number between 1 and " + this.levelNumber;
                this.results.push(this.result);
            } else if (this.inputNumber > this.randomNumber) {
                this.result = "Wrong, " + this.inputNumber + " is too big";
                this.results.push(this.result);
            } else if (this.inputNumber < this.randomNumber) {
                this.result = "Wrong, " + this.inputNumber + " is too small";
                this.results.push(this.result);
            } else {
                this.gamebody = false;
                this.missed = false;
                this.result = "Congratulation, " + this.inputNumber + " is correct";
                this.results.push(this.result);
            }

            if (this.missed && this.chance < 1) {
                this.gamebody = false;
                this.result = "You've tried too many times. Take a break :) All the number you guessed are " + this.inputs + ". The correct number was " + this.randomNumber;
                this.results.push(this.result);
            }


        }
    },
});


let app = new Vue({
    el: '#app',
})  