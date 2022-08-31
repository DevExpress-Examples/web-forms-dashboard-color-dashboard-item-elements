Imports System

Namespace ASPxDashboard_ElementCustomColor

    Public Partial Class WebForm1
        Inherits Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/dashboard1.xml")
        End Sub
    End Class
End Namespace
