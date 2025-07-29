<!-- src/components/Login.vue -->
<template>
  <div class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black font-orbitron">
    <div>Connecte-toi avec n'importe quel Nom d'utilisateur</div>
    <div class="bg-glass neon-border p-8 rounded-xl text-cyan-300 w-full max-w-sm">
      <h2 class="text-2xl font-bold text-center mb-6 neon-text">🔐 Connexion</h2>
      <input v-model="username" type="text" placeholder="Nom d'utilisateur"
             class="w-full p-3 mb-4 rounded bg-transparent border border-cyan-300 text-cyan-200 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
      <input v-model="password" type="password" placeholder="Mot de passe"
             class="w-full p-3 mb-4 rounded bg-transparent border border-cyan-300 text-cyan-200 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
      <button @click="login"
              class="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded transition duration-200">Se connecter</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const emit = defineEmits(['login-success'])

const login = () => {
  // Pas de vérification, login réussi direct
  emit('login-success')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

.neon-border {
  border: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 20px #00ffff;
}

.bg-glass {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.6);
}

.neon-text {
  text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
}
</style>
