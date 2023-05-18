require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widjets/LayerList"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList) {
    esriConfig.apiKey = "AAPK46015e5fe77240af90fba51711bd42bayB9qSDOvnDltAtyyj_zIZdLn6JuDrY7It6ZJnyWx2n8_8COtaFanTJU1FHrvQ-oT";
    
    const webMap = new WebMap ({ 
        portalItem: {
        id: "3ee5ad88b2624b218a71e8f39dd77f92"
        }
    })

    const view = new MapView ({
        container: "viewDiv",
        map: webMap 
    });

    const homeBtn = new Home({
        view: view
    })

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric", 
        style: "ruler"
    })

    view.ui.add(scaleBar, "bottom-right");

    view.ui.add("layerList-btn", "top-right");

    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
    .getElementById("layerList")
    .addEventListener("click", function() {
        toggleButton()
    })

    function toggleButton () {
        const layerListEl = document.getElementsByClassName("");

    }


})