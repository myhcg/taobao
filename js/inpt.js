

	var inp=document.getElementById("inpt");
	var sear=document.getElementById('search');
	function input () {
		inp.style.display='none';
	}


	//var inp=document.getElementById("inpt");
	function show () {
			inp.style.display='block';}

	function none () {
			inp.style.display='none';}
	var bb=document.getElementById('bb');
	var dp=document.getElementById('dp');
	var sj=document.getElementById('sj');
	var aa=135;
	var curr=-45;
	function xuanze(){
		if (dp.style.display=='block') {
			dp.style.display='none';
			}else{
				dp.style.display='block';
			}

	}
	bb.onclick=function(){
		
		if (dp.style.display=='block') {
			sj.style.transform= 'rotate('+aa+'deg)';
		}else{
			sj.style.transform= 'rotate('+curr+'deg)';
		}
		
	}
	dp.onclick=function(){
		var i=bb.innerHTML;
			bb.innerHTML=dp.innerHTML;
			dp.innerHTML=i;
			sj.style.transform= 'rotate('+aa+'deg)';
	}
	var clo=document.getElementById("clo");
	function clse () {
			clo.style.display='none';}
	var tabs=document.getElementById('c_r_tab').getElementsByTagName('li');
	var tabC=document.getElementById('tab_c').getElementsByTagName('div');
	for(var i=0;i<tabs.length;i++){
		tabs[i].index=i;
		tabs[i].onclick=function(){
			for(var i=0;i<tabs.length;i++){
				tabs[i].className='';
			}
			this.className='on';
			for(var i=0;i<tabC.length;i++){
				tabC[i].className='';
			}
			tabC[this.index].className='show';
		}
	}
	var ser=document.getElementById('service').getElementsByTagName('li');
	var serCon=document.getElementById('service_con').getElementsByTagName('div');
	var sanjiao=document.getElementById('service').getElementsByTagName('i');
	var sj=document.getElementById('shoujia');
	var mz=document.getElementById('mz');
	var hao=document.getElementById('haoma');
	var serviceCon=document.getElementById('service_con')
	for(var i=0;i<ser.length;i++){
		ser[i].index=i;
		sanjiao[i].index=i;
		ser[i].onclick=function(){
			for(var i=0;i<ser.length;i++){
				ser[i].className='';
				sanjiao[i].className='';
			}
			ser[this.index].className='on';
			sanjiao[this.index].className='no';
			for(var i=0;i<serCon.length;i++){
				serCon[i].className='';
			}
			serCon[this.index].className='show';
			serviceCon.style.display='block';
		}
	}

		function clos(){
			for(var i=0;i<ser.length;i++){
				ser[i].className='';
				sanjiao[i].className='';
			}
			for(var i=0;i<serCon.length;i++){
				serCon[i].className='';
			}
			serviceCon.style.display='none';
		}
	mz.onclick=function(){
		if (mz.value=='50') {
			sj.innerHTML='49-49.8';
		}else if(mz.value=='500'){
			sj.innerHTML='499-499.8';
		}else if(mz.value=='100'){
			sj.innerHTML='99-99.8';
		}else if(mz.value=='20'){
			sj.innerHTML='19-19.8';
		}else if(mz.value=='10'){
			sj.innerHTML='10';
		}
	}
	function foc() {
		if(hao.value=='手机号，固话号'){
			hao.value='';
			hao.style.color='black';
		}
	}
	function blu() {
		if(hao.value==''){
			hao.value='手机号，固话号';
			hao.style.color="#ccc";
		}
	}

	var  banner=document.getElementById('bann');
	var actiLef=banner.style.left;
	var dian=document.getElementById('dian').getElementsByTagName('span');
	var lis=document.getElementById('bann').getElementsByTagName('li');
	var lef=document.getElementById('lef');
	var rig=document.getElementById('rig');
	var bannbox=document.getElementById('bannbox');
	var onmouse=null;
	var spa=0;
	function move(juli){
		var img=banner.offsetLeft+juli;
		if (img<=-3120) {
			img=-520;
		}else if(img==0){
			img=-2600;
		}
		banner.style.left=img+'px';
	}
	lef.onclick=function(){
		move(520);
	}
	rig.onclick=function(){
		move(-520);
	}
	function play(){
		onmouse=setInterval(function(){
			rig.onclick();
		},1500)
	}
	play();
	function stop(){
		clearInterval(onmouse);
	}
	bannbox.onmouseover=stop;
	bannbox.onmouseout=play;
	function clespan(){
		for (var i = 0; i<dian.length; i++){
			if(dian[i].className=='active')
			{
				dian[i].className='';
			}
			dian[spa].className='active';
		}
	}
	rig.onclick=function(){
		spa +=1;
		if(spa>4){
			spa=0;
		}
		clespan();
		move(-520);
	}
	lef.onclick=function(){
		spa -=1;
		if(spa<0){
			spa=4;
		}
		clespan();
		move(520);
	}
	for (var i =0; i<dian.length; i++) {
		(function(i){
			dian[i].onclick=function(){
				var cliInde=i;
				var offset= 520*(spa-cliInde);
				move(offset);
				spa=cliInde;
				clespan();
			}
		})(i)
	}

	var  banner2=document.getElementById('bann2');
	var actiLef2=banner.style.left;
	var dian2=document.getElementById('dian2').getElementsByTagName('span');
	var lis2=document.getElementById('bann2').getElementsByTagName('li');
	var lef2=document.getElementById('lef2');
	var rig2=document.getElementById('rig2');
	var bannbox2=document.getElementById('bannbox2');
	var onmouse2=null;
	var spa2=0;
	function move2(juli){
		var img2=banner2.offsetLeft+juli;
		if (img2<=-3120) {
			img2=-520;
		}else if(img2==0){
			img2=-2600;
		}
		banner2.style.left=img2+'px';
	}
	lef2.onclick=function(){
		move2(520);
	}
	rig2.onclick=function(){
		move2(-520);
	}
	function play2(){
		onmouse2=setInterval(function(){
			rig2.onclick();
		},1500)
	}
	play2();
	function stop2(){
		clearInterval(onmouse2);
	}
	bannbox2.onmouseover=stop2;
	bannbox2.onmouseout=play2;
	function clespan2(){
		for (var i = 0; i<dian2.length; i++){
			if(dian2[i].className=='active')
			{
				dian2[i].className='';
			}
			dian2[spa2].className='active';
		}
	}
	rig2.onclick=function(){
		spa2 +=1;
		if(spa2>4){
			spa2=0;
		}
		clespan2();
		move2(-520);
	}
	lef2.onclick=function(){
		spa2 -=1;
		if(spa2<0){
			spa2=4;
		}
		clespan2();
		move2(520);
	}
	for (var i =0; i<dian2.length; i++) {
		(function(i){
			dian2[i].onclick=function(){
				var cliInde2=i;
				var offset2= 520*(spa2-cliInde2);
				move2(offset2);
				spa2=cliInde2;
				clespan2();
			}
		})(i)
	}