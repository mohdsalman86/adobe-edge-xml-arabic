## Example / Load and display XML content in Adobe Edge + Arabic Text as well / MS/ Demmahom.info 

This contains a Example for basic symbols interactivity to show you how to load and display XML content in Adobe Edge.


## Code Example / Event > creationComplete 

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

##

## License 
The main File structure of an Animate Copyright under (c) 2011-2014. Adobe Systems Incorporated All rights reserved.
   
## Event code and symbols in action - License 
Event code and symbols in action license below 

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Load and display XML content in Adobe Edge + Arabic Text as well</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.demmahom.info" property="cc:attributionName" rel="cc:attributionURL">http://www.demmahom.info</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="github.com/mohdsalman86" rel="dct:source">github.com/mohdsalman86</a>.



