<template>
  <!-- リアクティブなコードにサンプル -->
  <div>
      <p>{{ counter }}</p>
      <button id="count_up" @click="countUp()" type="button">count</button>
  </div>

  <br/>
  <div>
      <!-- TODO - ここにtitleを入れる -->
      <input class="input" type="text"> 
      <!-- TODO - ここにbodyを入れる -->
      <input class="input" type="text">
      <!-- TODO - handleSubmitをクリックしたときに、TODOタスクをtodolistに追加する -->
      <button id="count_up" @click="handleSubmit()" type="button">submit</button>
  </div>
</template>
<script setup lang="ts">
interface Todo { // → 型定義もできてて素晴らしい👏
  id: number;
  title: string;
  isComplete: boolean;
  body: string;
}
let todolist = ref<Todo[]>([]) // これはとてもいい書き方です！👍

let titele = ref('') // → titleの間違い？型はstring
let body = ref('') // → 型はstring
let nextTodo = ref(1) // → 型はnumber

const handleSubmit = () => {
  todolist.unshift({
      id: nextTodoId.value,
      title: title.value,
      body: body.value,
      isComplete: false
  })
}

const counter = ref<number>(0)

const countUp = () => {
  counter.value++;
}

</script>
<style scope>
#count_up {
  background-color: #04AA6D;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid red;
  border-color: black;
}
</style>

