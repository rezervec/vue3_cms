<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" v-model="email" />
        <small class="helper-text invalid" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" v-model="password" />
        <small class="helper-text invalid" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</small>
        <label for="password">Пароль</label>
      </div>
      <div class="input-field">
        <input id="name" type="text" class="validate" v-model="name" />
        <small class="helper-text invalid" v-if="v$.name.$error">Введите ваше имя</small>
        <label for="name">Имя</label>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
   name: 'register',
    data: () => ({
      v$: useValidate(),
      email: '',
      password: '',
      name: '',
      agree: false
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)},
      name: {required},
      agree: {checked: v => v}
    },
    methods: {
      submitHandler() {
        this.v$.$validate();

        if (!this.v$.$error) {

          const formData = {
            email: this.email,
            password: this.password,
            name: this.name
          }
          console.log(formData)
          this.$router.push('/');
        }
      }
    }
}
</script>