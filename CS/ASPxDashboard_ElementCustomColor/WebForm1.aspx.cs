using System;

namespace ASPxDashboard_ElementCustomColor
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxDashboard1.DashboardXmlPath= Server.MapPath("App_Data/dashboard1.xml");
        }
    }
}