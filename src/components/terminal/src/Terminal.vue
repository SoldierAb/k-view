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
  components: {},
  props: {
    socketUrl: {
      type: String
    },
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
    type:{
      type:String,
      default(){
        return 'terminal'
      }
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
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
      const { width, height } = this,
        sendObj = {
          type: 2, // 2前端输入数据包，3后端返回数据包，4:调整窗口大小
          msg: "",
          size: {
            width,
            height
          }
        };

      wsInstance = new WebSocket(this.socketUrl);

      terminalInstance = new Terminal({
        cols:120
      });

      terminalInstance.open(box);

      wsInstance.onopen = () => {
        if(this.type==='type') wsInstance.send(JSON.stringify({ ...sendObj, type: 4 }));
      };

      wsInstance.onmessage = e => {
        const { data } = e, //接收到的数据
          { type, msg } = JSON.parse(data);
        terminalInstance[`${this.type==='terminal'?'write':'writeln'}`](msg);
      };

      wsInstance.onerror = e => {
        console.error("wsInstance error: ", e);
        this.$message({
          type: "error",
          message: `${JSON.stringify(e)}`
        });
      };

      wsInstance.onclose = e => {
        console.log('close ws');
        this.$emit("close");
      };

      terminalInstance.on("data", e => {
        sendObj.msg = `${e}`;
        wsInstance.send(JSON.stringify(sendObj));
      });

      // terminalInstance.on("keydown", e => {
      //   const { key } = e;

      //   const keyAction = new Map()
      //     .set("Enter", () => {
      //       sendObj.msg=`${str}\r`;
      //       console.log("发送命令行：  ", sendObj);
      //       wsInstance.send(JSON.stringify(sendObj));
      //       terminalInstance.writeln("");
      //     })
      //     .set("Backspace", () => {
      //       console.log("delete");
      //     });
      //   keyAction.get(key) && keyAction.get(key)();
      // });

      terminalInstance.on("blur", () => {});

      terminalInstance.on("focus", () => {});

      this.$emit('init',{wsInstance,terminalInstance});
    }
  },

  beforeDestroy() {
    terminalInstance && terminalInstance.dispose();
  }
};
</script>