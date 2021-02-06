
var app = new Vue({
    el:"#app",
    data:{
        msg:"",
        msgList:["吃饭"]
    },
    methods:{
        // 回车添加事件
        add:function(){
            this.msgList.push(this.msg);
            this.msg="";
        },
        // 移除单条事件
        remove:function(idx){
            this.msgList.splice(idx,1);
        },
        // 清空所有事件
        clear:function(){
            this.msgList=[];
        }
            
        
    }
})