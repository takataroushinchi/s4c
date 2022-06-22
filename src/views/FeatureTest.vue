<template>
  <div>FeatureTest</div>
  <div>{{ count }}</div>
  <button @click="increment">+</button>
  {{ dataRef }}
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const dataRef = ref(null)

// Vuex
const store = useStore()

const count = computed(()=>{
  return store.state.count
})

const increment = () => {
  store.commit('increment')
}

// api fetch
onMounted(()=>{
  console.log('onMounted')
  // fetch('https://ssss.microcms.io/api/v1/blog',{
  //   headers: {
  //     'X-MICROCMS-API-KEY': $config.apiKey
  //   },
  // })
  // .then(response => response.json())
  // .then(data => dataRef.value = data);
})
</script>
