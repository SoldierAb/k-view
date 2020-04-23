import ChatItem from './src/ChatItem'

ChatItem.install = Vue =>{
    Vue.component(ChatItem.name,ChatItem);
}

export default ChatItem