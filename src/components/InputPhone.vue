<template >
    <label for="phone">Número de Teléfono</label>
    <input type="text" v-model="phone" :style="{ border: errorPhone ? '2px solid #FF5E5E' : '' }">
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props:{
        phoneNumber: String
    },
    setup() {
        return {
            phone: ref('')
        };
    },
    mounted() {
        this.phone = this.phoneNumber
    },
    watch: {
        phoneNumber(newPhoneNumber) {
            this.$emit('update:phoneNumber', newPhoneNumber)
        }
    }
});
</script>
<style scoped>
    
</style>