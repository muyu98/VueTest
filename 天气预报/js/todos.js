var app  = new Vue({
    el:"#app",
    data:{
        city:"",
        weather:[]
        },
    methods:{
        search:function(){
            var that = this;
            axios.get("http://api.tianapi.com/txapi/tianqi/index?key='天行数据私人密匙'&city="+this.city)
            .then(
                function(res){
                    if(res.data.newslist){
                    that.weather = res.data.newslist.slice(0,5);
                    }
                    else{
                        alert(res.data.msg);
                    }
                },
                function(err){
                    console.log(err);
                }
                );
            this.city="";
        },
        select:function(city){
            this.city = city;
            this.search();
            this.city = city;
        }
    }
})