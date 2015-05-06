require.config({
    paths: {
        'pixi': '../../shared/js/dep/pixi.min',
        'hexPixi': '../../../lib/hexPixi',
        'simpleDemo': '../../shared/js/simpleDemo',
        'simpleDemo2': '../../shared/js/simpleDemo2'
    }
});

if (window.location.href.indexOf('simpleDemo2') > -1){
    require(['simpleDemo2']);
}
else{
    require(['simpleDemo']);
}