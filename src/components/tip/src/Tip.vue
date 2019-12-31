<template>
  <div
    v-show="show"
    class="vue-tip-container"
    :style="`left:${left}px;top:${top}px`"
  >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
             text: '',
              show: false,
              left: 0,
              top: 0,
        }
    },
}
</script>

