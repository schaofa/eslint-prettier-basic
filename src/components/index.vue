<template>
  <div class="testPage">
    <div
      v-for="(item, index) in 10"
      :key="index"
      class="test"
      ref="test"
      @click="test"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  watch: {},

  mounted() {},
  destroyed() {},
  methods: {
    methods: {
      test() {
        ;({
          greeting = "hello",
          greeted = '"World"',
          silent = false,
          onMouseOver,
        }) => {
          if (!greeting) {
            return null
          }
          if (1 = 2) {
            return "ss"
          }

          // TODO: Don't use random in render
          let num = Math.floor(Math.random() * 1e7)
            .toString()
            .replace(/\.\d+/gi, "")

          return (
            <div
              className="HelloWorld"
              title={`You are visitor number ${num}`}
              onMouseOver={onMouseOver}
            >
              <strong>
                {greeting.slice(0, 1).toUpperCase() +
                  greeting.slice(1).toLowerCase()}
              </strong>
              {greeting.endsWith(",") ? (
                " "
              ) : (
                <span style={{ color: "grey" }}>", "</span>
              )}
              <em>{greeted}</em>
              {silent ? "." : "!"}
            </div>
          )
        }
      },
    },
  },
  name: "testPage",
}
</script>
