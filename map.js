require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) {
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

    view.ui.add("basemap-btn", "top-right");
    view.ui.add("layerList-btn", "top-right");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view:view,
        source: {
            query: {

            }
        }
    })

    view.ui.add(basemapGallery, "top-right")

    view.ui.add(basemapToggle, "bottom-right");
 
    
    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
    .getElementById("layerList-btn")
    .addEventListener("click", function() {
        toggleButton("layerList")
    })

    document
    .getElementById("basemap-btn")
    .addEventListener("click", function () {
        toggleButton("gallery");
    })

    const serchWidget = new Search ({
        view: view
    })

    view.ui.add(serchWidget, "top-left");

    function toggleButton (item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
         let currentProp = layerListEl.style.getPropertyValue("display");

        
         if(item == "layerList") {
            currentProp=layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp=="block" ? "none" : "block");
            galleryEl.style.setProperty("display", "none")
         } else if(item == "gallery") {
            currentProp= galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentProp=="block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none")

         }
    }
})