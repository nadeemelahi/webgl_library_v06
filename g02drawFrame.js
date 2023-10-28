// author: Ned - Nadeem Elahi nadeem@webscripts.biz

ngl.setBackgroundNviewport( background , viewport ); 
load.vertsNcolours(verts, colours);

drawFrame();

function drawFrame(){

	load.tsrp();

	ngl.clear();
	ngl.drawTriangles(vertsCnt);
	
	setTimeout(drawFrame, 100);
}
