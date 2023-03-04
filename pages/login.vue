<template>
  <div class="container my-12">
    <div class="flex">
      <div class="mx-auto md:basis-4/12">
        <Form :validation-schema="validationSchema" @submit="onSubmit">
          <h3 class="mb-8">Login</h3>
          <div class="mb-6 flex flex-col">
            <label for="" class="mb-2 text-gray-900"> Email address </label>
            <Field
              name="email"
              type="text"
              class="input"
              placeholder="example@mail.com"
            />
            <ErrorMessage name="email" class="mt-2 capitalize text-red-500" />
          </div>
          <div class="mb-6 flex flex-col">
            <label for="" class="mb-2 text-gray-900"> Password </label>
            <Field
              name="password"
              type="text"
              class="input"
              placeholder="Your password"
            />
            <ErrorMessage
              name="password"
              class="mt-2 capitalize text-red-500"
            />
          </div>
          <button
            class="label flex w-full justify-center rounded-lg bg-primary-500 py-3 text-white"
          >
            Login
          </button>
          <div class="my-6 text-center">
            <p class="text-sm text-gray-900">
              Don’t have an account?
              <a href="/signup" class="label-secondary text-primary-500"
                >Sign Up</a
              >
            </p>
          </div>
          <div class="relative my-6 text-center">
            <span
              class="p-small ext-gray-500 relative z-10 bg-white p-2 text-gray-500"
            >
              or</span
            >
            <div
              class="content absolute top-1/2 left-0 -z-10 h-0.5 w-full translate-y-1/2 bg-outline-2"
            ></div>
          </div>
          <div class="my-6 text-center">
            <button
              class="label-secondary flex w-full items-center justify-center rounded-lg border border-outline-2 py-3 text-gray-900"
            >
              <span class="mr-2">
                <img src="@/assets/icons/google-colored.svg" alt="" />
              </span>
              Authorize with Google
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ErrorMessage, Form, Field, configure } from 'vee-validate'
import * as yup from 'yup'

configure({
  validateOnInput: true,
})
const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
})

function onSubmit(value) {
  console.log(JSON.stringify(value, null, 2))
}
</script>
