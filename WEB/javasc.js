/*Name this external file gallery.js*/

function upDate(previewPic){

  pic = document.getElementById('image');
  pic.style.backgroundImage = "url(" +previewPic.src +")";
  document.getElementById('image').innerHTML = previewPic.alt;

	}

	function unDo(){
    x = document.getElementById('image');
    x.style.backgroundImage="url(" +x.src+ ")";
    document.getElementById('image').innerHTML= "	Hover over an image below to display here.";

	}
