<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { useNewClientEventStream } from "./composables/useNewClientEventStream";
import type { NewClientEvent } from "./composables/useNewClientEventStream";

const newClients = ref<NewClientEvent[]>([]);

const subscription = useNewClientEventStream().subscribe((newClient) => {
  newClients.value.push(newClient);
});

onUnmounted(() => subscription.unSubscribe());
</script>

<template>
  <ul>
    <li v-for="newClient in newClients" :key="newClient.id">
      {{ newClient.lastName }}
    </li>
  </ul>
</template>
