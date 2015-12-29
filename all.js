define(["./Tab"], function(Tab){
    return {
        start : function(){
        var base = document.getElementById('container');
        for(var i =1;i< 5;i++){
            var t = new Tab(i*1, i*10, i*2);
            t.placeAt(base);
        }
    }
    }
});