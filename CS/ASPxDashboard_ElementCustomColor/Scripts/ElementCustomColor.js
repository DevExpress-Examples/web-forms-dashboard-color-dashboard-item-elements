function onBeforeRender(sender) {
    window['control'] = sender.GetDashboardControl();
    var viewerApiExtension = control.findExtension('viewerApi');

    if (viewerApiExtension)
        viewerApiExtension.on('itemElementCustomColor', setColors);
}

function setColors(args) {

    var argumentAxis = 'Argument',
        seriesAxis = 'Series';

    var viewerApiExtension = control.findExtension('viewerApi');

    var chartClientData = viewerApiExtension.getItemData("chartDashboardItem1"),
        pieClientData = viewerApiExtension.getItemData("pieDashboardItem1");
    var currentElement = args.getTargetElement();

    if (args.itemName === "chartDashboardItem1") {
        var year = currentElement.getAxisPoint(seriesAxis).getValue();
        var value = chartClientData.getSlice(currentElement.getAxisPoint(argumentAxis)).
            getSlice(currentElement.getAxisPoint(seriesAxis)).
            getMeasureValue(chartClientData.getMeasures()[0].id).getValue();
        // For 2015, values that exceed 80k are colored in green, values below 40k are colored in red, 
        // and values that fall into the range between 40k and 80k are colored in gray.
        if (year == 2014) {
            if (value > 30000) {
                args.setColor("#336633");
            }
            else if (value < 17000) {
                args.setColor("#993300");
            }
            else if (value >= 17000 && value <= 30000) {
                args.setColor("#999999");
            }
        }
    }

    if (args.itemName === "pieDashboardItem1") {
        var value = pieClientData.getSlice(currentElement.getAxisPoint(argumentAxis)).
            getMeasureValue(pieClientData.getMeasures()[0].id).getValue();
        if (value < 80000)
            args.setColor("#fdb400");
    }
};