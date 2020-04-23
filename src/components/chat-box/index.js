import ChatBox from './src/ChatBox'

ChatBox.install = Vue =>{
    Vue.component(ChatBox.name,ChatBox);
}

export default ChatBox;