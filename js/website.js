//load content for latest Update- All
var xhr = new XMLHttpRequest();

xhr.onload = function() {
	//if(xhr.status === 200) { // locally, don't need this
		responseObject  = JSON.parse(xhr.responseText);
		var content = '';
		for (var i = 0; i < responseObject.update.length; i++) {
			if (responseObject.update[i].group == 1){
				content += '<div class="group'+ responseObject.update[i].group +' frame-picture">';
				content += '<img src="'+ responseObject.update[i].image +'" ';
				content += 'class="image" id="update-image" />';
				content += '<p class="image-title" id="update-title">' + responseObject.update[i].title+'</p>';
				content += '<p class="image-tag" id="update-tag">' + responseObject.update[i].chapter + '</p>';
				content += '</div>';
			}else {
				content += '<div class="group'+ responseObject.update[i].group +' deactive-1 frame-picture">';
				content += '<img src="'+ responseObject.update[i].image +'" ';
				content += 'class="image" id="update-image" />';
				content += '<p class="image-title" id="update-title">' + responseObject.update[i].title+'</p>';
				content += '<p class="image-tag" id="update-tag">' + responseObject.update[i].chapter + '</p>';
				content += '</div>';
			}
		}
		document.getElementById('l-p').innerHTML = content;

	//}
};

xhr.open('GET', 'data/data.json', true);
xhr.send();


//hot manga load
var xhrmanga = new XMLHttpRequest();

xhrmanga.onload = function() {
	//if(xhrmanga.status === 200){
		responseManga = JSON.parse(xhrmanga.responseText);

		var content1 = '';
		for (var i=0; i < responseManga.hotmanga.length; i++){
			if(responseManga.hotmanga[i].group == 1){
				content1 += '<div class="manga'+responseManga.hotmanga[i].group +' frame-picture">';
				content1 += '<img src="' + responseManga.hotmanga[i].image + '"';
				content1 += 'class="image" />';
				content1 += '<p class="image-title">' + responseManga.hotmanga[i].name + '</p>';
				content1 += '<p class="image-tag">' + responseManga.hotmanga[i].chapter + '</p>';
				content1 += '</div>';
			}else {
				content1 += '<div class="manga'+responseManga.hotmanga[i].group +' deactive-1 frame-picture">';
				content1 += '<img src="' + responseManga.hotmanga[i].image + '"';
				content1 += 'class="image" />';
				content1 += '<p class="image-title">' + responseManga.hotmanga[i].name + '</p>';
				content1 += '<p class="image-tag">' + responseManga.hotmanga[i].chapter + '</p>';
				content1 += '</div>';
			}
		}
		document.getElementById('HM').innerHTML = content1;
	//}
};


xhrmanga.open('GET', 'data/hot-manga.json', true);
xhrmanga.send();



//load manhwa
var xhrmanhwa = new XMLHttpRequest();

xhrmanhwa.onload = function(){
	//if (xhrmanhwa.status === 200){

		responseManhwa = JSON.parse(xhrmanhwa.responseText);

		var content2 = '';
		for (var i=0; i < responseManhwa.hotmanhwa.length; i++){
			if (responseManhwa.hotmanhwa[i].group == 1){
				content2 += '<div class="manhwa'+responseManhwa.hotmanhwa[i].group +' frame-picture">';
				content2 += '<img src="'+responseManhwa.hotmanhwa[i].image + '"';
				content2 += 'class="image" />';
				content2 += '<p class="image-title">' + responseManhwa.hotmanhwa[i].name +'</p>';
				content2 += '<p class="image-tag">'+responseManhwa.hotmanhwa[i].chapter +'</p>';
				content2 += '</div>';
			}else {
				content2 += '<div class="manhwa'+responseManhwa.hotmanhwa[i].group +' deactive-1 frame-picture">';
				content2 += '<img src="'+responseManhwa.hotmanhwa[i].image + '"';
				content2 += 'class="image" />';
				content2 += '<p class="image-title">' + responseManhwa.hotmanhwa[i].name +'</p>';
				content2 += '<p class="image-tag">'+responseManhwa.hotmanhwa[i].chapter +'</p>';
				content2 += '</div>';
			}
		}
		document.getElementById('HH').innerHTML = content2;
	//}
};

