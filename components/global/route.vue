<template>
  <div class="g-route my-3">
    <div class="flex">
      <span class="g-route__action relative flex-shrink-0 w-6 h-6 cursor-pointers block" @click="copyRoute">
        <span
            class="g-route__number inline-flex items-center justify-center bg-gray-700 bg-opacity-75 rounded-full w-full h-full">
          <span class="text-sm font-semibold text-white">
            {{ number }}
          </span>
        </span>

        <span
            class="g-route__copy opacity-0 absolute top-0 left-0 inline-flex items-center justify-center bg-gray-700 bg-opacity-75 rounded-full w-full h-full">
          <ClipboardIcon size="16"/>
        </span>

        <span
            class="g-route__copy-success absolute top-0 left-0 inline-flex items-center justify-center bg-green-600 rounded-full w-full h-full"
            :class="is_copy ? 'opacity-100' : 'opacity-0'">
          <CheckIcon size="14"/>
        </span>
      </span>

      <span class="flex-1 pl-1" ref="route">{{ src }}</span>
    </div>
  </div>
</template>

<script>
import {ClipboardIcon, CheckIcon} from 'vue-feather-icons'

export default {
  name: "GRoute",
  components: {
    ClipboardIcon,
    CheckIcon,
  },
  props: {
    src: {
      type: String,
      required: true,
      default: 'path > path'
    },
    number: {
      type: [Number, String],
      required: true,
      default: 0
    }
  },
  data: () => ({
    is_copy: false
  }),
  methods: {
    copyRoute() {
      this.is_copy = true
      const range = document.createRange()
      range.selectNode(this.$refs.route)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
      document.execCommand("copy")
      window.getSelection().removeAllRanges()

      setTimeout(() => {
        this.is_copy = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.g-route {
  &__action {
    &:hover {
      .g-route {
        &__number {
          @apply opacity-0;
        }

        &__copy {
          @apply opacity-100;
        }
      }
    }
  }
}
</style>