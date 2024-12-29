<script>
import { h } from 'vue'

export default {
  props: {
    size: String,
    styling: String,
    text: String
  },
  setup(props, { slots }) {
    let style = props.styling

    switch (props.size) {
      case 'h1':
        style = style + ' text-4xl'
        break
      case 'h2':
        style = style + ' text-3xl'
        break
      case 'h3':
        style = style + ' text-2xl'
        break
      case 'h4':
        style = style + ' text-xl'
        break
      case 'h5':
        style = style + ' text-lg'
        break
      default:
        style = style + ' text-4xl'
        break
    }

    return () => [h(props.size, { class: style }, slots.default())]
  }
}
</script>
