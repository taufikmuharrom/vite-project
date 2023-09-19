<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()

const loginForm = reactive({
  email: "",
  password: "",
})

const errorMessage =ref(null)

const submit = ()=>{
    if(loginForm.email ==='admin@gmail.com' && loginForm.password ==='12345') {
        localStorage.setItem('token',12345)
        router.push('/')
        return errorMessage.value = ''
    }
    errorMessage.value = 'email and password is inccorect'
    console.log("TES")
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:px-8 sm:py-20">
              <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                ADMIN LOGIN
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="submit">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input v-model="loginForm.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="loginForm.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>              
              </form>
              <div class="text-red-500" v-if="errorMessage">{{ errorMessage }}</div>
          </div>
      </div>
  </div>
</section>
</template>

<style scoped>
</style>
