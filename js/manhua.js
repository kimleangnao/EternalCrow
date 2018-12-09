

$(function(){
	/*Tag color change when clicked*/
	var prev = null;
	var thisone = null;
	var prevDisplay = null;
	$(".tag-all").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-all").addClass('clicked');
		thisone = "All";
		prev = ".tag-all";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".All").css("display","block");
		prevDisplay = ".All";
	});
	$(".tag-action").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-action").addClass('clicked');
		thisone = "Action";
		prev=".tag-action";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Action").css("display","block");
		prevDisplay = ".Action";
	});
	$(".tag-adventure").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-adventure").addClass('clicked');
		thisone = "Adventure";
		prev=".tag-adventure";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Adventure").css("display","block");
		prevDisplay = ".Adventure";
	});
	$(".tag-comedy").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-comedy").addClass('clicked');
		thisone = "Comedy";
		prev=".tag-comedy";
		$(".Comedy").css("display","block");
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Comedy").css("display","block");
		prevDisplay = ".Comedy";
	});
	$(".tag-drama").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-drama").addClass('clicked');
		thisone = "Drama";
		prev=".tag-drama";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Drama").css("display","block");
		prevDisplay = ".Drama";
	});
	$(".tag-fantasy").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-fantasy").addClass('clicked');
		thisone = "Fantasy";
		prev=".tag-fantasy";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Fantasy").css("display","block");
		prevDisplay = ".Fantasy";
	});
	$(".tag-martial-arts").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-martial-arts").addClass('clicked');
		thisone = "Martial-Arts";
		prev=".tag-martial-arts";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Martial-Arts").css("display","block");
		prevDisplay = ".Martial-Arts";
	});
	$(".tag-shounen").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-shounen").addClass('clicked');
		thisone = "Shounen";
		prev=".tag-shounen";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Shounen").css("display","block");
		prevDisplay = ".Shounen";
	});
	$(".tag-horror").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-horror").addClass('clicked');
		thisone = "Horror";
		prev=".tag-horror";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Horror").css("display","block");
		prevDisplay = ".Horror";
	});
	$(".tag-supernatural").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-supernatural").addClass('clicked');
		thisone = "Supernatural";
		prev=".tag-supernatural";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Supernatural").css("display","block");
		prevDisplay = ".Supernatural";
	});
	$(".tag-harem").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-harem").addClass('clicked');
		thisone = "Harem";
		prev=".tag-harem";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Harem").css("display","block");
		prevDisplay = ".Harem";
	});
	$(".tag-psychological").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-psychological").addClass('clicked');
		thisone = "Psychological";
		prev=".tag-psychological";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Psychological").css("display","block");
		prevDisplay = ".Psychological";
	});
	$(".tag-romance").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-romance").addClass('clicked');
		thisone = "Romance";
		prev=".tag-romance";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Romance").css("display","block");
		prevDisplay = ".Romance";
	});
	$(".tag-school").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-school").addClass('clicked');
		thisone = "School";
		prev=".tag-school";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".School").css("display","block");
		prevDisplay = ".School";
	});
	$(".tag-shoujo").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-shoujo").addClass('clicked');
		thisone = "Shoujo";
		prev=".tag-shoujo";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Shoujo").css("display","block");
		prevDisplay = ".Shoujo";
	});
	$(".tag-mystery").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-mystery").addClass('clicked');
		thisone = "Mystery";
		prev=".tag-mystery";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Mystery").css("display","block");
		prevDisplay = ".Mystery";
	});
	$(".tag-scifi").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-scifi").addClass('clicked');
		thisone = "Sci-Fi";
		prev=".tag-scifi";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Sci-Fi").css("display","block");
		prevDisplay = ".Sci-Fi";
	});
	$(".tag-seinen").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-seinen").addClass('clicked');
		thisone = "Seinen";
		prev=".tag-seinen";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Seinen").css("display","block");
		prevDisplay = ".Seinen";
	});
	$(".tag-tragedy").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-tragedy").addClass('clicked');
		thisone = "Tragedy";
		prev=".tag-tragedy";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Tragedy").css("display","block");
		prevDisplay = ".Tragedy";
	});
	$(".tag-echhi").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-echhi").addClass('clicked');
		thisone = "Ecchi";
		prev=".tag-echhi";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Ecchi").css("display","block");
		prevDisplay = ".Ecchi";
	});
	$(".tag-sports").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-sports").addClass('clicked');
		thisone = "Sports";
		prev=".tag-sports";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Sports").css("display","block");
		prevDisplay = ".Sports";
	});
	$(".tag-sliceoflife").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-sliceoflife").addClass('clicked');
		thisone = "Slice-Of-Life";
		prev=".tag-sliceoflife";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Slice-Of-Life").css("display","block");
		prevDisplay = ".Slice-Of-Life";
	});
	$(".tag-mature").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-mature").addClass('clicked');
		thisone = "Mature";
		prev=".tag-mature";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Mature").css("display","block");
		prevDisplay = ".Mature";
	});
	$(".tag-shoujoai").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-shoujoai").addClass('clicked');
		thisone = "Shoujo-Ai";
		prev=".tag-shoujoai";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Shoujo-Ai").css("display","block");
		prevDisplay = ".Shoujo-Ai";
	});
	$(".tag-webtoons").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-webtoons").addClass('clicked');
		thisone = "Webtoons";
		prev=".tag-webtoons";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Webtoons").css("display","block");
		prevDisplay = ".Webtoons";
	});
	$(".tag-doujinshi").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-doujinshi").addClass('clicked');
		thisone = "Doujinshi";
		prev=".tag-doujinshi";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Doujinshi").css("display","block");
		prevDisplay = ".Doujinshi";
	});
	$(".tag-oneshot").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-oneshot").addClass('clicked');
		thisone = "One-Shot";
		prev=".tag-oneshot";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".One-Shot").css("display","block");
		prevDisplay = ".One-Shot";
	});
	$(".tag-smut").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-smut").addClass('clicked');
		thisone = "Smut";
		prev=".tag-smut";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Smut").css("display","block");
		prevDisplay = ".Smut";
	});
	$(".tag-yaoi").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-yaoi").addClass('clicked');
		thisone = "Yaoi";
		prev=".tag-yaoi";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Yaoi").css("display","block");
		prevDisplay = ".Yaoi";
	});
	$(".tag-josei").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-josei").addClass('clicked');
		thisone = "Josei";
		prev=".tag-josei";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Josei").css("display","block");
		prevDisplay = ".Josei";
	});
	$(".tag-historical").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-historical").addClass('clicked');
		thisone = "Historical";
		prev=".tag-historical";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Historical").css("display","block");
		prevDisplay = ".Historical";
	});
	$(".tag-shounenai").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-shounenai").addClass('clicked');
		thisone = "Shounen-Ai";
		prev=".tag-shounenai";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Shounen-Ai").css("display","block");
		prevDisplay = ".Shounen-Ai";
	});
	$(".tag-genderbender").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-genderbender").addClass('clicked');
		thisone = "Gender-Bender"
		prev=".tag-genderbender";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Gender-Bender").css("display","block");
		prevDisplay = ".Gender-Bender";
	});
	$(".tag-yuri").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-yuri").addClass('clicked');
		thisone = "Yuri";
		prev=".tag-yuri";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Yuri").css("display","block");
		prevDisplay = ".Yuri";
	});
	$(".tag-mecha").on('click', function(){
		$(prev).removeClass('clicked');
		$(".tag-mecha").addClass('clicked');
		thisone = "Mecha";
		prev=".tag-mecha";
		/*display: none to prev, and display:block the one being click*/
		$(prevDisplay).css("display","none");
		$(".Mecha").css("display","block");
		prevDisplay = ".Mecha";
	});

	/*Sort color change when clicked*/
	var sort = null;

	$(".popularity").on('click', function(){
		$(sort).removeClass('clicked');
		$(".popularity").addClass('clicked');
		sort=".popularity";
	});
	$(".alphabetical").on('click', function(){
		$(sort).removeClass('clicked');
		$(".alphabetical").addClass('clicked');
		sort=".alphabetical";
	});
	$(".new").on('click', function(){
		$(sort).removeClass('clicked');
		$(".new").addClass('clicked');
		sort=".new";
	});

});



//load all thing
var xhrall = new XMLHttpRequest();

xhrall.onload = function() {
	//if(xhrall.status === 200){
		responseAll = JSON.parse(xhrall.responseText);

		var content = '';
		for (var i=0; i < responseAll.alltype.length; i++){
				content += '<div class="picture '+ responseAll.alltype[i].tags + '">';
				content += '<img src="' + responseAll.alltype[i].image + '"';
				content += 'class="img" />';
				content += '<p class="image-name">' + responseAll.alltype[i].name + '</p>';
				content += '<p class="image-chapter">' + responseAll.alltype[i].lastestChapter + '</p>';
				content += '</div>';
		}
		document.getElementById('pic').innerHTML = content;
	//}
};
xhrall.open('GET', 'data/AllManhua.json', true);
xhrall.send(null);