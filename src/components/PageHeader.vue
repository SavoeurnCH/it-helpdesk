<template><div class="page-head"><div><p class="eyebrow">IT SUPPORT</p><h1>{{ title }}</h1><p v-if="subtitle" class="muted">{{ subtitle }}</p></div><slot /></div></template>
<script setup>defineProps({ title: String, subtitle: String })</script>