xhrmanhwa.open('GET', 'data/hot-manhwa.json', true);
xhrmanhwa.send();


//load manhua
var xhrmanhua = new XMLHttpRequest();

xhrmanhua.onload = function(){
	//if (xhrmanhua.status === 200){

		responseManhua = JSON.parse(xhrmanhua.responseText);

		var content2 = '';
		for (var i=0; i < responseManhua.hotmanhua.length; i++){
			if (responseManhwa.hotmanhwa[i].group == 1){
				content2 += '<div class="manhua'+responseManhua.hotmanhua[i].group +' frame-picture">';
				content2 += '<img src="'+responseManhua.hotmanhua[i].image + '"';
				content2 += 'class="image" />';
				content2 += '<p class="image-title">' + responseManhua.hotmanhua[i].name +'</p>';
				content2 += '<p class="image-tag">'+responseManhua.hotmanhua[i].chapter +'</p>';
				content2 += '</div>';
			}else {
				content2 += '<div class="manhua'+responseManhua.hotmanhua[i].group +' deactive-1 frame-picture">';
				content2 += '<img src="'+responseManhua.hotmanhua[i].image + '"';
				content2 += 'class="image" />';
				content2 += '<p class="image-title">' +responseManhua.hotmanhua[i].name +'</p>';
				content2 += '<p class="image-tag">'+responseManhua.hotmanhua[i].chapter +'</p>';
				content2 += '</div>';
			}
		}
		document.getElementById('HA').innerHTML = content2;
	//}
};

xhrmanhua.open('GET', 'data/hot-manhua.json', true);
xhrmanhua.send();

//Backward and forward button for latest Update-All
$(function(){
	var holdNum = 1;
	var hotmanga = 1;
	var hotmanhwa = 1;
	var hotmanhua = 1;
	$("#button-forward").on('click', function(){
		if (holdNum < 3){
			$("div.group"+holdNum).addClass("deactive-1");
			holdNum++;
			$("div.group"+holdNum).removeClass("deactive-1");
		}
	});
	$("#button-backward").on('click', function(){
		if (holdNum > 1){
			$("div.group"+holdNum).addClass("deactive-1");
			holdNum--;
			$("div.group"+holdNum).removeClass("deactive-1");
		}
	});

	$("#manga-forward").on('click', function(){
		if (hotmanga < 3){
			$("div.manga"+hotmanga).addClass("deactive-1");
			hotmanga++;
			$("div.manga"+hotmanga).removeClass("deactive-1");
		}
	});
	$("#manga-backward").on('click', function(){
		if (hotmanga > 1){
			$("div.manga"+hotmanga).addClass("deactive-1");
			hotmanga--;
			$("div.manga"+hotmanga).removeClass("deactive-1");
		}
	});

	$("#manhwa-forward").on('click', function(){
		if (hotmanhwa < 3){
			$("div.manhwa"+hotmanhwa).addClass("deactive-1");
			hotmanhwa++;
			$("div.manhwa"+hotmanhwa).removeClass("deactive-1");
		}
	});
	$("#manhwa-backward").on('click', function(){
		if (hotmanhwa > 1){
			$("div.manhwa"+hotmanhwa).addClass("deactive-1");
			hotmanhwa--;
			$("div.manhwa"+hotmanhwa).removeClass("deactive-1");
		}
	});

	$("#manhua-forward").on('click', function(){
		if(hotmanhua < 3){
			$("div.manhua"+hotmanhua).addClass("deactive-1");
			hotmanhua++;
			$("div.manhua"+hotmanhua).removeClass("deactive-1");
		}
	});
	$("#manhua-backward").on('click', function(){
		if(hotmanhua > 1){
			$("div.manhua"+hotmanhua).addClass("deactive-1");
			hotmanhua--;
			$("div.manhua"+hotmanhua).removeClass("deactive-1");
		}


	});


});


