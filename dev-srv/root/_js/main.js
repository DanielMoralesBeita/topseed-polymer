'use strict'
loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){

		libsLoaded()

	}//suc
})//load

function libsLoaded(){
	console.log('Loaded libs')
	
	TS.signalAppReady()

	TT.ScontentID ='#content-wrapper'
	TT.handle(function(evt) {
		console.log(':')
		if(TT.PRE==evt.typ)  {//start
			console.log(evt.$new)
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if(TT.PAGE==evt.typ)  {//new pg loaded
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)

		}
	})
}