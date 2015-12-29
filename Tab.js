define([
    "dojo/_base/declare",
    "dijit/_Widget",
    "dijit/_Templated",
    "dojo/text!./templates/template.html"
], function(declare, _Widget, _Templated,  template){

    return declare([_Widget, _Templated],{
        templateString: template,
        constructor : function(temp, proc, freq){
            this._temp = temp;
            this._proc = proc;
            this._freq = freq;
        },
        postCreate : function(){
             this.temprature.innerText = this._temp;
             this.processor.innerText = this._proc;
             this.frequency.innerText = this._freq;
         }

    });

});