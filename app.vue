<template>
  <!-- リアクティブなコードにサンプル -->

  <br />
  <div>
    <h1>UeToDo</h1>
    <input v-model="title" placeholder="Enter task title" class="input" type="text">


    <input v-model="body" placeholder="Enter task details" class="input" type="text">
    <!-- TODO - handleSubmitをクリックしたときに、TODOタスクをtodolistに追加する -->
    <ul>
      <li v-for="task in todolist" :key="task.id">

        <strong>{{ task.title }}</strong>:{{ task.body }}
        <span>({{ task.isComplete ? 'Completed' : 'Not Completed' }})</span>
        <button @click="toggleCompletion(task.id)">
          {{ task.isComplete ? 'Mark as Not Completed' : 'Mark as Completed' }}
        </button>
        <button @click="handleDelete(task.id)">Delete</button>
      </li>
    </ul>
    <button id="count_up" @click="handleSubmit()" type="button">submit</button>
  </div>
</template>
<script setup lang="ts">
interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
  body: string;
}
let todolist = ref<Todo[]>([])

let title = ref('') // → 型はstring
let body = ref('') // → 型はstring
let nextTodoId = ref(1) // → 型はnumber

const handleSubmit = () => {

  console.log('Title:', title.value)
  console.log('Body:', body.value)

  if (title.value.trim() && body.value.trim()) {
    todolist.value.push({
      id: nextTodoId.value,
      title: title.value,
      body: body.value,
      isComplete: false
    });
    nextTodoId.value++;

    console.log(todolist.value)

    title.value = '';
    body.value = '';
  }

}

const handleDelete = (id: number) => {
  console.log(id)
  todolist.value = todolist.value.filter(task => task.id != id);
};
  // const index = todolist.value.findIndex(task => task.id === id);
  // if (index !== -1){
  //   todolist.value.splice(index, 1);
  // }}
const toggleCompletion = (id: number) => {
  const task = todolist.value.find(task => task.id === id);
  if (task) {
    task.isComplete = !task.isComplete;
  }
};

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
