Imports System

Namespace ASPxDashboard_ElementCustomColor
    Partial Public Class WebForm1
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ASPxDashboard1.DashboardXmlPath= Server.MapPath("App_Data/dashboard1.xml")
        End Sub
    End Class
End Namespace