<script setup lang="ts">
import { newClientBroadCast } from "./composables/useNewClientEventStream";

let clientName = "";

const createNewClient = () => {
  newClientBroadCast({
    id: Math.random(),
    lastName: clientName,
  });
};
</script>

<template>
  <input class="green" v-model="clientName" />
  <button @click="createNewClient">create new client</button>
</template>
