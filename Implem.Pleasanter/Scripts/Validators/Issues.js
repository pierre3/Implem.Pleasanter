﻿$p.validateIssues = function () {
    $('#IssueForm').validate({
        ignore: '',
        rules: {
            Issues_CompletionTime: { required:true,date:true },
            Issues_NumA: { c_num:true },
            Issues_NumB: { c_num:true },
            Issues_NumC: { c_num:true },
            Issues_NumD: { c_num:true },
            Issues_NumE: { c_num:true },
            Issues_NumF: { c_num:true },
            Issues_NumG: { c_num:true },
            Issues_NumH: { c_num:true },
            Issues_NumI: { c_num:true },
            Issues_NumJ: { c_num:true },
            Issues_NumK: { c_num:true },
            Issues_NumL: { c_num:true },
            Issues_NumM: { c_num:true },
            Issues_NumN: { c_num:true },
            Issues_NumO: { c_num:true },
            Issues_NumP: { c_num:true },
            Issues_NumQ: { c_num:true },
            Issues_NumR: { c_num:true },
            Issues_NumS: { c_num:true },
            Issues_NumT: { c_num:true },
            Issues_NumU: { c_num:true },
            Issues_NumV: { c_num:true },
            Issues_NumW: { c_num:true },
            Issues_NumX: { c_num:true },
            Issues_NumY: { c_num:true },
            Issues_NumZ: { c_num:true },
            Issues_DateA: { date:true },
            Issues_DateB: { date:true },
            Issues_DateC: { date:true },
            Issues_DateD: { date:true },
            Issues_DateE: { date:true },
            Issues_DateF: { date:true },
            Issues_DateG: { date:true },
            Issues_DateH: { date:true },
            Issues_DateI: { date:true },
            Issues_DateJ: { date:true },
            Issues_DateK: { date:true },
            Issues_DateL: { date:true },
            Issues_DateM: { date:true },
            Issues_DateN: { date:true },
            Issues_DateO: { date:true },
            Issues_DateP: { date:true },
            Issues_DateQ: { date:true },
            Issues_DateR: { date:true },
            Issues_DateS: { date:true },
            Issues_DateT: { date:true },
            Issues_DateU: { date:true },
            Issues_DateV: { date:true },
            Issues_DateW: { date:true },
            Issues_DateX: { date:true },
            Issues_DateY: { date:true },
            Issues_DateZ: { date:true },
            Issues_Title: { required:true }
        },
        messages: {
            Issues_CompletionTime: { required: $('#Issues_CompletionTime').attr('data-validate-required'),date: $('#Issues_CompletionTime').attr('data-validate-date') },
            Issues_NumA: { c_num: $('#Issues_NumA').attr('data-validate-c_num') },
            Issues_NumB: { c_num: $('#Issues_NumB').attr('data-validate-c_num') },
            Issues_NumC: { c_num: $('#Issues_NumC').attr('data-validate-c_num') },
            Issues_NumD: { c_num: $('#Issues_NumD').attr('data-validate-c_num') },
            Issues_NumE: { c_num: $('#Issues_NumE').attr('data-validate-c_num') },
            Issues_NumF: { c_num: $('#Issues_NumF').attr('data-validate-c_num') },
            Issues_NumG: { c_num: $('#Issues_NumG').attr('data-validate-c_num') },
            Issues_NumH: { c_num: $('#Issues_NumH').attr('data-validate-c_num') },
            Issues_NumI: { c_num: $('#Issues_NumI').attr('data-validate-c_num') },
            Issues_NumJ: { c_num: $('#Issues_NumJ').attr('data-validate-c_num') },
            Issues_NumK: { c_num: $('#Issues_NumK').attr('data-validate-c_num') },
            Issues_NumL: { c_num: $('#Issues_NumL').attr('data-validate-c_num') },
            Issues_NumM: { c_num: $('#Issues_NumM').attr('data-validate-c_num') },
            Issues_NumN: { c_num: $('#Issues_NumN').attr('data-validate-c_num') },
            Issues_NumO: { c_num: $('#Issues_NumO').attr('data-validate-c_num') },
            Issues_NumP: { c_num: $('#Issues_NumP').attr('data-validate-c_num') },
            Issues_NumQ: { c_num: $('#Issues_NumQ').attr('data-validate-c_num') },
            Issues_NumR: { c_num: $('#Issues_NumR').attr('data-validate-c_num') },
            Issues_NumS: { c_num: $('#Issues_NumS').attr('data-validate-c_num') },
            Issues_NumT: { c_num: $('#Issues_NumT').attr('data-validate-c_num') },
            Issues_NumU: { c_num: $('#Issues_NumU').attr('data-validate-c_num') },
            Issues_NumV: { c_num: $('#Issues_NumV').attr('data-validate-c_num') },
            Issues_NumW: { c_num: $('#Issues_NumW').attr('data-validate-c_num') },
            Issues_NumX: { c_num: $('#Issues_NumX').attr('data-validate-c_num') },
            Issues_NumY: { c_num: $('#Issues_NumY').attr('data-validate-c_num') },
            Issues_NumZ: { c_num: $('#Issues_NumZ').attr('data-validate-c_num') },
            Issues_DateA: { date: $('#Issues_DateA').attr('data-validate-date') },
            Issues_DateB: { date: $('#Issues_DateB').attr('data-validate-date') },
            Issues_DateC: { date: $('#Issues_DateC').attr('data-validate-date') },
            Issues_DateD: { date: $('#Issues_DateD').attr('data-validate-date') },
            Issues_DateE: { date: $('#Issues_DateE').attr('data-validate-date') },
            Issues_DateF: { date: $('#Issues_DateF').attr('data-validate-date') },
            Issues_DateG: { date: $('#Issues_DateG').attr('data-validate-date') },
            Issues_DateH: { date: $('#Issues_DateH').attr('data-validate-date') },
            Issues_DateI: { date: $('#Issues_DateI').attr('data-validate-date') },
            Issues_DateJ: { date: $('#Issues_DateJ').attr('data-validate-date') },
            Issues_DateK: { date: $('#Issues_DateK').attr('data-validate-date') },
            Issues_DateL: { date: $('#Issues_DateL').attr('data-validate-date') },
            Issues_DateM: { date: $('#Issues_DateM').attr('data-validate-date') },
            Issues_DateN: { date: $('#Issues_DateN').attr('data-validate-date') },
            Issues_DateO: { date: $('#Issues_DateO').attr('data-validate-date') },
            Issues_DateP: { date: $('#Issues_DateP').attr('data-validate-date') },
            Issues_DateQ: { date: $('#Issues_DateQ').attr('data-validate-date') },
            Issues_DateR: { date: $('#Issues_DateR').attr('data-validate-date') },
            Issues_DateS: { date: $('#Issues_DateS').attr('data-validate-date') },
            Issues_DateT: { date: $('#Issues_DateT').attr('data-validate-date') },
            Issues_DateU: { date: $('#Issues_DateU').attr('data-validate-date') },
            Issues_DateV: { date: $('#Issues_DateV').attr('data-validate-date') },
            Issues_DateW: { date: $('#Issues_DateW').attr('data-validate-date') },
            Issues_DateX: { date: $('#Issues_DateX').attr('data-validate-date') },
            Issues_DateY: { date: $('#Issues_DateY').attr('data-validate-date') },
            Issues_DateZ: { date: $('#Issues_DateZ').attr('data-validate-date') },
            Issues_Title: { required: $('#Issues_Title').attr('data-validate-required') }
        }
    });
}
$p.validateIssues();
