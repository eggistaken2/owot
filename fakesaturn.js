w.doAnnounce("welcome to saturn");
var a = new Modal();
a.createForm();
a.setFormTitle("wiper");
a.onSubmit(_=>{writeCharToXY(" ",0,Math.random()*16|0,Math.random()*16|0)});
menu.addOption("Wiper", _=>a.open());
menu.addOption("Image paster",_=>alert("No lol"));
menu.addOption("Static",_=>document.write((Math.random()*2**1023).toFixed(100)))
