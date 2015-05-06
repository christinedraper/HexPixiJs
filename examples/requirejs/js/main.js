require.config({
    paths: {
        'pixi': '../../shared/bower_components/pixi.js/bin/pixi',
        'hexPixi': '../../../lib/hexPixi',
        'simpleDemo': '../../shared/simpleDemo',
        'simpleDemo2': '../../shared/simpleDemo2'
    }
});

if (window.location.href.indexOf('simpleDemo2') > -1){
    require(['simpleDemo2']);
}
else{
    require(['simpleDemo']);
}