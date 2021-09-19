Game.registerMod('industrial cookies2ex',{
	init:function(){
		document.getElementsByName("Game.cookies");
		document.getElementsByName("Game.recalculateGains");
		document.getElementsByName("Game.cookiesPs");
		Game.Notify(`INDUSTRIAL COOKIES LOADED!`,`Welcome to my world`,[31,9]);
		//const cursol = document.getElementById("product0");
		//cursol.addEventListener("click",function(){
			//const rand = Math.floor(Math.random() * 100)
			//Game.Notify(rand,'',0,2);
		//});
		this.buttonClicks=1;
		this.offvs=1;
		this.eps=0;
		this.x2=1;//on/off of x2fever
		this.x3=1;//on/off of x3fever
		this.x4=1;//on/off of x4fever
		this.x5=1;//on/off of x5fever
		this.x6=1;//on/off of x6fever
		this.x7=1;//on/off of x7fever
		this.x8=1;//on/off of x8fever
		this.x9=1;
		this.x10=1;
		this.tlevel=0;//Thermal Level
		this.hlevel=0;//Hydro Level
		this.wlevel=0;//Wind Level
		this.glevel=0;//Geo Level
		this.slevel=0;//Soler Level
		this.nlevel=0;//Nuclear Level
		this.addeps=0;//add eps of buildings
		this.tin=0;//the amount of tin
		this.cupper=0;//the amount of cuppuer
		this.iron=0;//the amount of iron
		this.silver=0;//the amount of silver
		this.gold=0;//the amount of gold
		this.diamond=0;//the amount of diamond
		this.multiplicationeps=1;
		this.subtraction=0;
		this.tincableonoff=0;
		this.advtincableon=0;
		this.hybtincableon=0;
		this.ulttincableon=0;
		this.cuppercableon=0;
		this.advcuppercableon=0;
		this.hybcuppercableon=0;
		this.ultcuppercableon=0;
		this.goldcableon=0;
		this.advgoldcableon=0;
		this.hybgoldcableon=0;
		this.ultgoldcableon=0;
		this.diamondcableon=0;
		this.advdiamondcableon=0;
		this.hybdiamondcableon=0;
		this.ultdiamondcableon=0;
		this.tp=10;
		this.hp=100;
		this.wp=1100;
		this.gp=12100;
		this.sp=1214000;
		this.np=666666666;
		this.rand=0;
		

		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:88px;left:-182px;display:none;" class="particle" id="yuuClicker"></a>');
		this.hung();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:153px;left:-182px;display:none;" class="particle" id="funesClicker"></a>');
		this.funes();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:218px;left:-182px;display:none;" class="particle" id="waterClicker"></a>');
		this.water();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:283px;left:-182px;display:none;" class="particle" id="windClicker"></a>');
		this.wind();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:348px;left:-182px;display:none;" class="particle" id="geoClicker"></a>');
		this.geo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:413px;left:-182px;display:none;" class="particle" id="solerClicker"></a>');
		this.soler();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:60px;position:absolute;top:478px;left:-182px;display:none;" class="particle" id="nuclearClicker"></a>');
		this.nuclear();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;bottom:2px;right:5px;display:block;" class="smallFancyButton" id="startClicker"></a>');
		this.fancy();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;bottom:37px;left:-330px;display:none;width:250px;" class="particle title" id="EPSMeter"></a>');
		this.meter();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:150px;right:0px;display:none;" class="smallFancyButton" id="reset"></a>');
		this.reset();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:50px;left:140px;display:none;" class="smallFancyButton" id="features"></a>');
		this.fea();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:50px;left:0px;display:none;" class="smallFancyButton" id="buildings"></a>');
		this.bui();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:50px;left:280px;display:none;" class="smallFancyButton" id="modules"></a>');
		this.modu();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;bottom:2px;right:100px;display:none;" class="smallFancyButton" id="off"></a>');
		this.ohuton();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:100px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="atin"></a>');
		this.tinamo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:140px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="acupper"></a>');
		this.cupperamo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:180px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="airon"></a>');
		this.ironamo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:220px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="asilver"></a>');
		this.silveramo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:260px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="agold"></a>');
		this.goldamo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:15px;position:absolute;top:300px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="adiamond"></a>');
		this.diamondamo();
		let MOD=this;
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:100px;left:35px;display:none;" class="smallFancyButton" id="CClicker"></a>');
		this.crank();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:165px;left:35px;display:none;" class="smallFancyButton" id="storeClicker"></a>');
		this.updateScore();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:230px;left:35px;display:none;" class="smallFancyButton" id="WClicker"></a>');
		this.waterPower();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:295px;left:35px;display:none;" class="smallFancyButton" id="AClicker"></a>');
		this.windPower();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:360px;left:35px;display:none;" class="smallFancyButton" id="GClicker"></a>');
		this.gPower();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:425px;left:35px;display:none;" class="smallFancyButton" id="SClicker"></a>');
		this.solerPower();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:34px;position:absolute;top:490px;left:35px;display:none;" class="smallFancyButton" id="UClicker"></a>');
		this.uranPower();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:100px;left:0px;display:none;" class="smallFancyButton" id="cpsx2id"></a>');
		this.cpsx2();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:150px;left:0px;display:none;" class="smallFancyButton" id="cpsx3id"></a>');
		this.cpsx3();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:200px;left:0px;display:none;" class="smallFancyButton" id="cpsx4id"></a>');
		this.cpsx4();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:250px;left:0px;display:none;" class="smallFancyButton" id="cpsx5id"></a>');
		this.cpsx5();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:300px;left:0px;display:none;" class="smallFancyButton" id="cpsx6id"></a>');
		this.cpsx6();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:350px;left:0px;display:none;" class="smallFancyButton" id="cpsx7id"></a>');
		this.cpsx7();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:400px;left:0px;display:none;" class="smallFancyButton" id="cpsx8id"></a>');
		this.cpsx8();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:450px;left:0px;display:none;" class="smallFancyButton" id="cpsx9id"></a>');
		this.cpsx9();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:500px;left:0px;display:none;" class="smallFancyButton" id="cpsx10id"></a>');
		this.cpsx10();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;bottom:72px;left:-330px;display:none;width:250px;" class="particle title" id="epschecker"></a>');
		this.check();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:155px;display:none;width:125px;" class="smallFancyButton" id="crank"></a>');
		this.checkcrank();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:163px;left:225px;display:none;width:125px;" class="smallFancyButton" id="thermal"></a>');
		this.checkthermal();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:230px;left:190px;display:none;width:125px;" class="smallFancyButton" id="hydro"></a>');
		this.checkhydro();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:295px;left:180px;display:none;width:150px;" class="smallFancyButton" id="wind"></a>');
		this.checkwind();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:358px;left:168px;display:none;width:150px;" class="smallFancyButton" id="geo"></a>');
		this.checkgeo();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:11px;position:absolute;top:425px;left:205px;display:none;width:238px;" class="smallFancyButton" id="soler"></a>');
		this.checksoler();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:485px;left:270px;display:none;width:270px;" class="smallFancyButton" id="uran"></a>');
		this.checkuran();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x2"></a>');
		this.checkx2();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:150px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x3"></a>');
		this.checkx3();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:200px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x4"></a>');
		this.checkx4();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:250px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x5"></a>');
		this.checkx5();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:300px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x6"></a>');
		this.checkx6();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:350px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x7"></a>');
		this.checkx7();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:400px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x8"></a>');
		this.checkx8();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:450px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x9"></a>');
		this.checkx9();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:500px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x10"></a>');
		this.checkx10();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:375px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx2"></a>');
		this.conx2();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:345px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx3"></a>');
		this.conx3();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:315px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx4"></a>');
		this.conx4();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:285px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx5"></a>');
		this.conx5();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:255px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx6"></a>');
		this.conx6();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:225px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx7"></a>');
		this.conx7();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:195px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx8"></a>');
		this.conx8();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:175px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx9"></a>');
		this.conx9();
		l('leftBeam').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:0px;right:145px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx10"></a>');
		this.conx10();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:50px;left:375px;display:none;width:125px;" class="smallFancyButton" id="rcon"></a>');
		this.confirm();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:100px;left:0px;display:none;" class="smallFancyButton" id="tinca"></a>');
		this.tincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:100px;left:60px;display:none;" class="smallFancyButton" id="advtinca"></a>');
		this.advancedtincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:100px;left:120px;display:none;" class="smallFancyButton" id="hybtinca"></a>');
		this.hybridtincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:100px;left:180px;display:none;" class="smallFancyButton" id="ulttinca"></a>');
		this.ultimatetincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:170px;left:0px;display:none;" class="smallFancyButton" id="cupperca"></a>');
		this.cuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:170px;left:60px;display:none;" class="smallFancyButton" id="advcupperca"></a>');
		this.advancedcuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:170px;left:120px;display:none;" class="smallFancyButton" id="hybcupperca"></a>');
		this.hybridcuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:170px;left:180px;display:none;" class="smallFancyButton" id="ultcupperca"></a>');
		this.ultimatecuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:240px;left:0px;display:none;" class="smallFancyButton" id="goldca"></a>');
		this.goldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:240px;left:60px;display:none;" class="smallFancyButton" id="advgoldca"></a>');
		this.advancedgoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:240px;left:120px;display:none;" class="smallFancyButton" id="hybgoldca"></a>');
		this.hybridgoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:240px;left:180px;display:none;" class="smallFancyButton" id="ultgoldca"></a>');
		this.ultimategoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:310px;left:0px;display:none;" class="smallFancyButton" id="diamondca"></a>');
		this.diamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:310px;left:60px;display:none;" class="smallFancyButton" id="advdiamondca"></a>');
		this.advanceddiamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:310px;left:120px;display:none;" class="smallFancyButton" id="hybdiamondca"></a>');
		this.hybriddiamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:24px;position:absolute;top:310px;left:180px;display:none;" class="smallFancyButton" id="ultdiamondca"></a>');
		this.ultimatediamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:55px;display:none;width:125px;" class="smallFancyButton" id="continca"></a>');
		this.contincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:115px;display:none;width:170px;" class="smallFancyButton" id="conadvtinca"></a>');
		this.conadvancedtincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybtinca"></a>');
		this.conhybridtincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:100px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conulttinca"></a>');
		this.conultimatetincable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:170px;left:55px;display:none;width:125px;" class="smallFancyButton" id="concupperca"></a>');
		this.concuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:170px;left:115px;display:none;width:170px;" class="smallFancyButton" id="conadvcupperca"></a>');
		this.conadvancedcuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:170px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybcupperca"></a>');
		this.conhybridcuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:170px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultcupperca"></a>');
		this.conultimatecuppercable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:240px;left:55px;display:none;width:125px;" class="smallFancyButton" id="congoldca"></a>');
		this.congoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:240px;left:115px;display:none;width:138px;" class="smallFancyButton" id="conadvgoldca"></a>');
		this.conadvancedgoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:240px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybgoldca"></a>');
		this.conhybridgoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:240px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultgoldca"></a>');
		this.conultimategoldcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:310px;left:55px;display:none;width:100px;" class="smallFancyButton" id="condiamondca"></a>');
		this.condiamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:310px;left:115px;display:none;width:152px;" class="smallFancyButton" id="conadvdiamondca"></a>');
		this.conadvanceddiamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:310px;left:175px;display:none;width:148px;" class="smallFancyButton" id="conhybdiamondca"></a>');
		this.conhybriddiamondcable();
		l('centerArea').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:310px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultdiamondca"></a>');
		this.conultimatediamondcable();
		AddEvent(l('startClicker'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.buttonClicks+=1;
			MOD.fancy();
		   if (MOD.buttonClicks%2 == 0)
		   {
			atin.style.display="block";
			acupper.style.display="block";
			airon.style.display="block";
			asilver.style.display="block";
			agold.style.display="block";
			adiamond.style.display="block";
			buildings.style.display="block";
			modules.style.display="block";
			features.style.display="block";
			EPSMeter.style.display="block";
			reset.style.display="block";
			CClicker.style.display="block";
			storeClicker.style.display="block";
			WClicker.style.display="block";
			AClicker.style.display="block";
			GClicker.style.display="block";
			SClicker.style.display="block";
			UClicker.style.display="block";
			epschecker.style.display="block";
			off.style.display="block";
			yuuClicker.style.display="block";
			funesClicker.style.display="block";
			waterClicker.style.display="block";
			windClicker.style.display="block";
			geoClicker.style.display="block";
			solerClicker.style.display="block";
			nuclearClicker.style.display="block";
		   }
		   else
		   {
			buildings.style.display="none";
			features.style.display="none";
			modules.style.display="none";
			EPSMeter.style.display="none";
			reset.style.display="none";
			CClicker.style.display="none";
			storeClicker.style.display="none";
			WClicker.style.display="none";
			AClicker.style.display="none";
			GClicker.style.display="none";
			SClicker.style.display="none";
			UClicker.style.display="none";
			cpsx2id.style.display="none";
			cpsx3id.style.display="none";
			cpsx4id.style.display="none";
			cpsx5id.style.display="none";
			cpsx6id.style.display="none";
			cpsx7id.style.display="none";
			cpsx8id.style.display="none";
			cpsx9id.style.display="none";
			cpsx10id.style.display="none";
			epschecker.style.display="none";
			off.style.display="none";
			yuuClicker.style.display="none";
			funesClicker.style.display="none";
			waterClicker.style.display="none";
			windClicker.style.display="none";
			geoClicker.style.display="none";
			solerClicker.style.display="none";
			nuclearClicker.style.display="none"
			atin.style.display="none";
			acupper.style.display="none";
			airon.style.display="none";
			asilver.style.display="none";
			agold.style.display="none";
			adiamond.style.display="none";
			tinca.style.display="none";
			advtinca.style.display="none";
			hybtinca.style.display="none";
			ulttinca.style.display="none";
			cupperca.style.display="none";
			advcupperca.style.display="none";
			hybcupperca.style.display="none";
			ultcupperca.style.display="none";
			goldca.style.display="none";
			advgoldca.style.display="none";
			hybgoldca.style.display="none";
			ultgoldca.style.display="none";
			diamondca.style.display="none";
			advdiamondca.style.display="none";
			hybdiamondca.style.display="none";
			ultdiamondca.style.display="none";
		   }
		});
		AddEvent(l('off'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.offvs+=1;
			MOD.ohuton();
		   if (MOD.offvs%2 == 0)
		   {
			 yuuClicker.style.display="none";
			 funesClicker.style.display="none";
			 waterClicker.style.display="none";
			 windClicker.style.display="none";
			 geoClicker.style.display="none";
			 solerClicker.style.display="none";
			 nuclearClicker.style.display="none";
		   }
		   else
		   {
			yuuClicker.style.display="block";
			funesClicker.style.display="block";
			waterClicker.style.display="block";
			windClicker.style.display="block";
			geoClicker.style.display="block";
			solerClicker.style.display="block";
			nuclearClicker.style.display="block";
		   }
		});
		AddEvent(l('buildings'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    CClicker.style.display="block";
			reset.style.display="block";
			storeClicker.style.display="block";
			WClicker.style.display="block";
			AClicker.style.display="block";
			GClicker.style.display="block";
			SClicker.style.display="block";
			UClicker.style.display="block";
			atin.style.display="block";
			acupper.style.display="block";
			airon.style.display="block";
			asilver.style.display="block";
			agold.style.display="block";
			adiamond.style.display="block";
			cpsx2id.style.display="none";
			cpsx3id.style.display="none";
			cpsx4id.style.display="none";
			cpsx5id.style.display="none";
			cpsx6id.style.display="none";
			cpsx7id.style.display="none";
			cpsx8id.style.display="none";
			cpsx9id.style.display="none";
			cpsx10id.style.display="none";
			yuuClicker.style.display="block";
			funesClicker.style.display="block";
			waterClicker.style.display="block";
			windClicker.style.display="block";
			geoClicker.style.display="block";
			solerClicker.style.display="block";
			nuclearClicker.style.display="block";
			tinca.style.display="none";
			advtinca.style.display="none";
			hybtinca.style.display="none";
			ulttinca.style.display="none";
			cupperca.style.display="none";
			advcupperca.style.display="none";
			hybcupperca.style.display="none";
			ultcupperca.style.display="none";
			goldca.style.display="none";
			advgoldca.style.display="none";
			hybgoldca.style.display="none";
			ultgoldca.style.display="none";
			diamondca.style.display="none";
			advdiamondca.style.display="none";
			hybdiamondca.style.display="none";
			ultdiamondca.style.display="none";
		});
		AddEvent(l('features'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    cpsx2id.style.display="block";
			reset.style.display="none";
			cpsx3id.style.display="block";
			cpsx4id.style.display="block";
			cpsx5id.style.display="block";
			cpsx6id.style.display="block";
			cpsx7id.style.display="block";
			cpsx8id.style.display="block";
			cpsx9id.style.display="block";
			cpsx10id.style.display="block";
			CClicker.style.display="none";
			storeClicker.style.display="none";
			WClicker.style.display="none";
			AClicker.style.display="none";
			GClicker.style.display="none";
			SClicker.style.display="none";
			UClicker.style.display="none";
			yuuClicker.style.display="none";
			funesClicker.style.display="none";
			waterClicker.style.display="none";
			windClicker.style.display="none";
			geoClicker.style.display="none";
			solerClicker.style.display="none";
			nuclearClicker.style.display="none";
			atin.style.display="none";
			acupper.style.display="none";
			airon.style.display="none";
			asilver.style.display="none";
			agold.style.display="none";
			adiamond.style.display="none";
			tinca.style.display="none";
			advtinca.style.display="none";
			hybtinca.style.display="none";
			ulttinca.style.display="none";
			cupperca.style.display="none";
			advcupperca.style.display="none";
			hybcupperca.style.display="none";
			ultcupperca.style.display="none";
			goldca.style.display="none";
			advgoldca.style.display="none";
			hybgoldca.style.display="none";
			ultgoldca.style.display="none";
			diamondca.style.display="none";
			advdiamondca.style.display="none";
			hybdiamondca.style.display="none";
			ultdiamondca.style.display="none";
		});
		AddEvent(l('modules'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    CClicker.style.display="none";
			reset.style.display="none";
			storeClicker.style.display="none";
			WClicker.style.display="none";
			AClicker.style.display="none";
			GClicker.style.display="none";
			SClicker.style.display="none";
			UClicker.style.display="none";
			cpsx2id.style.display="none";
			cpsx3id.style.display="none";
			cpsx4id.style.display="none";
			cpsx5id.style.display="none";
			cpsx6id.style.display="none";
			cpsx7id.style.display="none";
			cpsx8id.style.display="none";
			cpsx9id.style.display="none";
			cpsx10id.style.display="none";
			yuuClicker.style.display="none";
			funesClicker.style.display="none";
			waterClicker.style.display="none";
			windClicker.style.display="none";
			geoClicker.style.display="none";
			solerClicker.style.display="none";
			nuclearClicker.style.display="none";
			atin.style.display="block";
			acupper.style.display="block";
			airon.style.display="block";
			asilver.style.display="block";
			agold.style.display="block";
			adiamond.style.display="block";
			cupperca.style.display="block";
			tinca.style.display="block";
			advtinca.style.display="block";
			hybtinca.style.display="block";
			ulttinca.style.display="block";
			cupperca.style.display="block";
			advcupperca.style.display="block";
			hybcupperca.style.display="block";
			ultcupperca.style.display="block";
			goldca.style.display="block";
			advgoldca.style.display="block";
			hybgoldca.style.display="block";
			ultgoldca.style.display="block";
			diamondca.style.display="block";
			advdiamondca.style.display="block";
			hybdiamondca.style.display="block";
			ultdiamondca.style.display="block";
		});
		
		function startTimer(){
			testTimer=setInterval(function(){
				MOD.eps-=10;
				MOD.meter();
				if(MOD.eps <200){
					clearInterval(testTimer);
					Game.registerHook('cps',function(cps){return cps/2;});
			        Game.recalculateGains=1;
					MOD.x2=1;
			        MOD.cpsx2();
					confx2.style.display="none";
				}
			},50);
			}
		function stopTimer(){
			clearInterval(testTimer);
			confx2.style.display="none";
		}
		function x3Timer(){
			cps3Timer=setInterval(function(){
				MOD.eps-=250;
				MOD.meter();
				if(MOD.eps <5000){
					clearInterval(cps3Timer);
					Game.registerHook('cps',function(cps){return cps/3;});
			        Game.recalculateGains=1;
					MOD.x3=1;
			        MOD.cpsx3();
					confx3.style.display="none";
				}
			},50);
			}
		function stopx3Timer(){
			clearInterval(cps3Timer);
			confx3.style.display="none";
		}
		function x4Timer(){
			cps4Timer=setInterval(function(){
				MOD.eps-=22222.2;
				MOD.meter();
				if(MOD.eps <444444){
					clearInterval(cps4Timer);
					Game.registerHook('cps',function(cps){return cps/4;});
			        Game.recalculateGains=1;
					MOD.x4=1;
			        MOD.cpsx4();
					confx4.style.display="none";
				}
			},50);
			}
		function stopx4Timer(){
			clearInterval(cps4Timer);
			confx4.style.display="none";
		}
		function x5Timer(){
			cps5Timer=setInterval(function(){
				MOD.eps-=333333.3;
				MOD.meter();
				if(MOD.eps <6666666){
					clearInterval(cps5Timer);
					Game.registerHook('cps',function(cps){return cps/5;});
			        Game.recalculateGains=1;
					MOD.x5=1;
			        MOD.cpsx5();
					confx5.style.display="none";
				}
			},50);
			}
		function stopx5Timer(){
			clearInterval(cps5Timer);
			confx5.style.display="none";
		}
		function x6Timer(){
			cps6Timer=setInterval(function(){
				MOD.eps-=33333333.3;
				MOD.meter();
				if(MOD.eps <666666666){
					clearInterval(cps6Timer);
					Game.registerHook('cps',function(cps){return cps/6;});
			        Game.recalculateGains=1;
					MOD.x6=1;
			        MOD.cpsx6();
					confx6.style.display="none";
				}
			},50);
			}
		function stopx6Timer(){
			clearInterval(cps6Timer);
			confx6.style.display="none";
		}
		function x7Timer(){
			cps7Timer=setInterval(function(){
				MOD.eps-=444444444.4;
				MOD.meter();
				if(MOD.eps <8888888888){
					clearInterval(cps7Timer);
					Game.registerHook('cps',function(cps){return cps/7;});
			        Game.recalculateGains=1;
					MOD.x7=1;
			        MOD.cpsx7();
					confx7.style.display="none";
				}
			},50);
			}
		function stopx7Timer(){
			clearInterval(cps7Timer);
			confx7.style.display="none";
		}
		function x8Timer(){
			cps8Timer=setInterval(function(){
				MOD.eps-=5000000000;
				MOD.meter();
				if(MOD.eps <100000000000){
					clearInterval(cps8Timer);
					Game.registerHook('cps',function(cps){return cps/8;});
			        Game.recalculateGains=1;
					MOD.x8=1;
			        MOD.cpsx8();
					confx8.style.display="none";
				}
			},50);
			}
		function stopx8Timer(){
			clearInterval(cps8Timer);
			confx8.style.display="none";
		}
		function x9Timer(){
			cps9Timer=setInterval(function(){
				MOD.eps-=5000000000000;
				MOD.meter();
				if(MOD.eps <100000000000000){
					clearInterval(cps9Timer);
					Game.registerHook('cps',function(cps){return cps/9;});
			        Game.recalculateGains=1;
					MOD.x9=1;
			        MOD.cpsx9();
					confx9.style.display="none";
				}
			},50);
			}
		function stopx9Timer(){
			clearInterval(cps9Timer);
			confx9.style.display="none";
		}
		function x10Timer(){
			cps10Timer=setInterval(function(){
				MOD.eps-=5000000000000000;
				MOD.meter();
				if(MOD.eps <100000000000000000){
					clearInterval(cps10Timer);
					Game.registerHook('cps',function(cps){return cps/10;});
			        Game.recalculateGains=1;
					MOD.x10=1;
			        MOD.cpsx10();
					confx10.style.display="none";
				}
			},50);
			}
		function stopx10Timer(){
			clearInterval(cps10Timer);
			confx10.style.display="none";
		}
		function epsTimer(){
			  enpsTimer=setInterval(function(){
				    MOD.eps=MOD.eps+MOD.addeps*MOD.multiplicationeps-MOD.subtraction;
				    MOD.meter();
			       },50);
			}
		function resetTimer(){
			clearInterval(enpsTimer);
			MOD.check();
		}
		AddEvent(l('CClicker'),'click',function(){
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);
			MOD.eps+=1;
			MOD.meter();
			this.rand = Math.floor(Math.random() * 10000)
			if (this.rand >950 && this.rand <1000){
				MOD.diamond+=1;
				MOD.diamondamo();
				Game.Notify('ダイヤモンドを見つけた！','',0,2);
			}
			if (this.rand >777 &&　this.rand < 950){
				MOD.gold+=1;
				MOD.goldamo();
				Game.Notify('金を見つけた！','',0,2);
			}
			if (this.rand > 0 && this.rand < 1000){
				MOD.silver+=1;
				MOD.silveramo();
				Game.Notify('銀を見つけた！','',0,2);
			}
			if(this.rand > 7000 && this.rand < 9000){
				MOD.iron+=1;
				MOD.ironamo();
				Game.Notify('鉄を見つけた！','',0,2);
			}
			if (this.rand > 1000 && this.rand < 5000){
				MOD.cupper+=1;
				MOD.cupperamo();
				Game.Notify('銅を見つけた！','',0,2);
			}
			if(this.rand > 5000 && this.rand < 7000){
				MOD.tin+=1;
				MOD.tinamo();
				Game.Notify('錫を見つけた！','',0,2);
			}
		});
		AddEvent(l('reset'),'click',function(){
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);
			MOD.eps=0;
			MOD.meter();
			MOD.tlevel=0;
			MOD.updateScore();
			MOD.hlevel=0;
			MOD.waterPower();
			MOD.wlevel=0;
			MOD.windPower();
			MOD.glevel=0;
			MOD.gPower();
			MOD.slevel=0;
			MOD.solerPower();
			MOD.nlevel=0;
			MOD.uranPower();
			MOD.addeps=0;
			MOD.check();
			MOD.tincableonoff=0;
			MOD.tincable();
			MOD.advtincableon=0;
			MOD.advancedtincable();
			MOD.hybtincableon=0;
			MOD.hybridtincable();
			MOD.ulttincableon=0;
			MOD.ultimatetincable();
			MOD.multiplicationeps=1;
			MOD.check();
			MOD.subtraction=0;
			MOD.check();
			MOD.cuppercableon=0;
			MOD.cuppercable();
			MOD.advcuppercableon=0;
			MOD.advancedcuppercable();
			MOD.hybcuppercableon=0;
			MOD.hybridcuppercable();
			MOD.ultcuppercableon=0;
			MOD.ultimatecuppercable();
			MOD.goldcableon=0;
			MOD.goldcable();
			MOD.advgoldcableon=0;
			MOD.advancedgoldcable();
			MOD.hybgoldcableon=0;
			MOD.hybridgoldcable();
			MOD.ultgoldcableon=0;
			MOD.ultimategoldcable();
			MOD.diamondcableon=0;
			MOD.diamondcable();
			MOD.advdiamondcableon=0;
			MOD.advanceddiamondcable();
			MOD.hybdiamondcableon=0;
			MOD.hybriddiamondcable();
			MOD.ultdiamondcableon=0;
			MOD.ultimatediamondcable();

		});
		AddEvent(l('storeClicker'),'click',function(){
			if (MOD.eps >=10+10*MOD.tlevel*MOD.tlevel && MOD.tlevel<10 ){
				MOD.eps-=10+10*MOD.tlevel*MOD.tlevel;
				MOD.meter();
				MOD.tlevel+=1;
				MOD.updateScore();
				MOD.addeps+=0.05;
				MOD.check();
				MOD.tp=10+10*MOD.tlevel*MOD.tlevel;
				MOD.checkthermal();
				if (MOD.tlevel == 1){
					Game.Notify('火力発電機解放！','地球温暖化',0,6);
					MOD.cuppercableon=0;
			        MOD.cuppercable();
			        MOD.advcuppercableon=0;
			        MOD.advancedcuppercable();
			        MOD.hybcuppercableon=0;
			        MOD.hybridcuppercable();
			        MOD.ultcuppercableon=0;
			        MOD.ultimatecuppercable();
			        MOD.goldcableon=0;
			        MOD.goldcable();
			        MOD.advgoldcableon=0;
			        MOD.advancedgoldcable();
			        MOD.hybgoldcableon=0;
			        MOD.hybridgoldcable();
			        MOD.ultgoldcableon=0;
			        MOD.ultimategoldcable();
			        MOD.diamondcableon=0;
			        MOD.diamondcable();
			        MOD.advdiamondcableon=0;
			        MOD.advanceddiamondcable();
			        MOD.hybdiamondcableon=0;
			        MOD.hybriddiamondcable();
			        MOD.ultdiamondcableon=0;
			        MOD.ultimatediamondcable();
					MOD.tincableonoff=0;
			        MOD.tincable();
			        MOD.advtincableon=0;
			        MOD.advancedtincable();
			        MOD.hybtincableon=0;
			        MOD.hybridtincable();
			        MOD.ulttincableon=0;
			        MOD.ultimatetincable();
				}
				if (MOD.tlevel == 10){
					Game.Notify('火力発電機の限界','もう置くスペースがありません！',0,6);
				}
			}
			else{
				if(MOD.tlevel<10){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('WClicker'),'click',function(){
			if (MOD.eps >=100+100*MOD.hlevel*MOD.hlevel && MOD.hlevel<10 ){
				MOD.eps-=100+100*MOD.hlevel*MOD.hlevel;
				MOD.meter();
				MOD.hlevel+=1;
				MOD.waterPower();
				MOD.addeps+=0.5;
				MOD.check();
				MOD.hp=100+100*MOD.hlevel*MOD.hlevel;
				MOD.checkhydro();
				if (MOD.hlevel == 1){
					Game.Notify('水力発電開放！','ここで満足しないでね',0,6);
					MOD.cuppercableon=0;
			        MOD.cuppercable();
			        MOD.advcuppercableon=0;
			        MOD.advancedcuppercable();
			        MOD.hybcuppercableon=0;
			        MOD.hybridcuppercable();
			        MOD.ultcuppercableon=0;
			        MOD.ultimatecuppercable();
			        MOD.goldcableon=0;
			        MOD.goldcable();
			        MOD.advgoldcableon=0;
			        MOD.advancedgoldcable();
			        MOD.hybgoldcableon=0;
			        MOD.hybridgoldcable();
			        MOD.ultgoldcableon=0;
			        MOD.ultimategoldcable();
			        MOD.diamondcableon=0;
			        MOD.diamondcable();
			        MOD.advdiamondcableon=0;
			        MOD.advanceddiamondcable();
			        MOD.hybdiamondcableon=0;
			        MOD.hybriddiamondcable();
			        MOD.ultdiamondcableon=0;
			        MOD.ultimatediamondcable();
					MOD.tincableonoff=0;
			        MOD.tincable();
			        MOD.advtincableon=0;
			        MOD.advancedtincable();
			        MOD.hybtincableon=0;
			        MOD.hybridtincable();
			        MOD.ulttincableon=0;
			        MOD.ultimatetincable();
				}
				if (MOD.hlevel == 10){
					Game.Notify('水力発電機の限界','ウチ、そんなに水ないんすよ。',0,6);
				}
			}
			else{
				if(MOD.hlevel<10){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('AClicker'),'click',function(){
			if (MOD.eps >=1100+1100*MOD.wlevel*MOD.wlevel && MOD.wlevel<100 ){
				MOD.eps-=1100+1100*MOD.wlevel*MOD.wlevel;
				MOD.meter();
				MOD.wlevel+=1;
				MOD.windPower();
				MOD.addeps+=5;
				MOD.check();
				MOD.wp=1100+1100*MOD.wlevel*MOD.wlevel;
				MOD.checkwind();
				if (MOD.wlevel == 1){
					Game.Notify('風力発電開放！','近隣の騒音被害は無視ですか…？',0,6);
				}
				if (MOD.wlevel == 10){
					Game.Notify('風力発電の開拓者！','近隣からは毎晩クレームの嵐です。',0,6);
				}
				if (MOD.wlevel == 50){
					Game.Notify('風力発電の可能性！','クレームの世界記録を更新しました。',0,6);
				}
				if (MOD.wlevel == 100){
					Game.Notify('風力発電の異端児！','国からストップがかかりました。',0,6);
				}
			}
			else{
				if(MOD.wlevel<100){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('GClicker'),'click',function(){
			if (MOD.eps >=12100+12100*MOD.glevel*MOD.glevel && MOD.glevel<1000 ){
				MOD.eps-=12100+12100*MOD.glevel*MOD.glevel;
				MOD.meter();
				MOD.glevel+=1;
				MOD.gPower();
				MOD.addeps+=45;
				MOD.check();
				MOD.gp=12100+12100*MOD.glevel*MOD.glevel;
				MOD.checkgeo();
				if (MOD.glevel == 1){
					Game.Notify('地熱発電機解放！','マグマはどこから…？',0,6);
				}
				if (MOD.glevel == 10){
					Game.Notify('地熱発電機の開拓者！','案外これコスパ良いよね',0,6);
				}
				if (MOD.glevel == 50){
					Game.Notify('地熱発電機の新参者！','工業化は始まったばかり',0,6);
				}
				if (MOD.glevel == 100){
					Game.Notify('地熱発電機の使徒！','どこにそんな量のマグマがあるんだい',0,6);
				}
				if (MOD.glevel == 500){
					Game.Notify('地熱発電機の逆襲！','まだまだマグマは消えない',0,6);
				}
				if (MOD.glevel == 1000){
					Game.Notify('地熱発電機の限界！','発電機のせいでマグマが見えないよ',0,6);
				}
			}
			else{
				if(MOD.glevel<1000){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('SClicker'),'click',function(){
			if (MOD.eps >=1214000+1214000*MOD.slevel*MOD.slevel && MOD.slevel<1000000 ){
				MOD.eps-=1214000+1214000*MOD.slevel*MOD.slevel;
				MOD.meter();
				MOD.slevel+=1;
				MOD.solerPower();
				MOD.addeps+=2555;
				MOD.check();
				MOD.sp=1214000+1214000*MOD.slevel*MOD.slevel;
				MOD.checksoler();
				if (MOD.slevel == 1){
					Game.Notify('太陽光発電開放！','リソース不要の最高の発電！',0,6);
				}
				if (MOD.slevel == 10){
					Game.Notify('太陽光発電の開拓者！','目指せ、テラソーラー！',0,6);
				}
				if (MOD.slevel == 50){
					Game.Notify('太陽光発電の使徒！','ここからが本番！',0,6);
				}
				if (MOD.slevel == 75){
					Game.Notify('太陽光発電の支配人！','ギア上げていこうぜ！',0,6);
				}
				if (MOD.slevel == 100){
					Game.Notify('太陽光発電の喰らい人！','まだ100だよ？',0,6);
				}
				if (MOD.slevel == 125){
					Game.Notify('太陽光発電で有名な人！','太陽光は終わらない',0,6);
				}
				if (MOD.slevel == 150){
					Game.Notify('太陽光発電の愛人！','人生を捧げる準備はできたかい？',0,6);
				}
				if (MOD.slevel == 175){
					Game.Notify('太陽光発電の偉人！','教科書に載る日も近い？',0,6);
				}
				if (MOD.slevel == 200){
					Game.Notify('太陽光発電の異人！','キムチ鍋っておいしいよね',0,6);
				}
				if (MOD.slevel == 225){
					Game.Notify('太陽光発電ののれん分け！','このゲームでは電気は減衰しません',0,6);
				}
				if (MOD.slevel == 250){
					Game.Notify('太陽光発電の影武者！','太陽光も戦国時代？',0,6);
				}
				if (MOD.slevel == 275){
					Game.Notify('太陽光発電の兄者人！','まさかあなたは…生き別れの…',0,6);
				}
				if (MOD.slevel == 300){
					Game.Notify('太陽光発電の座敷童！','未練が残っちゃった',0,6);
				}
				if (MOD.slevel == 325){
					Game.Notify('太陽光発電の候補者！','立候補して生贄となれ',0,6);
				}
				if (MOD.slevel == 350){
					Game.Notify('太陽光発電の申し子！','身体が太陽光パネルに…！？',0,6);
				}
				if (MOD.slevel == 375){
					Game.Notify('太陽光発電の客人！','きゃくじんじゃないよまろうどだよ',0,6);
				}
				if (MOD.slevel == 400){
					Game.Notify('太陽光発電の管理人！','苦節あってようやくたどり着いた',0,6);
				}
				if (MOD.slevel == 425){
					Game.Notify('太陽光発電の番人！','全宇宙が注目を集めてる',0,6);
				}
				if (MOD.slevel == 450){
					Game.Notify('太陽光発電検定30級！','まだまだ赤ちゃん',0,6);
				}
				if (MOD.slevel == 475){
					Game.Notify('太陽光発電検定29級！','まだ歩けないよ',0,6);
				}
				if (MOD.slevel == 500){
					Game.Notify('太陽光発電検定28級！','言葉を話せるようになった！',0,6);
				}
				if (MOD.slevel == 525){
					Game.Notify('太陽光発電検定27級！','立てそうで立てない！',0,6);
				}
				if (MOD.slevel == 550){
					Game.Notify('太陽光発電検定26級！','ようやく立てるようになった！',0,6);
				}
				if (MOD.slevel == 575){
					Game.Notify('太陽光発電検定25級！','言葉を交わせるようになった',0,6);
				}
				if (MOD.slevel == 600){
					Game.Notify('太陽光発電検定24級！','地球はもう滅びるらしい',0,6);
				}
				if (MOD.slevel == 625){
					Game.Notify('太陽光発電検定23級！','火星に飛べるロケットを開発した！',0,6);
				}
				if (MOD.slevel == 650){
					Game.Notify('太陽光発電検定22級！','小学校に入学しました',0,6);
				}
				if (MOD.slevel == 675){
					Game.Notify('太陽光発電検定21級！','同級生にいじめられたよ～～～',0,6);
				}
				if (MOD.slevel == 700){
					Game.Notify('太陽光発電検定20級！','先生をルンバで論破したルンパッパ！',0,6);
				}
				if (MOD.slevel == 725){
					Game.Notify('太陽光発電検定19級！','旅立ちの日にを逆立ちで歌った卒業式！',0,6);
				}
				if (MOD.slevel == 750){
					Game.Notify('太陽光発電検定18級！','入学式で椅子を倒しちゃった！',0,6);
				}
				if (MOD.slevel == 775){
					Game.Notify('太陽光発電検定17級！','生徒指導室に呼ばれました！',0,6);
				}
				if (MOD.slevel == 800){
					Game.Notify('太陽光発電検定16級！','何もかもが嫌になった文化祭！',0,6);
				}
				if (MOD.slevel == 825){
					Game.Notify('太陽光発電検定15級！','何もかもがどうでもよくなった体育祭！',0,6);
				}
				if (MOD.slevel == 850){
					Game.Notify('太陽光発電検定14級！','図書室でこっそり本に折り目つけてやった！',0,6);
				}
				if (MOD.slevel == 875){
					Game.Notify('太陽光発電検定13級！','暴れてたらガラス割れちゃった！',0,6);
				}
				if (MOD.slevel == 900){
					Game.Notify('太陽光発電検定12級！','部活出禁？！',0,6);
				}
				if (MOD.slevel == 925){
					Game.Notify('太陽光発電検定11級！','トマト！',0,6);
				}
				if (MOD.slevel == 950){
					Game.Notify('太陽光発電検定10級！','初めて笑った卒業式！',0,6);
				}
				if (MOD.slevel == 975){
					Game.Notify('太陽光発電検定9級！','舐め腐った態度で高校入学！',0,6);
				}
				if (MOD.slevel == 1000){
					Game.Notify('太陽光発電検定8級！','ハバネロを入れたら怒られた！',0,6);
				}
				if (MOD.slevel == 1025){
					Game.Notify('太陽光発電検定7級！','なぜか先生に好かれる！',0,6);
				}
				if (MOD.slevel == 1050){
					Game.Notify('太陽光発電検定6級！','校内放送でやらかす！',0,6);
				}
				if (MOD.slevel == 1075){
					Game.Notify('太陽光発電検定5級！','学校１の変わり者！',0,6);
				}
				if (MOD.slevel == 1100){
					Game.Notify('太陽光発電検定4級！','囚われの身！',0,6);
				}
				if (MOD.slevel == 1125){
					Game.Notify('太陽光発電検定3級！','進級の危機！',0,6);
				}
				if (MOD.slevel == 1150){
					Game.Notify('太陽光発電検定2級！','無事卒業！',0,6);
				}
				if (MOD.slevel == 1175){
					Game.Notify('太陽光発電検定1級！','浪人の危機！',0,6);
				}
				if (MOD.slevel == 1200){
					Game.Notify('太陽光発電検定1段！','進学が決定！',0,6);
				}
				if (MOD.slevel == 1225){
					Game.Notify('太陽光発電検定2段！','入学式に４分遅刻する！',0,6);
				}
				if (MOD.slevel == 1250){
					Game.Notify('太陽光発電検定3段！','初回の授業でやらかす！',0,6);
				}
				if (MOD.slevel == 1275){
					Game.Notify('太陽光発電検定4段！','成績優秀者に選ばれる！',0,6);
				}
				if (MOD.slevel == 1300){
					Game.Notify('太陽光発電検定5段！','危険思想を抱く！',0,6);
				}
				if (MOD.slevel == 1325){
					Game.Notify('太陽光発電検定6段！','世界はクッキーでできていたことを知る！',0,6);
				}
				if (MOD.slevel == 1350){
					Game.Notify('太陽光発電検定7段！','太陽神の力を借りる！',0,6);
				}
				if (MOD.slevel == 1375){
					Game.Notify('太陽光発電検定8段！','君も太陽神にならないか？',0,6);
				}
				if (MOD.slevel == 1400){
					Game.Notify('太陽光発電検定9段！','太陽の一部になるのは辛い',0,6);
				}
				if (MOD.slevel == 1425){
					Game.Notify('太陽光発電検定10段！','辛味チキンをほおばる',0,6);
				}
				if (MOD.slevel == 1450){
					Game.Notify('太陽光発電検定名人！','カラムーチョは敵',0,6);
				}
				if (MOD.slevel == 1475){
					Game.Notify('太陽光発電検定師範！','師匠、一生ついていきます',0,6);
				}
				if (MOD.slevel == 1500){
					Game.Notify('太陽光発電検定師範代！','今日から俺が師匠だ',0,6);
				}
				if (MOD.slevel == 1525){
					Game.Notify('太陽光発電検定超人！','人という概念を超える',0,6);
				}
				if (MOD.slevel == 1550){
					Game.Notify('太陽光発電検定仙人！','はんだごてで世界征服',0,6);
				}
				if (MOD.slevel == 1575){
					Game.Notify('屋上ソーラーパネル化計画１！','まずは資金調達から',0,6);
				}
				if (MOD.slevel == 1600){
					Game.Notify('屋上ソーラーパネル化計画２！','クラウドファンディングで垢バンをくらう',0,6);
				}
				if (MOD.slevel == 1625){
					Game.Notify('屋上ソーラーパネル化計画３！','なんとか１０万の融資を受け取る',0,6);
				}
				if (MOD.slevel == 1650){
					Game.Notify('屋上ソーラーパネル化計画４！','とあるビルの屋上だけを購入する',0,6);
				}
				if (MOD.slevel == 1675){
					Game.Notify('屋上ソーラーパネル化計画５！','ビルの社長を説得してソーラーパネルを２枚置いてもらう',0,6);
				}
				if (MOD.slevel == 1700){
					Game.Notify('屋上ソーラーパネル化計画６！','２枚のソーラーパネルでお金を稼ぐ',0,6);
				}
				if (MOD.slevel == 1725){
					Game.Notify('屋上ソーラーパネル化計画７！','１００年放置してようやくソーラーパネルが３枚に',0,6);
				}
				if (MOD.slevel == 1750){
					Game.Notify('屋上ソーラーパネル化計画８！','幾年の歳月を経てソーラーパネルを１００枚に増やす',0,6);
				}
				if (MOD.slevel == 1775){
					Game.Notify('屋上ソーラーパネル化計画９！','１００枚置いてもまだ屋上の１％しか埋まってない…',0,6);
				}
				if (MOD.slevel == 1800){
					Game.Notify('屋上ソーラーパネル化計画１０！','維持費が足りないので社長に直談判',0,6);
				}
				if (MOD.slevel == 1825){
					Game.Notify('屋上ソーラーパネル化計画１１！','太陽光の良さを５時間語り尽くす',0,6);
				}
				if (MOD.slevel == 1850){
					Game.Notify('屋上ソーラーパネル化計画１２！','記念すべき１０１枚目を置く',0,6);
				}
				if (MOD.slevel == 1875){
					Game.Notify('屋上ソーラーパネル化計画１３！','全てがうまくいく気がする',0,6);
				}
				if (MOD.slevel == 1900){
					Game.Notify('屋上ソーラーパネル化計画１４！','抹茶ミルクの美味さに気づく',0,6);
				}
				if (MOD.slevel == 1925){
					Game.Notify('屋上ソーラーパネル化計画１５！','きのこの山VSたけのこの里',0,6);
				}
				if (MOD.slevel == 1950){
					Game.Notify('屋上ソーラーパネル化計画１６！','氷山の一角、されど富士山',0,6);
				}
				if (MOD.slevel == 1975){
					Game.Notify('屋上ソーラーパネル化計画１７！','右往左往八方美人',0,6);
				}
				if (MOD.slevel == 2000){
					Game.Notify('屋上ソーラーパネル化計画１８！','右も左もモアイ像',0,6);
				}
				if (MOD.slevel == 2025){
					Game.Notify('屋上ソーラーパネル化計画１９！','座右の銘は名誉革命',0,6);
				}
				if (MOD.slevel == 2050){
					Game.Notify('屋上ソーラーパネル化計画２０！','犬も歩けば碧空に笑う',0,6);
				}
				if (MOD.slevel == 2075){
					Game.Notify('屋上ソーラーパネル化計画２１！','為体に終止符を',0,6);
				}
				if (MOD.slevel == 2100){
					Game.Notify('屋上ソーラーパネル化計画２２！','猫の手もかなり痛い',0,6);
				}
				if (MOD.slevel == 2125){
					Game.Notify('屋上ソーラーパネル化計画２３！','人よ人よに痛み分け',0,6);
				}
				if (MOD.slevel == 2150){
					Game.Notify('屋上ソーラーパネル化計画２４！','人並みにじゃんけんや',0,6);
				}
				if (MOD.slevel == 2175){
					Game.Notify('屋上ソーラーパネル化計画２５！','富士山麓禁書目録',0,6);
				}
				if (MOD.slevel == 2200){
					Game.Notify('屋上ソーラーパネル化計画２６！','言語道断の写輪眼',0,6);
				}
				if (MOD.slevel == 2225){
					Game.Notify('屋上ソーラーパネル化計画２７！','風林火山国破山有',0,6);
				}
				if (MOD.slevel == 2250){
					Game.Notify('屋上ソーラーパネル化計画２８！','はじめましては一期一会',0,6);
				}
				if (MOD.slevel == 2275){
					Game.Notify('屋上ソーラーパネル化計画２９！','因果応報レモン参上',0,6);
				}
				if (MOD.slevel == 2300){
					Game.Notify('屋上ソーラーパネル化計画３０！','我田引水我ここに在り',0,6);
				}
				if (MOD.slevel == 2325){
					Game.Notify('屋上ソーラーパネル化計画３１！','有象無象の写像',0,6);
				}
				if (MOD.slevel == 2350){
					Game.Notify('屋上ソーラーパネル化計画３２！','魑魅魍魎チミ、もう用無し',0,6);
				}
				if (MOD.slevel == 2375){
					Game.Notify('屋上ソーラーパネル化計画３３！','ハヤブサ花鳥風月戦',0,6);
				}
				if (MOD.slevel == 2400){
					Game.Notify('屋上ソーラーパネル化計画３４！','頑張って臥薪嘗胆した',0,6);
				}
				if (MOD.slevel == 2425){
					Game.Notify('屋上ソーラーパネル化計画３５！','たくまきゅんと切磋琢磨',0,6);
				}
				if (MOD.slevel == 2450){
					Game.Notify('屋上ソーラーパネル化計画３６！','諸行無常は響かない',0,6);
				}
				if (MOD.slevel == 2475){
					Game.Notify('屋上ソーラーパネル化計画３７！','なよたけの久保建英',0,6);
				}
				if (MOD.slevel == 2500){
					Game.Notify('屋上ソーラーパネル化計画３８！','御手洗手洗',0,6);
				}
				if (MOD.slevel == 2525){
					Game.Notify('屋上ソーラーパネル化計画３９！','引きこもりの最高到達点',0,6);
				}
				if (MOD.slevel == 2550){
					Game.Notify('屋上ソーラーパネル化計画４０！','トムヤンクン',0,6);
				}
				if (MOD.slevel == 2575){
					Game.Notify('屋上ソーラーパネル化計画４１！','トマトケチャップ日本代表',0,6);
				}
				if (MOD.slevel == 2600){
					Game.Notify('屋上ソーラーパネル化計画４２！','さえずりのない日常',0,6);
				}
				if (MOD.slevel == 2625){
					Game.Notify('屋上ソーラーパネル化計画４３！','綱渡り耐え之助参上',0,6);
				}
				if (MOD.slevel == 2650){
					Game.Notify('屋上ソーラーパネル化計画４４！','明け透けな助太刀',0,6);
				}

			}
			else{
				if(MOD.slevel<1000000){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('UClicker'),'click',function(){
			if (MOD.eps >=666666666+666666666*MOD.nlevel*MOD.nlevel && MOD.nlevel<666666666 ){
				MOD.eps-=666666666+666666666*MOD.nlevel*MOD.nlevel;
				MOD.meter();
				MOD.nlevel+=1;
				MOD.uranPower();
				MOD.addeps+=666666;
				MOD.check();
				MOD.np=666666666+666666666*MOD.nlevel*MOD.nlevel;
				MOD.checkuran();
				if (MOD.nlevel ==1){
					Game.Notify('核融合炉解放！','事故は起こさないでね…',0,6);
				}
				if (MOD.nlevel ==10){
					Game.Notify('核融合炉の先駆者！','メルティーキッスのメルトダウン',0,6);
				}
				if (MOD.nlevel ==25){
					Game.Notify('核融合炉の使徒！','アブナイ発電',0,6);
				}
				if (MOD.nlevel ==50){
					Game.Notify('核融合炉の挑戦者！','核を超えていけ',0,6);
				}
				if (MOD.nlevel ==75){
					Game.Notify('核融合炉の仙人！','増やし過ぎても大丈夫',0,6);
				}
				if (MOD.nlevel ==100){
					Game.Notify('核融合炉の支配者！','全てを理解した',0,6);
				}
				if (MOD.nlevel ==125){
					Game.Notify('核融合炉の豊田議員！','ちーがーうーだーろー！',0,6);
				}
				if (MOD.nlevel ==150){
					Game.Notify('核融合炉の想い人！','アブナイカンケイ',0,6);
				}
				if (MOD.nlevel ==175){
					Game.Notify('核融合炉の操り人形！','傀儡の君',0,6);
				}
				if (MOD.nlevel ==200){
					Game.Notify('核融合炉の職人！','離れ業',0,6);
				}
				if (MOD.nlevel ==225){
					Game.Notify('核融合炉の為政者！','記憶にございません',0,6);
				}
				if (MOD.nlevel ==250){
					Game.Notify('核融合炉の家政婦！','キケンな香り',0,6);
				}
				if (MOD.nlevel ==275){
					Game.Notify('核融合炉の帝王！','エンペラーカイザー',0,6);
				}
				if (MOD.nlevel ==300){
					Game.Notify('核融合炉の征服者！','こんかーだわーるど',0,6);
				}
				if (MOD.nlevel ==325){
					Game.Notify('核融合炉を掴むもの！','世界を掌握せよ',0,6);
				}
			}
			else{
				if(MOD.slevel<666666666){
					Game.Notify('電力不足！','',0,2);
				}
				else{
					Game.Notify('これ以上増設できません。','',0,2);
				}
			
               
		}});
		AddEvent(l('cpsx2id'),'click',function(){
			if (MOD.eps<200){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x2+=1;
			MOD.cpsx2();
			if (MOD.x2%2 == 0)
			{
			  startTimer();
				Game.registerHook('cps',function(cps){return cps*2;});
				Game.recalculateGains=1;
				confx2.style.display="block";
			}
			else {
				stopTimer();
				Game.registerHook('cps',function(cps){return cps/2;});
			    Game.recalculateGains=1;
				confx2.style.display="none";
			}
		});
		AddEvent(l('cpsx3id'),'click',function(){
			if (MOD.eps<5000){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x3+=1;
			MOD.cpsx3();
			if (MOD.x3%2 == 0)
			{
			  x3Timer();
				Game.registerHook('cps',function(cps){return cps*3;});
				Game.recalculateGains=1;
				confx3.style.display="block";
			}
			else {
				stopx3Timer();
				Game.registerHook('cps',function(cps){return cps/3;});
			    Game.recalculateGains=1;
				confx4.style.display="none";
			}
		});
		AddEvent(l('cpsx4id'),'click',function(){
			if (MOD.eps<444444){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x4+=1;
			MOD.cpsx4();
			if (MOD.x4%2 == 0)
			{
			  x4Timer();
				Game.registerHook('cps',function(cps){return cps*4;});
				Game.recalculateGains=1;
				confx4.style.display="block";
			}
			else {
				stopx4Timer();
				Game.registerHook('cps',function(cps){return cps/4;});
			    Game.recalculateGains=1;
				confx4.style.display="none";
			}
		});
		AddEvent(l('cpsx5id'),'click',function(){
			if (MOD.eps<6666666){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x5+=1;
			MOD.cpsx5();
			if (MOD.x5%2 == 0)
			{
			  x5Timer();
				Game.registerHook('cps',function(cps){return cps*5;});
				Game.recalculateGains=1;
				confx5.style.display="block";
			}
			else {
				stopx5Timer();
				Game.registerHook('cps',function(cps){return cps/5;});
			    Game.recalculateGains=1;
				confx5.style.display="none";
			}
		});
		AddEvent(l('cpsx6id'),'click',function(){
			if (MOD.eps<666666666){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x6+=1;
			MOD.cpsx6();
			if (MOD.x6%2 == 0)
			{
			  x6Timer();
				Game.registerHook('cps',function(cps){return cps*6;});
				Game.recalculateGains=1;
				confx6.style.display="block";
			}
			else {
				stopx6Timer();
				Game.registerHook('cps',function(cps){return cps/6;});
			    Game.recalculateGains=1;
				confx6.style.display="none";
			}
		});
		AddEvent(l('cpsx7id'),'click',function(){
			if (MOD.eps<8888888888){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x7+=1;
			MOD.cpsx7();
			if (MOD.x7%2 == 0)
			{
			  x7Timer();
				Game.registerHook('cps',function(cps){return cps*7;});
				Game.recalculateGains=1;
				confx7.style.display="block";
			}
			else {
				stopx7Timer();
				Game.registerHook('cps',function(cps){return cps/7;});
			    Game.recalculateGains=1;
				confx7.style.display="none";
			}
		});
		AddEvent(l('cpsx8id'),'click',function(){
			if (MOD.eps<100000000000){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x8+=1;
			MOD.cpsx8();
			if (MOD.x8%2 == 0)
			{
			  x8Timer();
				Game.registerHook('cps',function(cps){return cps*8;});
				Game.recalculateGains=1;
				confx8.style.display="block";
			}
			else {
				stopx8Timer();
				Game.registerHook('cps',function(cps){return cps/8;});
			    Game.recalculateGains=1;
				confx8.style.display="none";
			}
		});
		AddEvent(l('cpsx9id'),'click',function(){
			if (MOD.eps<10000000000000){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x9+=1;
			MOD.cpsx9();
			if (MOD.x9%2 == 0)
			{
			  x9Timer();
				Game.registerHook('cps',function(cps){return cps*9;});
				Game.recalculateGains=1;
				confx9.style.display="block";
			}
			else {
				stopx9Timer();
				Game.registerHook('cps',function(cps){return cps/9;});
			    Game.recalculateGains=1;
				confx9.style.display="none";
			}
		});
		AddEvent(l('cpsx10id'),'click',function(){
			if (MOD.eps<10000000000000000){
				return
			}
            PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
		    MOD.x10+=1;
			MOD.cpsx9();
			if (MOD.x10%2 == 0)
			{
			  x10Timer();
				Game.registerHook('cps',function(cps){return cps*10;});
				Game.recalculateGains=1;
				confx10.style.display="block";
			}
			else {
				stopx10Timer();
				Game.registerHook('cps',function(cps){return cps/10;});
			    Game.recalculateGains=1;
				confx10.style.display="none";
			}
		});
		AddEvent(l('tinca'),'click',function(){
			MOD.tincableonoff+=1;
			if (MOD.tincableonoff == 1){
				if (MOD.tin >=50){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.tin-=50;
					MOD.tinamo();
					Game.Notify('錫の導線','やぁ、こんにちは',0,4);
					MOD.tincableonoff+=1;
					MOD.tincable();
				}
            
			}
		});
		AddEvent(l('advtinca'),'click',function(){
			MOD.advtincableon+=1;
			if (MOD.advtincableon == 1){
				if (MOD.tin>=500 && MOD.iron>=30){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.tin-=500;
					MOD.tinamo();
					MOD.iron-=30;
					MOD.ironamo();
					Game.Notify('改良型錫の導線','調子はどうだい？',0,4);
					MOD.advtincableon+=1;
					MOD.advancedtincable();
				}
			}

		});
		AddEvent(l('hybtinca'),'click',function(){
			MOD.hybtincableon+=1;
			if (MOD.hybtincableon ==1){
				if (MOD.tin>=5000 && MOD.silver>=100 && MOD.diamond>=5){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*3;
					MOD.check();
					MOD.tin-=5000;
					MOD.tinamo();
					MOD.silver-=100;
					MOD.silveramo();
					MOD.diamond-=5;
					MOD.diamondamo();
					Game.Notify('発展型錫の導線','嘘だろ？',0,4);
					MOD.hybtincableon+=1;
					MOD.hybridtincable();
				}
			}

		});
		AddEvent(l('ulttinca'),'click',function(){
			MOD.ulttincableon+=1;
			if (MOD.ulttincableon == 1){
				if (MOD.tin>=50000 && MOD.silver>=1000 && MOD.diamond>=100){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*4;
					MOD.check();
					MOD.tin-=50000;
					MOD.tinamo();
					MOD.silver-=1000;
					MOD.silveramo();
					MOD.diamond-=100;
					MOD.diamondamo();
					Game.Notify('究極型錫の導線','重力に逆らう者',0,4);
					MOD.ulttincableon+=1;
					MOD.ultimatetincable();
				}
			}

		});
		AddEvent(l('cupperca'),'click',function(){
			MOD.cuppercableon+=1;
			if (MOD.cuppercableon == 1){
				if (MOD.cupper>=50){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.cupper-=50;
					MOD.cupperamo();
					Game.Notify('銅の導線','ようこそ',0,4);
					MOD.cuppercableon+=1;
					MOD.cuppercable();
				}
			}
			
		});
		AddEvent(l('advcupperca'),'click',function(){
			MOD.advcuppercableon+=1;
			if (MOD.advcuppercableon == 1){
				if (MOD.cupper>=500 && MOD.iron>=30){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.cupper-=500;
					MOD.cupperamo();
					MOD.iron-=30;
					MOD.ironamo();
					Game.Notify('改良型銅の導線','やぁ、元気かい？',0,4);
					MOD.advcuppercableon+=1;
					MOD.advancedcuppercable();
				}
			}

		});
		AddEvent(l('hybcupperca'),'click',function(){
			MOD.hybcuppercableon+=1;
			if (MOD.hybcuppercableon == 1){
				if (MOD.cupper>=5000 && MOD.gold>=100 && MOD.diamond>=5){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*3;
					MOD.check();
					MOD.cupper-=5000;
					MOD.cupperamo();
					MOD.gold-=100;
					MOD.goldamo();
					MOD.diamond-=5;
					MOD.diamondamo();
					Game.Notify('発展型銅の導線','大変だったんじゃないの？',0,4);
					MOD.hybcuppercableon+=1;
					MOD.hybridcuppercable();
				}
			}

		});
		AddEvent(l('ultcupperca'),'click',function(){
			MOD.ultcuppercableon+=1;
			if (MOD.ultcuppercableon == 1){
				if (MOD.cupper>=50000 && MOD.gold>=1000 && MOD.diamond>=100){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*4;
					MOD.check();
					MOD.cupper-=50000;
					MOD.cupperamo();
					MOD.gold-=1000;
					MOD.goldamo();
					MOD.diamond-=100;
					MOD.diamondamo();
					Game.Notify('究極型銅の導線','よくここまで来たね',0,4);
					MOD.ultcuppercableon+=1;
					MOD.ultimatecuppercable();
				}
			}

		});
		AddEvent(l('goldca'),'click',function(){
			MOD.goldcableon+=1;
			if (MOD.goldcableon == 1){
				if (MOD.gold >=50 && MOD.cupper >=100){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.gold-=50;
					MOD.goldamo();
					MOD.cupper-=100;
					MOD.cupperamo();
					Game.Notify('金の導線','さらなる高みへ',0,4);
					MOD.goldcableon+=1;
					MOD.goldcable();
				}
            
			}
		});
		AddEvent(l('advgoldca'),'click',function(){
			MOD.advgoldcableon+=1;
			if (MOD.advgoldcableon == 1){
				if (MOD.gold >=250 && MOD.cupper >=500 && MOD.iron >=150){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.gold-=250;
					MOD.goldamo();
					MOD.cupper-=500;
					MOD.cupperamo();
					MOD.iron-=150;
					MOD.ironamo();
					Game.Notify('改良型金の導線','こっちは雨が降ってるよ',0,4);
					MOD.advgoldcableon+=1;
					MOD.advgoldcable();
				}
            
			}
		});
		AddEvent(l('hybgoldca'),'click',function(){
			MOD.hybgoldcableon+=1;
			if (MOD.hybgoldcableon == 1){
				if (MOD.gold >=1000 && MOD.cupper >=5000 && MOD.iron >=1500){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*3;
					MOD.check();
					MOD.gold-=1000;
					MOD.goldamo();
					MOD.cupper-=5000;
					MOD.cupperamo();
					MOD.iron-=1500;
					MOD.ironamo();
					Game.Notify('発展型金の導線','あちゃぽん！',0,4);
					MOD.hybgoldcableon+=1;
					MOD.hybgoldcable();
				}
            
			}
		});
		AddEvent(l('ultgoldca'),'click',function(){
			MOD.ultgoldcableon+=1;
			if (MOD.ultgoldcableon == 1){
				if (MOD.gold >=5000 && MOD.cupper >=50000 && MOD.iron >=15000){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*4;
					MOD.check();
					MOD.gold-=5000;
					MOD.goldamo();
					MOD.cupper-=50000;
					MOD.cupperamo();
					MOD.iron-=15000;
					MOD.ironamo();
					Game.Notify('究極型金の導線','お前は何者だ？',0,4);
					MOD.ultgoldcableon+=1;
					MOD.ultgoldcable();
				}
            
			}
		});
		AddEvent(l('diamondca'),'click',function(){
			MOD.diamondcableon+=1;
			if (MOD.diamondcableon == 1){
				if (MOD.diamond >=25){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.diamond-=25;
					MOD.diamondamo();
					Game.Notify('ダイヤの導線','最高の導線',0,4);
					MOD.diamondcableon+=1;
					MOD.diamondcable();
				}
            
			}
		});
		AddEvent(l('advdiamondca'),'click',function(){
			MOD.advdiamondcableon+=1;
			if (MOD.advdiamondcableon == 1){
				if (MOD.diamond >=100 && MOD.cupper >=1000 && MOD.silver >=500){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*2;
					MOD.check();
					MOD.diamond-=100;
					MOD.diamondamo();
					MOD.cupper-=1000;
					MOD.cupperamo();
					MOD.silver-=500;
					MOD.silveramo();
					Game.Notify('改良型ダイヤの導線','風邪引いてない？大丈夫？',0,4);
					MOD.advdiamondcableon+=1;
					MOD.advdiamondcable();
				}
            
			}
		});
		AddEvent(l('hybdiamondca'),'click',function(){
			MOD.hybdiamondcableon+=1;
			if (MOD.hybdiamondcableon == 1){
				if (MOD.diamond >=500 && MOD.cupper >=10000 && MOD.silver >=1500){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*3;
					MOD.check();
					MOD.diamond-=500;
					MOD.diamondamo();
					MOD.cupper-=10000;
					MOD.cupperamo();
					MOD.silver-=1500;
					MOD.silveramo();
					Game.Notify('発展型ダイヤの導線','うわぁ…',0,4);
					MOD.hybdiamondcableon+=1;
					MOD.hybdiamondcable();
				}
            
			}
		});
		AddEvent(l('ultdiamondca'),'click',function(){
			MOD.ultdiamondcableon+=1;
			if (MOD.ultdiamondcableon == 1){
				if (MOD.diamond >=1000 && MOD.cupper >=100000 && MOD.silver >=15000){
					PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
					MOD.multiplicationeps=MOD.multiplicationeps*4;
					MOD.check();
					MOD.diamond-=1000;
					MOD.diamondamo();
					MOD.cupper-=100000;
					MOD.cupperamo();
					MOD.silver-=15000;
					MOD.silveramo();
					Game.Notify('究極型ダイヤの導線','地球がひっくり返った',0,4);
					MOD.ultdiamondcableon+=1;
					MOD.ultdiamondcable();
				}
            
			}
		});
		AddEvent(l('CClicker'),'mouseover',function(){
            crank.style.display='block'
		});
		AddEvent(l('CClicker'),'mouseleave',function(){
            crank.style.display='none'
		});
		AddEvent(l('storeClicker'),'mouseover',function(){
            thermal.style.display='block'
		});
		AddEvent(l('storeClicker'),'mouseleave',function(){
            thermal.style.display='none'
		});
		AddEvent(l('WClicker'),'mouseover',function(){
            hydro.style.display='block'
		});
		AddEvent(l('WClicker'),'mouseleave',function(){
            hydro.style.display='none'
		});
		AddEvent(l('AClicker'),'mouseover',function(){
            wind.style.display='block'
		});
		AddEvent(l('AClicker'),'mouseleave',function(){
            wind.style.display='none'
		});
		AddEvent(l('GClicker'),'mouseover',function(){
            geo.style.display='block'
		});
		AddEvent(l('GClicker'),'mouseleave',function(){
            geo.style.display='none'
		});
		AddEvent(l('SClicker'),'mouseover',function(){
            soler.style.display='block'
		});
		AddEvent(l('SClicker'),'mouseleave',function(){
            soler.style.display='none'
		});
		AddEvent(l('UClicker'),'mouseover',function(){
            uran.style.display='block'
		});
		AddEvent(l('UClicker'),'mouseleave',function(){
            uran.style.display='none'
		});
		AddEvent(l('cpsx2id'),'mouseover',function(){
            x2.style.display='block'
		});
		AddEvent(l('cpsx2id'),'mouseleave',function(){
            x2.style.display='none'
		});
		AddEvent(l('cpsx3id'),'mouseover',function(){
            x3.style.display='block'
		});
		AddEvent(l('cpsx3id'),'mouseleave',function(){
            x3.style.display='none'
		});
		AddEvent(l('cpsx4id'),'mouseover',function(){
            x4.style.display='block'
		});
		AddEvent(l('cpsx4id'),'mouseleave',function(){
            x4.style.display='none'
		});
		AddEvent(l('cpsx5id'),'mouseover',function(){
            x5.style.display='block'
		});
		AddEvent(l('cpsx5id'),'mouseleave',function(){
            x5.style.display='none'
		});
		AddEvent(l('cpsx6id'),'mouseover',function(){
            x6.style.display='block'
		});
		AddEvent(l('cpsx6id'),'mouseleave',function(){
            x6.style.display='none'
		});
		AddEvent(l('cpsx7id'),'mouseover',function(){
            x7.style.display='block'
		});
		AddEvent(l('cpsx7id'),'mouseleave',function(){
            x7.style.display='none'
		});
		AddEvent(l('cpsx8id'),'mouseover',function(){
            x8.style.display='block'
		});
		AddEvent(l('cpsx8id'),'mouseleave',function(){
            x8.style.display='none'
		});
		AddEvent(l('cpsx9id'),'mouseover',function(){
            x9.style.display='block'
		});
		AddEvent(l('cpsx9id'),'mouseleave',function(){
            x9.style.display='none'
		});
		AddEvent(l('cpsx10id'),'mouseover',function(){
            x10.style.display='block'
		});
		AddEvent(l('cpsx10id'),'mouseleave',function(){
            x10.style.display='none'
		});
		AddEvent(l('reset'),'mouseover',function(){
            rcon.style.display='block'
		});
		AddEvent(l('reset'),'mouseleave',function(){
            rcon.style.display='none'
		});
		AddEvent(l('tinca'),'mouseover',function(){
            continca.style.display='block'
		});
		AddEvent(l('tinca'),'mouseleave',function(){
            continca.style.display='none'
		});
		AddEvent(l('advtinca'),'mouseover',function(){
            conadvtinca.style.display='block'
		});
		AddEvent(l('advtinca'),'mouseleave',function(){
            conadvtinca.style.display='none'
		});
		AddEvent(l('hybtinca'),'mouseover',function(){
            conhybtinca.style.display='block'
		});
		AddEvent(l('hybtinca'),'mouseleave',function(){
            conhybtinca.style.display='none'
		});
		AddEvent(l('ulttinca'),'mouseover',function(){
            conulttinca.style.display='block'
		});
		AddEvent(l('ulttinca'),'mouseleave',function(){
            conulttinca.style.display='none'
		});
		AddEvent(l('cupperca'),'mouseover',function(){
            concupperca.style.display='block'
		});
		AddEvent(l('cupperca'),'mouseleave',function(){
            concupperca.style.display='none'
		});
		AddEvent(l('advcupperca'),'mouseover',function(){
            conadvcupperca.style.display='block'
		});
		AddEvent(l('advcupperca'),'mouseleave',function(){
            conadvcupperca.style.display='none'
		});
		AddEvent(l('hybcupperca'),'mouseover',function(){
            conhybcupperca.style.display='block'
		});
		AddEvent(l('hybcupperca'),'mouseleave',function(){
            conhybcupperca.style.display='none'
		});
		AddEvent(l('ultcupperca'),'mouseover',function(){
            conultcupperca.style.display='block'
		});
		AddEvent(l('ultcupperca'),'mouseleave',function(){
            conultcupperca.style.display='none'
		});
		AddEvent(l('goldca'),'mouseover',function(){
            congoldca.style.display='block'
		});
		AddEvent(l('goldca'),'mouseleave',function(){
            congoldca.style.display='none'
		});
		AddEvent(l('advgoldca'),'mouseover',function(){
            conadvgoldca.style.display='block'
		});
		AddEvent(l('advgoldca'),'mouseleave',function(){
            conadvgoldca.style.display='none'
		});
		AddEvent(l('hybgoldca'),'mouseover',function(){
            conhybgoldca.style.display='block'
		});
		AddEvent(l('hybgoldca'),'mouseleave',function(){
            conhybgoldca.style.display='none'
		});
		AddEvent(l('ultgoldca'),'mouseover',function(){
            conultgoldca.style.display='block'
		});
		AddEvent(l('ultgoldca'),'mouseleave',function(){
            conultgoldca.style.display='none'
		});
		AddEvent(l('diamondca'),'mouseover',function(){
            condiamondca.style.display='block'
		});
		AddEvent(l('diamondca'),'mouseleave',function(){
            condiamondca.style.display='none'
		});
		AddEvent(l('advdiamondca'),'mouseover',function(){
            conadvdiamondca.style.display='block'
		});
		AddEvent(l('advdiamondca'),'mouseleave',function(){
            conadvdiamondca.style.display='none'
		});
		AddEvent(l('hybdiamondca'),'mouseover',function(){
            conhybdiamondca.style.display='block'
		});
		AddEvent(l('hybdiamondca'),'mouseleave',function(){
            conhybdiamondca.style.display='none'
		});
		AddEvent(l('ultdiamondca'),'mouseover',function(){
            conultdiamondca.style.display='block'
		});
		AddEvent(l('ultdiamondca'),'mouseleave',function(){
            conultdiamondca.style.display='none'
		});
		epsTimer();


    },
	
	save:function(){
		return (JSON.stringify({
			eps		: this.eps,
			addeps	: this.addeps,
			tlevel	: this.tlevel,
			hlevel  : this.hlevel,
			wlevel  : this.wlevel,
			glevel  : this.glevel,
			slevel  : this.slevel,
			nlevel  : this.nlevel,
			tin     : this.tin,
			cupper  : this.cupper,
			iron    : this.iron,
			silver  : this.silver,
			gold    : this.gold,
			diamond : this.diamond,
			tincableonoff : this.tincableonoff,
			multiplicationeps : this.multiplicationeps,
			advtincableon : this.advtincableon,
			hybtincableon : this.hybtincableon,
			ulttincableon : this.ulttincableon,
			cuppercableon : this.cuppercableon,
			advcuppercableon : this.advcuppercableon,
			hybcuppercableon : this.hybcuppercableon,
			ultcuppercableon : this.ultcuppercableon,
			goldcableon : this.goldcableon,
			advgoldcableon : this.advgoldcableon,
			hybgoldcableon : this.hybgoldcableon,
			ultgoldcableon : this.ultgoldcableon,
			diamondcableon : this.diamondcableon,
			advdiamondcableon : this.advdiamondcableon,
			hybdiamondcableon : this.hybdiamondcableon,
			ultdiamondcableon : this.ultdiamondcableon,
		
		}));
	},
	load:function(str){
		var datas = JSON.parse(str);
		if(!datas.eps && !datas.addeps){
			return;
		}
		this.eps = datas.eps;
		this.addeps = datas.addeps;
		this.tlevel = datas.tlevel;
		this.hlevel = datas.hlevel;
		this.wlevel = datas.wlevel;
		this.glevel = datas.glevel;
		this.slevel = datas.slevel;
		this.nlevel = datas.nlevel;
		this.tin = datas.tin;
		this.cupper = datas.cupper;
		this.iron = datas.iron;
		this.silver = datas.silver;
		this.gold = datas.gold;
		this.diamond = datas.diamond;
		this.tincableonoff = datas.tincableonoff;
		this.multiplicationeps = datas.multiplicationeps;
		this.advtincableon = datas.advtincableon;
		this.hybtincableon = datas.hybtincableon;
		this.ulttincableon = datas.ulttincableon;
		this.cuppercableon = datas.cuppercableon;
		this.advcuppercableon = datas.advcuppercableon;
		this.hybcuppercableon = datas.hybcuppercableon;
		this.ultcuppercableon = datas.ultcuppercableon;
		this.goldcableon = datas.goldcableon;
		this.advgoldcableon = datas.advgoldcableon;
		this.hybgoldcableon = datas.hybgoldcableon;
		this.ultgoldcableon = datas.ultgoldcableon;
		this.diamondcableon = datas.diamondcableon;
		this.advdiamondcableon = datas.advdiamondcableon;
		this.hybdiamondcableon = datas.hybdiamondcableon;
		this.ultdiamondcableon = datas.ultdiamondcableon;
		this.meter();
        this.check();
        this.updateScore();  
		this.waterPower();
		this.windPower();
		this.gPower();
		this.solerPower();
		this.uranPower();
		this.tinamo();
		this.cupperamo();
		this.ironamo();
		this.silveramo();
		this.goldamo();
		this.diamondamo();
		this.tincable();
		this.advancedtincable();
		this.hybridtincable();
		this.ultimatetincable();
		this.cuppercable();
		this.advancedcuppercable();
		this.hybridcuppercable();
		this.ultimatecuppercable();
		this.goldcable();
		this.advancedgoldcable();
		this.hybridgoldcable();
		this.ultimategoldcable();
		this.diamondcable();
		this.advanceddiamondcable();
		this.hybriddiamondcable();
		this.ultimatediamondcable();
		},
	hung:function()
	{
		l('yuuClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/WoodenCrank.png" width ="35px" height ="40px">';
	},
	funes:function()
	{
		l('funesClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/funes.png" width ="35px" height ="40px">';
	},
	water:function()
	{
		l('waterClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/waterpower.png" width ="35px" height ="40px">';
	},
	wind:function()
	{
		l('windClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/windpower.png" width ="35px" height ="40px">';
	},
	geo:function()
	{
		l('geoClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/geo.png" width ="35px" height ="40px">';
	},
	soler:function()
	{
		l('solerClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/soler.png" width ="35px" height ="40px">';
	},
	nuclear:function()
	{
		l('nuclearClicker').innerHTML='<img src ="../mods/local/industrialCookies/image/nuclear.png" width ="35px" height ="40px">';
	},
	crank:function(){
		l('CClicker').innerHTML='Crank';
	},
	meter:function(){
		l('EPSMeter').innerHTML=Beautify(Math.floor(this.eps))+'E';
	},
	tincable:function(){
	if (this.tincableonoff == 0){
		l('tinca').innerHTML='<img src ="../mods/local/industrialCookies/image/tincable.png" width ="35px" height ="40px">';
	}
	else{
		l('tinca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrtincable.png" width ="35px" height ="40px">';
	}
	},
	advancedtincable:function(){
		if (this.advtincableon == 0){
			l('advtinca').innerHTML='<img src ="../mods/local/industrialCookies/image/advancedtincable.png" width ="35px" height ="40px">';
		}
		else{
			l('advtinca').innerHTML='<img src ="../mods/local/industrialCookies/image/alradvancedtincable.png" width ="35px" height ="40px">';			
		}
		
	},
	hybridtincable:function(){
		if (this.hybtincableon == 0){
			l('hybtinca').innerHTML='<img src ="../mods/local/industrialCookies/image/hybridtincable.png" width ="35px" height ="40px">';
		}
		else{
			l('hybtinca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrhybridtincable.png" width ="35px" height ="40px">';
		}
		
	},
	ultimatetincable:function(){
		if (this.ulttincableon == 0){
			l('ulttinca').innerHTML='<img src ="../mods/local/industrialCookies/image/ultimatetincable.png" width ="35px" height ="40px">';
		}
		else{
			l('ulttinca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrultimatetincable.png" width ="35px" height ="40px">';
		}

	},
	cuppercable:function(){
		if (this.cuppercableon == 0){
            l('cupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/cuppercable.png" width ="35px" height ="40px">';
		}
		else{
			l('cupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrcuppercable.png" width ="35px" height ="40px">';
		}
		
	},
	advancedcuppercable:function(){
		if (this.advcuppercableon == 0){
			l('advcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/advancedcuppercable.png" width ="35px" height ="40px">';
		}
		else{
			l('advcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/alradvancedcuppercable.png" width ="35px" height ="40px">';
		}

	},
	hybridcuppercable:function(){
		if (this.hybcuppercableon == 0){
			l('hybcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/hybridcuppercable.png" width ="35px" height ="40px">';
		}
		else{
			l('hybcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrhybridcuppercable.png" width ="35px" height ="40px">';
		}
		
	},
	ultimatecuppercable:function(){
		if (this.ultcuppercableon == 0){
			l('ultcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/ultimatecuppercable.png" width ="35px" height ="40px">';
		}
		else{
			l('ultcupperca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrultimatecuppercable.png" width ="35px" height ="40px">';
		}

	},
	goldcable:function(){
		if (this.goldcableon == 0){
			l('goldca').innerHTML='<img src ="../mods/local/industrialCookies/image/goldcable.png" width ="35px" height ="40px">';
		}
		else{
			l('goldca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrgoldcable.png" width ="35px" height ="40px">';
		}
		},
	advancedgoldcable:function(){
		if (this.advgoldcableon == 0){
			l('advgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/advancedgoldcable.png" width ="35px" height ="40px">';
		}
	    else{
			l('advgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/alradvancedgoldcable.png" width ="35px" height ="40px">';			
		}
			
	},
	hybridgoldcable:function(){
		if (this.hybgoldcableon == 0){
			l('hybgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/hybridgoldcable.png" width ="35px" height ="40px">';
		}
		else{
			l('hybgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrhybridgoldcable.png" width ="35px" height ="40px">';
		}
			
	},
	ultimategoldcable:function(){
		if (this.ultgoldcableon == 0){
			l('ultgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/ultimategoldcable.png" width ="35px" height ="40px">';
		}
		else{
			l('ultgoldca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrultimategoldcable.png" width ="35px" height ="40px">';
		}
	
	},
	diamondcable:function(){
		if (this.diamondcableon == 0){
			l('diamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/diamondcable.png" width ="35px" height ="40px">';
		}
		else{
			l('diamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrdiamondcable.png" width ="35px" height ="40px">';
		}
	},
	advanceddiamondcable:function(){
		if (this.advdiamondcableon == 0){
			l('advdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/advanceddiamondcable.png" width ="35px" height ="40px">';
		}
		else{
			l('advdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/alradvanceddiamondcable.png" width ="35px" height ="40px">';			
		}
			
	},
	hybriddiamondcable:function(){
		if (this.hybdiamondcableon == 0){
			l('hybdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/hybriddiamondcable.png" width ="35px" height ="40px">';
		}
		else{
			l('hybdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrhybriddiamondcable.png" width ="35px" height ="40px">';
		}
			
	},
	ultimatediamondcable:function(){
		if (this.ultdiamondcableon == 0){
			l('ultdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/ultimatediamondcable.png" width ="35px" height ="40px">';
		}
		else{
			l('ultdiamondca').innerHTML='<img src ="../mods/local/industrialCookies/image/alrultimatediamondcable.png" width ="35px" height ="40px">';
		}
	
	},
	reset:function(){
		l('reset').innerHTML='RESET';
	},
	bui:function(){
		l('buildings').innerHTML='generator';
	},
	fea:function(){
		l('features').innerHTML='feature';
	},
	modu:function(){
		l('modules').innerHTML='module';
	},
	updateScore:function()
	{
		l('storeClicker').innerHTML='Thermal|'+Beautify(this.tlevel);//Thermal power generator
	},
	waterPower:function()
	{
		l('WClicker').innerHTML='Hydro|'+Beautify(this.hlevel);//Hydroelectric generator
	},
	windPower:function()
	{
		l('AClicker').innerHTML='Wind|'+Beautify(this.wlevel);//Wind power generator
	},
	gPower:function()
	{
		l('GClicker').innerHTML='Geo|'+Beautify(this.glevel);//Geothermal generator
	},
	solerPower:function()
	{
		l('SClicker').innerHTML='Soler|'+Beautify(this.slevel);//SolerPanel
	},
	uranPower:function()
	{
		l('UClicker').innerHTML='Nuclear|'+Beautify(this.nlevel);//NuclearPowerPlant
	},
	cpsx2:function()
	{
		l('cpsx2id').innerHTML='x2Fever';
	},
	cpsx3:function()
	{
		l('cpsx3id').innerHTML='x3Fever';
	},
	cpsx4:function()
	{
		l('cpsx4id').innerHTML='x4Fever';
	},
	cpsx5:function()
	{
		l('cpsx5id').innerHTML='x5Fever';
	},
	cpsx6:function()
	{
		l('cpsx6id').innerHTML='x6Fever';
	},
	cpsx7:function()
	{
		l('cpsx7id').innerHTML='x7Fever';
	},
	cpsx8:function()
	{
		l('cpsx8id').innerHTML='x8Fever';
	},
	cpsx9:function()
	{
		l('cpsx9id').innerHTML='x9Fever';
	},
	cpsx10:function()
	{
		l('cpsx10id').innerHTML='x10Fever';
	},
	fancy:function()
	{
		l('startClicker').innerHTML='Change';
	},
	check:function()
	{
        l('epschecker').innerHTML=Beautify(this.addeps*this.multiplicationeps*20-this.subtraction*20)+'(E/s)';
	},
	checkcrank:function()
	{
        l('crank').innerHTML='　手回し発電機　　　1クリックごとに1(E)獲得できます。';
	},
	checkthermal:function()
	{
        l('thermal').innerHTML='　　火力発電機:　　　1施設ごとに１(E/s):　購入費用:'+Beautify(this.tp)+'E';
	},
	checkhydro:function()
	{
        l('hydro').innerHTML='　　水力発電機:　　　1施設ごとに10(E/s):　購入費用:'+Beautify(this.hp)+'E';
	},
	checkwind:function()
	{
        l('wind').innerHTML='　　風力発電機:　　　　　1施設ごとに100(E/s):　　購入費用:'+Beautify(this.wp)+'E';
	},
	checkgeo:function()
	{
        l('geo').innerHTML='　　地熱発電機:　　　　　1施設ごとに900(E/s):　　購入費用:'+Beautify(this.gp)+'E';
	},
	checksoler:function()
	{
        l('soler').innerHTML='　　太陽光発電:　　　　　　　　　　　　　　1施設ごとに50,000(E/s):　　　　　　　　　購入費用:'+Beautify(this.sp)+'E';
	},
	checkuran:function()
	{
        l('uran').innerHTML='　　核融合炉:　　　　　　　　　　　　　　　1施設ごとに13,333,320(E/s):　　　　　　　　　購入費用:'+Beautify(this.np)+'E';
	},
	checkx2:function()
	{
        l('x2').innerHTML='秒間200(E)を消費して、その間、Cpsをさらに２倍にします。';
	},
	checkx3:function()
	{
        l('x3').innerHTML='秒間5,000(E)を消費して、その間、Cpsをさらに3倍にします。';
	},
	checkx4:function()
	{
        l('x4').innerHTML='秒間444,444(E)を消費して、その間、Cpsをさらに4倍にします。';
	},
	checkx5:function()
	{
        l('x5').innerHTML='秒間6,666,666(E)を消費して、その間、Cpsをさらに5倍にします。';
	},
	checkx6:function()
	{
        l('x6').innerHTML='秒間666,666,666(E)を消費して、その間、Cpsをさらに6倍にします。';
	},
	checkx7:function()
	{
        l('x7').innerHTML='秒間8,888,888,888(E)を消費して、その間、Cpsをさらに7倍にします。';
	},
	checkx8:function()
	{
        l('x8').innerHTML='秒間100,000,000,000(E)を消費して、その間、Cpsをさらに8倍にします。';
	},
	checkx9:function()
	{
        l('x9').innerHTML='秒間10,000,000,000,000(E)を消費して、その間、Cpsをさらに9倍にします。';
	},
	checkx10:function()
	{
        l('x10').innerHTML='秒間10,000,000,000,000,000(E)を消費して、その間、Cpsをさらに10倍にします';
	},
	conx2:function()
	{
        l('confx2').innerHTML='x2';
	},
	conx3:function()
	{
        l('confx3').innerHTML='x3';
	},
	conx4:function()
	{
        l('confx4').innerHTML='x4';
	},
	conx5:function()
	{
        l('confx5').innerHTML='x5';
	},
	conx6:function()
	{
        l('confx6').innerHTML='x6';
	},
	conx7:function()
	{
        l('confx7').innerHTML='x7';
	},
	conx8:function()
	{
        l('confx8').innerHTML='x8';
	},
	conx9:function()
	{
        l('confx9').innerHTML='x9';
	},
	conx10:function()
	{
        l('confx10').innerHTML='x10';
	},
	confirm:function()
	{
        l('rcon').innerHTML='このボタンを押すと、MODで追加された施設レベルやE,E/sを全て０にします。不具合が起きたときに使ってください。';
	},
	tinamo:function()
	{
        l('atin').innerHTML='錫：'+Beautify(this.tin)+'個';
	},
	cupperamo:function()
	{
        l('acupper').innerHTML='銅：'+Beautify(this.cupper)+'個';
	},
	ironamo:function()
	{
        l('airon').innerHTML='鉄：'+Beautify(this.iron)+'個';
	},
	silveramo:function()
	{
        l('asilver').innerHTML='銀：'+Beautify(this.silver)+'個';
	},
	goldamo:function()
	{
        l('agold').innerHTML='金：'+Beautify(this.gold)+'個';
	},
	diamondamo:function()
	{
        l('adiamond').innerHTML='ダイヤ：'+Beautify(this.diamond)+'個';
	},
	ohuton:function()
	{
		l('off').innerHTML='on/off';
	},
	contincable:function()
	{
		l('continca').innerHTML='錫の導線　　　　　　費用：錫50個　　　　効果：発電E2倍';
	},
	conadvancedtincable:function()
	{
		l('conadvtinca').innerHTML='改良型錫の導線　　　　　　　費用：錫500個、鉄30個　　　　　　　　　　　　効果：発電E2倍';
	},
	conhybridtincable:function()
	{
		l('conhybtinca').innerHTML='　発展型錫の導線　　　　費用：錫5,000個、銀100個、ダイヤ5個　　　　　　　効果：発電E3倍';
	},
	conultimatetincable:function()
	{
		l('conulttinca').innerHTML='　究極型錫の導線　　　　費用：錫5万個、銀1,000個、ダイヤ100個　　　　　　　　効果：発電E4倍';
	},
	concuppercable:function()
	{
		l('concupperca').innerHTML='銅の導線　　　　　　費用：銅50個　　　　効果：発電E2倍';
	},
	conadvancedcuppercable:function()
	{
		l('conadvcupperca').innerHTML='改良型銅の導線　　　　　　　費用：銅500個、鉄30個　　　　　　　　　　　　　効果：発電E2倍';
	},
	conhybridcuppercable:function()
	{
		l('conhybcupperca').innerHTML='発展型銅の導線　　　　費用：銅5,000個、金100個、ダイヤ5個　　効果：発電E3倍';
	},
	conultimatecuppercable:function()
	{
		l('conultcupperca').innerHTML='究極型銅の導線　　　　費用：銅5万個、金1,000個、ダイヤ100個　　　効果：発電E4倍';
	},
	congoldcable:function()
	{
		l('congoldca').innerHTML='金の導線　　　　　　　　　　　費用：金50個、銅100個　　　　　　　　　効果：発電E2倍';
	},
	conadvancedgoldcable:function()
	{
		l('conadvgoldca').innerHTML='改良型金の導線　　　　　　　　　　　　　　　費用：金250個、銅500個、鉄150個　　　　　効果：発電E2倍';
	},
	conhybridgoldcable:function()
	{
		l('conhybgoldca').innerHTML='発展型金の導線　　　　　　　　　　　　費用：金1,000個、銅5,000個、鉄1,500個　　　　　　　　　　　効果：発電E3倍';
	},
	conultimategoldcable:function()
	{
		l('conultgoldca').innerHTML='究極型金の導線　　　　費用：金5,000個、銅5万個、鉄1,5000個　　　効果：発電E4倍';
	},
	condiamondcable:function()
	{
		l('condiamondca').innerHTML='ダイヤの導線　　　　　　　　　費用：ダイヤ25個　　　　　　　効果：発電E2倍';
	},
	conadvanceddiamondcable:function()
	{
		l('conadvdiamondca').innerHTML='改良型ダイヤの導線　　　　　　　　　　　　費用：ダイヤ100個、銅1,000個、銀500個　　　効果：発電E2倍';
	},
	conhybriddiamondcable:function()
	{　
		l('conhybdiamondca').innerHTML='発展型ダイヤの導線　　　　　　　　　費用：ダイヤ500個、銅1万個、銀1,500個、　　　　効果：発電E3倍';
	},
	conultimatediamondcable:function()
	{
		l('conultdiamondca').innerHTML='究極型ダイヤの導線　　　　　　　　　　費用：ダイヤ1,000個、銅10万個、銀1.5万個　　　　　　　　　　　効果：発電E4倍';
	},
});
