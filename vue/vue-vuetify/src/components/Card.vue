<template lang="pug">
v-card.mx-auto(max-width='344')
  v-img(src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', height='200px')
  v-card-title  Top western road trips 
  v-card-subtitle  1,000 miles of wonder 
  v-card-actions
    v-btn(color='orange lighten-2', text='')  Explore 
    v-spacer
    v-btn(icon='', @click='show = !show')
      v-icon {{ show ? &quot;mdi-chevron-up&quot; : &quot;mdi-chevron-down&quot; }}
  v-expand-transition
    div(v-show='show')
      v-divider
      v-card-text
        | I&apos;m a thing. But, like most politicians, he promised more than he
        | could deliver. You won&apos;t have time for sleeping, soldier, not with all
        | the bed making you&apos;ll be doing. Then we&apos;ll go with that data file!
        | Hey, you add a one and two zeros to that or we walk! You&apos;re going to
        | do his laundry? I&apos;ve got to find a way to escape.
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
