﻿using Implem.Libraries.Utilities;
using Implem.Pleasanter.Libraries.Html;
using Implem.Pleasanter.Libraries.Requests;
using Implem.Pleasanter.Libraries.Responses;
using Implem.Pleasanter.Libraries.Settings;
using System.Linq;
using System;
using Implem.Pleasanter.Models;
using Implem.Pleasanter.Libraries.Security;
namespace Implem.Pleasanter.Libraries.HtmlParts
{
    public static class HtmlExport
    {
        public static HtmlBuilder ExportSelectorDialog(
            this HtmlBuilder hb, Context context, SiteSettings ss)
        {
            var optionCollection = ss.Exports
                .ToDictionary(o => new
                {
                    id = o.Id,
                    mailNotify = o.ExecutionType == Export.ExecutionTypes.MailNotify
                }.ToJson(), 
                o => o.Name);
            optionCollection.Add("{\"id\":0, \"mailNotify\":false}", Displays.Standard(context: context));
            return hb
                .FieldDropDown(
                    context: context,
                    controlId: "ExportId",
                    controlCss: " always-send",
                    labelText: Displays.Format(context: context),
                    optionCollection: optionCollection)
                .P(css: "message-dialog")
                .Div(css: "command-center", action: () => hb
                    .Button(
                        text: Displays.Export(context: context),
                        controlId: "DoExport",
                        controlCss: "button-icon",
                        action: "ExportAsync",
                        method: "Post",
                        onClick: "$p.export();",
                        icon: "ui-icon-arrowreturnthick-1-w")
                    .Button(
                        text: Displays.Cancel(context: context),
                        controlCss: "button-icon",
                        onClick: "$p.closeDialog($(this));",
                        icon: "ui-icon-cancel"));
        }
    }
}