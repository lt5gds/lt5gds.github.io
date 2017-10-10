
//tambahin nana file di dalem [] jangan lupa koma dan ''


<<<<<<< HEAD
var list=['index','highconcept','Rangkuman Dokumentasi Libgdx','test libgdx','OnePageDesignTemplate','StoryBibleTemplate','CTaylorDesign', 'sound'];
=======
var list=['index','highconcept','Rangkuman Dokumentasi Libgdx','test libgdx','TestSoundLibgdx','OnePageDesignTemplate','StoryBibleTemplate','CTaylorDesign'];
>>>>>>> eeed3ca64c218102f7f729f8e94d5f51f86d34bb



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
var h=height;
var ch=height-140;
$('footer').attr('style','top:'+h+'px');
// $('#content').attr('style','height:'+ch+'px');