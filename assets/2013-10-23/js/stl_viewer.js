$(document).ready(function() {
	var mycanvas = document.getElementById('upload_canvas');
	var canvas_drop = document.getElementById('canvas-drop')
	var dropzone = document.getElementById('dropzone')
	dropzone.addEventListener('dragover', handleDragOver, false);
	dropzone.addEventListener('drop', handleFileSelect, false);
	canvas_drop.addEventListener('dragover', handleDragOver, false);
	canvas_drop.addEventListener('drop', handleFileSelect, false);

////Drag and drop logic:
	function handleFileSelect(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();

	    var files = evt.dataTransfer.files; // FileList object.
	    console.log(evt)
	    console.log(files)
	    preview_stl(files[0])
	    // files is a FileList of File objects. List some properties.

	  }

	  function handleDragOver(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();
	    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
	  }

////jsc3d logic
	var viewer = new JSC3D.Viewer(mycanvas)
	var handle_file_select = function(e) {
		e.stopPropagation()
		e.preventDefault()
		var f = e.target.files[0]
		preview_stl(f)
	}

	function preview_stl(f) {
		var theScene
		var stl_loader
		var reader = new FileReader()
		var ext = f.name.split(".")[1]

		function setup_viewer() {
			viewer.setParameter('InitRotationX', 20);
			viewer.setParameter('InitRotationY', 20);
			viewer.setParameter('InitRotationZ', 0);
			viewer.setParameter('ModelColor', '#CAA618');
			viewer.setParameter('BackgroundColor1', '#FFFFFF');
			viewer.setParameter('BackgroundColor2', '#383840');
			viewer.setParameter('RenderMode', "flat");
		}
		setup_viewer()

		reader.onload = (function(file) {
			return function(e) {
				theScene = new JSC3D.Scene
		    	stl_loader = new JSC3D.StlLoader()
		    	stl_loader.parseStl(theScene, e.target.result)
		      	viewer.init()
		      	viewer.replaceScene(theScene)
		      	viewer.update()
			}
		})(f)

		if (ext.toLowerCase() != "stl") {
			alert("That doesn't appear to be an STL file.");
		} else {
			reader.readAsBinaryString(f)
		}
	}

/*
	if (window.File) {
		document.getElementById('file_select').addEventListener('change', handle_file_select, false)
	}
	*/
})
