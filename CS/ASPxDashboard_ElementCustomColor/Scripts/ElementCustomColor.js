var argumentAxis = DashboardDataAxisNames.ChartArgumentAxis,
    seriesAxis = DashboardDataAxisNames.ChartSeriesAxis;

function setColors(args) {
    var chartClientData = webViewer.GetItemData("chartDashboardItem1"),
        pieClientData = webViewer.GetItemData("pieDashboardItem1");
    var currentElement = args.GetTargetElement();

    if (args.ItemName == "chartDashboardItem1") {
        var country = currentElement.GetAxisPoint(DashboardDataAxisNames.ChartSeriesAxis).GetValue();
        var value = chartClientData.GetSlice(currentElement.GetAxisPoint(argumentAxis)).
                                    GetSlice(currentElement.GetAxisPoint(seriesAxis)).
                                    GetMeasureValue(chartClientData.GetMeasures()[0].Id).GetValue();
        if (country == "UK" && value > 50000 || country == "USA" && value > 100000)
            args.SetColor("#33CC66");
        else
            args.SetColor("#CC6633");
    }

    if (args.ItemName == "pieDashboardItem1") {
        var value = pieClientData.GetSlice(currentElement.GetAxisPoint(argumentAxis)).
                                  GetMeasureValue(pieClientData.GetMeasures()[0].Id).GetValue();
        if (value < 100000)
            args.SetColor("#FFCC66");
    }   
};