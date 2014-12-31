/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var i = 1;
         
         var message;
         
                 $.ajax({
         
                         type: "GET",
         
                         url: "edit.xml",
         
                         dataType: "xml",
         	
                         success: function (xml) {
         
                             $(xml).find('edit').each(function () {
         
                                 var sTitle = $(this).find('Title').text();
         
         								message = sTitle ;
         
                                 console.log("Message: " + message);
         
                                 console.log("i :" + i);
         
                                 sym.$("text" + i).html(message);
         
                                 console.log("");
         
                                 i++;
         
                           });
         
                         },
         
                     });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-38524134");