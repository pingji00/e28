<template>
    <form @submit.prevent="submit">
        <h1>If you like us, please subscirbe our newsletter!</h1>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <label class="form__label">Name</label>
            <input class="form__input" v-model.trim="$v.name.$model"/>
        </div>
        <div class="error" v-if="!$v.name.required">Name is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>


        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label class="form__label">email</label>
            <input class="form__input" v-model.trim="$v.email.$model"/>
        </div>
        <div class="error" v-if="!$v.email.required">email is required</div>
        <div class="error" v-if="!$v.email.email">Please use valid email addresses</div>




        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Subscribe!</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      age: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
        required,
        email
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
    font: normal bold 0.5em/1.2 sans-serif;
    color: rebeccapurple;
}
.form-group {
    padding: 0.5em 0 ;
}
.form-group--error  {
    margin-top: 0.2em;
    background-color: aquamarine;
}
button {
    border: none;
    border-radius: 5px;
    background-color: blue;
    color: white;
    padding: 0.5em 2em 0.5em;
    margin-top: 1em;
    text-transform: uppercase;
    font-size: 18px;
}
</style>