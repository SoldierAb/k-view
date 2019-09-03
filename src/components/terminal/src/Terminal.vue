<template>
  <div class="terminal-container">
    <div id="terminal"></div>
  </div>
</template>

<style>
.terminal-container {
  height: 100%;
  width: 100%;
}
</style>

<script>
import "xterm/dist/xterm.css";
import { Terminal } from "xterm";

let terminalInstance, wsInstance;

export default {
  name: "terminal",
  props: {
    width: {
      type: Number,
      default() {
        return 740;
      }
    },
    height: {
      type: Number,
      default() {
        return 380;
      }
    },
  },
  data() {
    return {};
  },
  created() {
    if (!"WebSocket" in window) {
      throw new Error("websoket does not support");
    }
  },
  mounted() {
    this.$nextTick(() => {
      let terminalContainer = document.getElementById("terminal");
      this.init(terminalContainer);
    });
  },
  methods: {
    async init(box) {
      const { width, height } = this;

      terminalInstance = new Terminal({
        cols
      });

      terminalInstance.open(box);

      this.$emit("init",terminalInstance);

      // wsInstance.onopen = () => {
      //   if(this.type==='type') wsInstance.send(JSON.stringify({ ...sendObj, type: 4 }));
      // };

      // wsInstance.onmessage = e => {
      //   const { data } = e, //接收到的数据
      //     { type, msg } = JSON.parse(data);
      //   terminalInstance[`${this.type==='terminal'?'write':'writeln'}`](msg);
      // };

      // wsInstance.onerror = e => {
      //   console.error("wsInstance error: ", e);
      //   this.$message({
      //     type: "error",
      //     message: `${JSON.stringify(e)}`
      //   });
      // };

      // wsInstance.onclose = e => {
      //   console.log('close ws');
      //   this.$emit("close");
      // };

      // terminalInstance.on("data", e => {
      //   sendObj.msg = `${e}`;
      //   wsInstance.send(JSON.stringify(sendObj));
      // });


      // terminalInstance.on("blur", () => {});

      // terminalInstance.on("focus", () => {});

      // this.$emit('init',{wsInstance,terminalInstance});
    }
  },

  beforeDestroy() {
    terminalInstance && terminalInstance.dispose();
  }
};
</script>