// author: Ned - Nadeem Elahi nadeem@webscripts.biz

// origin bottom left 0,0 , width, height
//var viewport = [ 0.0 , 0.0 , 0.5 , 0.5  ]; // bottom left quadrant
var viewport = [ 0 , 0 , 1.0 , 1.0  ];

// rgba
var background= [ .01 , .01 , .01 , 1 ];

// verts
var vertsCnt = 4;

var verts = [
	 0, 0, 0  ,  // 0 - center
	-1, 1, 0  ,  // 1 - left top 
	 0, 1, 0  ,  // 2 - center top
	 1, 1, 0  ,  // 3 - right top
];

// colours
var colours = [
	.9 , .0 , .0  ,  // 0 - red
	.0 , .9 , .0  ,  // 1 - green
	.0 , .0 , .9  ,  // 2 - blue
	.9 , .0 , .9  ,  // 3 - magenta 
];

//------------------------------------------
//
//  FAN - center aligned triangles
//      - mesh with center vert
//      - perfect for drawing a circle
//
//  - will draw 0,1,2 ,
//              0,2,3 
//
//   (1)   (2)  (3)
//     +----+----+ 
//      \   |   /
//       \  |  /
//        \ | /
//         \|/
//          +
//         (0)
//
//------------------------------------------
//
//  STRIP - edge aligned triangles
//  -will draw : 0,1,2 , 
//               1,2,3
//
//     (0)  (2)
//      +----+
//      |   /|
//      |  / |
//      | /  |
//      |/   |
//      +----+
//     (1)  (3)
//
//------------------------------------------




