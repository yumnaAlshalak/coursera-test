// JavaScript Document
window.onload = function()
{
	
	
	
	/* Click effect on menu */
	var target = document.getElementById("menulist").getElementsByTagName("a");
	var back_value = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#DDD), to(#EEE))";
	for(var j=0;j<target.length;j++)
	{
		target[j].onclick = function(){
			$(this).css('background', '#EEE');
			$(this).css('background', back_value);
			$(this).css('color', '#0CF');
		}
	}
	
	/* Top stories expand script .. - collapsed using php */
	
	var i;
	
	/*
	var rmm1 = document.getElementById("readmore0");
	var rmm2 = document.getElementById("readmore1");
	var rmm3 = document.getElementById("readmore2");
	var rmm = new Array();
	for(i=0;i<3;i++){
		rmm[i] = document.getElementById("readmore1");
		rmm[i].onclick = function(e){
			getElementsByClass("hidden-content")[i].style.display = 'block';
			getElementsByClass("story-content")[i].style.display = 'none';
			e.preventDefault();
		}
	}
	rmm1.onclick = function (e){
		getElementsByClass("hidden-content")[0].style.display = 'block';
		getElementsByClass("story-content")[0].style.display = 'none';
		e.preventDefault();
	}
	rmm2.onclick = function (e){
		getElementsByClass("hidden-content")[1].style.display = 'block';
		getElementsByClass("story-content")[1].style.display = 'none';
		e.preventDefault();
	}
	rmm3.onclick = function (e){
		getElementsByClass("hidden-content")[2].style.display = 'block';
		getElementsByClass("story-content")[2].style.display = 'none';
		e.preventDefault();
	}
	*/
	
	/* Optimised Code .... If not working use the above one ... */
	
	var rmt = getElementsByClass("story-content");
	
	for(i=0;i<rmt.length;i++)
	{
		rmt[i].onclick = function(e){
			getElementsByClass("hidden-content",this.parentNode)[0].style.display = 'block';
			getElementsByClass("story-content",this.parentNode)[0].style.display = 'none';
			//alert(this.parentNode.getElementsByTagName("p").hasClass('hidden-content'));
			//rmtt.style.display = 'block';
			e.preventDefault();
		};
	}
	
	function getElementsByClass(searchClass,node,tag) {
		var classElements = new Array();
		if ( node == null )
			node = document;
		if ( tag == null )
			tag = '*';
		var els = node.getElementsByTagName(tag);
		var elsLen = els.length;
		var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
		for (i = 0, j = 0; i < elsLen; i++) {
			if ( pattern.test(els[i].className) ) {
				classElements[j] = els[i];
				j++;
			}
		}
		return classElements;
	}
	
	
	/*Top Stories Collapse Script */
	
	var rmtc = getElementsByClass("hidden-content");
	
	for(i=0;i<rmtc.length;i++)
	{
		rmtc[i].onclick = function(e){
			getElementsByClass("hidden-content",this.parentNode)[0].style.display = 'none';
			getElementsByClass("story-content",this.parentNode)[0].style.display = 'block';
			//alert(this.parentNode.getElementsByTagName("p").hasClass('hidden-content'));
			//rmtt.style.display = 'block';
			e.preventDefault();
		};
	}
	
	/*
	Top stories tooltip script 
	Note : THis should be below the collapse and expand script otherwise 
	it will not work
	*/
	$("p").tooltip();
	
	/*Top Stories collapse-at-page-load script
	var telement = document.getElementById("topstories-container").getElementsByTagName("p");
	var story = new Array();
	var contlimit = 125;
	var rmtext = "<a href=\"javascript:alert('Nothing to display');\" >Read More</a>";
	for(var i=0;i<telement.length;i++)
	{
		if(telement[i].innerHTML.length>contlimit)
		{
			story[i] = telement[i].innerHTML;
			telement[i].innerHTML = telement[i].innerHTML.substring(0,contlimit) + " ... " + rmtext;
		}
	}*/
	
}