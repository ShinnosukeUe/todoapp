<template>
    <div>
      <button @click="signIn">Google でログイン</button>
      <button @click="signOut">ログアウト</button>
      <p v-if="user">Logged in as: {{ user.displayName }}</p>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  // import { googleSignIn, googleSignOut } from '~/firebase';
  
  const user = ref(null);
  
  const signIn = async () => {
    try {
      user.value = await googleSignIn();
    } catch (error) {
      console.error('Sign-in error', error);
    }
  };
  
  const signOut = async () => {
    try {
      await googleSignOut();
      user.value = null;
    } catch (error) {
      console.error('Sign-out error', error);
    }
  };
  </script>
  