	//方案1、手机移动端rem适配  如果宽度要求750px 则return p>1?1:p<0.5?0.5:p; 改为 return p>1?1:p<0.4?0.4:p;
		new function (){
		   var _self = this;
		   _self.width = 640;//设置默认最大宽度
		   _self.fontSize = 100;//默认字体大小
		   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
		   _self.changePage = function(){
		       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px");
		   }
		   _self.changePage();
		   window.addEventListener('resize',function(){_self.changePage();},false);
		};
//方案2 （推荐）
function adapt(designWidth, rem2px){
              var d = window.document.createElement('div');
              d.style.width = '1rem';
              d.style.display = "none";
              var head = window.document.getElementsByTagName('head')[0];
              head.appendChild(d);
              var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
              d.remove();
              document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
              var st = document.createElement('style');
              var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
              var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
              st.innerHTML = portrait + landscape;
              head.appendChild(st);
              return defaultFontSize
            };
            var defaultFontSize = adapt(750, 100);


	//2、获取class的封装函数
		function getClass(oParent,cls){
			var oP=document.getElementById(oParent) || document;
			var aElms=oP.getElementsByTagName('*');
			var box=[];
			var re=new RegExp('\\b'+cls+'\\b', 'i');
			for(var i=0;i<aElms.length;i++){
				if(re.test(aElms[i].className)){
					box.push(aElms[i])
				}
			}
			return box
		}


	//3、兼容IE 非IE 的attachEvent addEventListener
		function myAddEvent(obj,ev,fn)    //obj为要绑定事件的元素，ev为要绑定的事件，fn为绑定事件的函数
	        {
	            if(obj.attachEvent)
	            {
	                obj.attachEvent("on" + ev,fn);
	            }
	            else
	            {
	                obj.addEventListener(ev,fn,false);
	            }
	        }	




	//4、函数节流
		function throttle(method,context){
			    clearTimeout(method.tId);
			    method.tId=setTimeout(function(){
			        method.call(context);
			    },500);
			}

	//5、ajax取消请求
		//xhr.abort()		



	//6、jQuery插件编写方法（对象级别）
		// ;(function ($){

		// 	$.fn.plugin=function (options){  //plugin 插件名称 可以自定义名称
		// 		var defaults={
		// 			//各种参数 属性 设置
		// 		};

		// 		var options=$.extend(defaults,options); // defaults 把各种参数 属性 给 options 使options拥有defaults的属性 参数

		// 		this.each(function (){   //this是对象
		// 			//写实现功能的代码
		// 		})

		// 		return this //只有return 这个更对象之后才能链式操作

		// 	}

		// })(jQuery)	

		//具体实现 eg：
		//$("#tab").plugin({..参数修改...})   这里的$("#tab") 就是模板里的this
