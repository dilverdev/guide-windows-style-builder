import theme from '@nuxt/content-theme-docs'

export default theme({
  telemetry: false,
  docs: {
    primaryColor: '#0B94EC'
  },
  css : [
    __dirname  +  '/assets/style.scss' ,
  ] ,
  // content: {
  //   liveEdit: false
  // }
})
