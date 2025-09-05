$(function(){
	$('.artBtn a').click(function(){
		var sectorData = $(this).closest('article').attr('id');
		var ths = $(this).data('target');
		popupCode(sectorData,ths);
		console.log('aaa');
		//alert(sectorData);
	});
})

function popupCode(str,ths){
	var $dataID = $('#'+str);
	console.log($dataID);

	if(str == 'basic'){
		common.calendar({
			submit:'clickAlertFn',
		});


	}
};
function clickAlertFn(e){
	alert(e);
};