<template lang="pug">
v-carousel(v-model='model')
  v-carousel-item(v-for='(color, i) in colors', :key='color')
    v-sheet(:color='color', height='100%', tile='')
      v-row.fill-height(align='center', justify='center')
        .text-h2
          | Slide {{ i + 1 }}
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>