﻿﻿/// <reference path="dep/pixi.dev.js" />
/// <reference path="../../../lib/hexPixi.js" />

(function(root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['pixi', 'hexPixi'], function (pixi, hexPixi) {
            factory(root, pixi, hexPixi);
        });
    } else if (typeof exports == 'object') {
        factory(root, require('pixi'), require('hexPixi'));
    } else {
        factory(root, root.PIXI, root.hexPixi)
    }
}(this, function(root, pixi, hexPixi) {
    'use strict';

    var map = null,
        stage = new pixi.Container(),
        renderer = new pixi.autoDetectRenderer(800, 600, {
            antialiasing: false,
            transparent: false,
            resolution: 1
        });

    renderer.backgroundColor = 0xFFFFFF;

    function animate() {
        window.requestAnimationFrame(animate);
        // render the stage
        renderer.render(stage);
    }

    function getOptions() {
        return {
            mapWidth: 10,
            mapHeight: 8,
            coordinateSystem: 2,
            hexLineWidth: 2,
            hexSize: 40,
            showCoordinates: true,
            textures: ["images/texture/grassTexture.jpg", "images/texture/waterTexture.jpg"],
            terrainTypes: [
                { name: "dirt", color: 0x9B5523 },
                { name: "sand", color: 0xdBd588 },
                { name: "snow", color: 0xebebfa },
                { name: "water", textureIndex: 1, color: 0x4060fa },
                { name: "grass", textureIndex: 0, color: 0x10fa10 }
            ],
            onAssetsLoaded: function () {
                try{
                    renderer.render(stage);
                    animate();
                }
                catch (e){
                    console.error(e);
                }
            }
        }
    }

    function setupPixiJs() {
        // add the renderer view element to the DOM
        var div = document.getElementById('stage');
        div.appendChild(renderer.view);

        //root.requestAnimFrame(animate);
        map = new hexPixi.Map(stage, getOptions());
    }

    function initPage() {
        setupPixiJs();

        map.generateRandomMap();
    }

    initPage();
}));
