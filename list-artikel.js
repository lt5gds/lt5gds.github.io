
//tambahin nana file di dalem [] jangan lupa koma dan ''


var list=['highconcept','Rangkuman Dokumentasi Libgdx','test libgdx'];



function listArtikel(page){
	for (var i = 0; i < list.length; i++) {
		if(list[i]!=page){
		    var text=list[i].split('.');
		    var h=text[0];
		    if(h.length>20)
		    	h=text[0].substring(0,20)+'...';
		    var html='<li><a href="'+list[i]+'.html'+'"><h3>'+h+'</h3></a></li><hr>';
		    $('#list-artikel').append(html);
    	}
    }
}



var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var h=height-60;
var ch=height-140;
$('footer').attr('style','top:'+h+'px');
// $('#content').attr('style','height:'+ch+'px');