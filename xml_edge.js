/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['chelsea-market, sans-serif']='<script src=\"http://use.edgefonts.net/chelsea-market:n4:all.js\"></script>';
    fonts['carter-one, sans-serif']='<script src=\"http://use.edgefonts.net/carter-one:n4:all.js\"></script>';
    fonts['bebas-neue, sans-serif']='<script src=\"http://use.edgefonts.net/bebas-neue:n4:all.js\"></script>';
    fonts['chewy, sans-serif']='<script src=\"http://use.edgefonts.net/chewy:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'text1',
                type: 'text',
                rect: ['0px', '10px','1054px','auto','auto', 'auto'],
                title: 'demmahom',
                text: "Dummy Text",
                align: "right",
                font: ['chelsea-market, sans-serif', 76, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'text2',
                type: 'text',
                rect: ['0px', '110px','1054px','auto','auto', 'auto'],
                title: 'demmahom.info',
                text: "Dummy Text",
                align: "right",
                font: ['carter-one, sans-serif', 76, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'text3',
                type: 'text',
                rect: ['0px', '210px','1054px','auto','auto', 'auto'],
                title: 'mohd salman',
                text: "Dummy Text",
                align: "right",
                font: ['bebas-neue, sans-serif', 76, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'text4',
                type: 'text',
                rect: ['0px', '303px','1054px','auto','auto', 'auto'],
                title: 'mohdsalman86',
                text: "بالعربي احلى",
                align: "right",
                font: ['chelsea-market, sans-serif', 76, "rgba(0,0,0,1)", "700", "none", "italic"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_text1}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "font-size", '76px'],
                ["style", "top", '177px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'right'],
                ["transform", "skewY", '0deg'],
                ["style", "font-family", 'chelsea-market, sans-serif'],
                ["style", "clip", [0,1054,107,1057.72265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1054px']
            ],
            "${_text3}": [
                ["style", "top", '377px'],
                ["style", "left", '0px'],
                ["style", "font-family", 'bebas-neue, sans-serif'],
                ["style", "clip", [0,1054,107,1057.72265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1054px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1054px'],
                ["style", "height", '410px'],
                ["style", "overflow", 'hidden']
            ],
            "${_text2}": [
                ["style", "top", '277px'],
                ["style", "clip", [0,1054,107,1057.72265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-family", 'carter-one, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '1054px']
            ],
            "${_text4}": [
                ["style", "top", '470px'],
                ["style", "font-family", 'chelsea-market, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-style", 'italic'],
                ["style", "font-weight", '700'],
                ["style", "clip", [0,1054,107,1057.72265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1054px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2320,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_text2}", "top", '110px', { fromValue: '277px'}], position: 455, duration: 662 },
                { id: "eid5", tween: [ "style", "${_text4}", "clip", [0,1054,107,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1054,107,1057.72265625]}], position: 1658, duration: 662 },
                { id: "eid3", tween: [ "style", "${_text2}", "clip", [0,1054,107,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1054,107,1057.72265625]}], position: 455, duration: 662 },
                { id: "eid17", tween: [ "style", "${_text3}", "top", '210px', { fromValue: '377px'}], position: 1117, duration: 662 },
                { id: "eid9", tween: [ "transform", "${_text1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "transform", "${_text1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 455, duration: 0 },
                { id: "eid18", tween: [ "style", "${_text4}", "top", '303px', { fromValue: '470px'}], position: 1658, duration: 662 },
                { id: "eid2", tween: [ "style", "${_text1}", "clip", [0,1054,107,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1054,107,1057.72265625]}], position: 0, duration: 455 },
                { id: "eid4", tween: [ "style", "${_text3}", "clip", [0,1054,107,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1054,107,1057.72265625]}], position: 1117, duration: 662 },
                { id: "eid15", tween: [ "style", "${_text1}", "top", '10px', { fromValue: '177px'}], position: 0, duration: 455 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
/** Exampel by Demmahom.info / https://github.com/mohdsalman86 /  */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-38524134");
