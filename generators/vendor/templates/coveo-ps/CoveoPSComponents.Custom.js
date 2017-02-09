!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CoveoPS=t():e.CoveoPS=t()}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var s=i[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="/js/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function r(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}var s=this;r(i(2));var n=i(6);t.BoxEmailAsLink=n.BoxEmailAsLink;var a=function(){void 0==window.Coveo?window.Coveo=s:_.each(_.keys(s),function(e){window.Coveo[e]=s[e]})};a()},function(e,t,i){"use strict";var r=i(3);r.defaultLanguage();var s=i(3);t.setLanguageAfterPageLoaded=s.setLanguageAfterPageLoaded;var n=i(5);t.l=n.l},function(e,t,i){"use strict";function r(){void 0!=window.$&&void 0!=window.$.fn&&void 0!=window.$.fn.jquery?$(function(){var e=String.locales||(String.locales={});e.en=a(e.en,o),String.toLocaleString.call(this,{en:o}),String.locale="en",String.defaultLocale="en",n.culture("en")}):document.addEventListener("DOMContentLoaded",function(e){var t=String.locales||(String.locales={});t.en=a(t.en,o),String.toLocaleString.call(this,{en:o}),String.locale="en",String.defaultLocale="en",n.culture("en")})}function s(){var e=String.locales||(String.locales={});e.en=a(e.en,o),String.toLocaleString.call(this,{en:o}),String.locale="en",String.defaultLocale="en",n.culture("en")}var n=i(4),a=function(e,t){var i={};for(var r in e)i[r]=e[r];for(var r in t)i[r]=t[r];return i},o={autoFocus:"Auto focus",autoFocus_description:"Specifies whether the Querybox gets the focus and is selected on initialization. ",enableQuerySyntax:"Enable query syntax",enableQuerySyntax_description:"Specifies whether the Coveo Platform does not try to interpret special query syntax such as field references in the query entered through the query box. ",enableLowercaseOperators:"Enable lowercase operators",enableLowercaseOperators_description:"Specifies whether to also interpret lowercase keywords (like: or }, and) as operators. When false }, only uppercase keywords (Or }, AND) are recognized as operators. ",enablePartialMatch:"Enable partial match",enablePartialMatch_description:"Specifies whether a query containing a large number of keywords is automatically converted to a partial match expression to only match documents containing a subset of the keywords. ",enableQuestionMarks:"Enable question marks",enableQuestionMarks_description:"Specifies whether a question mark character (?) in a query is interpreted as a wildcard. ",enableSearchAsYouType:"Enable search-as-you-type",enableSearchAsYouType_description:"Specifies whether a new query is automatically triggered whenever the user types in new text inside the query box. ",enableWildcards:"Enable wildcards",enableWildcards_description:"Specifies whether the Coveo Platform expands keywords containing wildcard characters to the possible matching keywords to broaden the query. ",partialMatchKeywords:"Partial match keywords",partialMatchKeywords_description:"When partial match is enabled }, this option specifies the minimum number of keywords that must be present in the query for to activate partial match. ",partialMatchThreshold:"Partial match threshold",partialMatchThreshold_description:"Specifies the minimum number of keywords that a document must contain to be included in search results.",searchAsYouTypeDelay:"Search-as-you-type delay",searchAsYouTypeDelay_description:"When search-as-you-type is enabled }, specifies the delay in milliseconds before a new query is triggered when the user types in new text inside the query box. ",enableQueryExtensionAddon:"Enable query extension add-on",enableRevealQuerySuggestAddon:"Enable reveal query suggest add-on",enableFieldAddon:"Enable field add-on",enableSimpleFieldAddon:"Enable simple field add-on",SearchboxAdvancedSettings:"Searchbox Advanced Settings",StartTypingCaseForSuggestions:"Describe your problem to see possible solutions",Field_description:"This component creates an input element in a case form.",Picklist_description:"This component creates a picklist element in a case form.",Submit_description:"This component creates a submit button in a case form.",Cancel_description:"This component creates a cancel button in a case form.",Text_description:"This component adds text.",CaseCreationEditHeader:"Form",CaseCreation_searchDelay:"Delay",CaseCreation_searchDelay_description:"Specifies the delay in milliseconds before a new query is triggered when the end-user types new text inside a Field component.",CaseCreation_searchType:"Type",CaseCreation_searchType_description:"Specifies that only results of the specified type are returned.",CaseCreation_searchSort:"Sort",CaseCreation_searchSort_description:"Specifies how to sort the results.",CaseCreation_useSomeOnAllKeywords:"Use some of the keywords.",CaseCreation_useSomeOnAllKeywords_description:"Specifies whether to add a $some query extension containing the search keywords of the form. The search keywords are those from Field and Picklist components where enableSearch is set to true.",CaseCreation_someBest:"Extract this number of best keywords",CaseCreation_someBest_description:"Specifies the X best keywords that are to be matched.",CaseCreation_someMatch:"Documents should match this number of extracted keywords",CaseCreation_someMatch_description:"Specifies that only documents containing X or more keywords of those provided are to be matched.",CaseCreation_someRemoveStopWords:"Remove stop words",CaseCreation_someRemoveStopWords_description:"Specifies whether to remove any stop word present in the keywords.",CaseCreation_someMaximum:"Maximum number of keywords to match",CaseCreation_someMaximum_description:"Specifies the maximum number of keywords to use. If a larger number of keywords is provided, some keywords are completely ignored.",CaseCreation_useDefaultRule:"Use default assignment rules",CaseCreation_useDefaultRule_description:"Specifies if we want the default case assignment rules to be used.",CaseCreation_openLinkInNewWindow:"Open the results in a new window",CaseCreation_NoResults:"No results",CaseCreationInterface_enableAutomaticResponsiveMode:"Enable automatic responsive mode",CaseCreationInterface_maximumAge:"Maximum age",CaseCreationQuerySummary_messageOnNoResult:"Message on no results",CaseCreationQuerySummary_messageOnNoResult_description:"Message to display when no results are found.",Field_title:"Title",Field_title_description:"Specifies the title to display above the input.",Field_caseField:"Case field",Field_caseField_description:"Specifies the field in which to save the input value when the end-user submits the form.",Field_numberOfLines:"Number of lines",Field_numberOfLines_description:"Specifies the input height in number of lines.",Field_placeholder:"Placeholder",Field_placeholder_description:"Specifies a short hint displayed inside the input before the end-user enters a value.",Field_tooltip:"Tooltip",Field_tooltip_description:"Specifies what to display when the end-user's mouse is over the title.",Field_isRequired:"Is required",Field_isRequired_description:"Specifies whether the input has to be filled before the form can be submitted.",Field_enableSearch:"Include in search",Field_enableSearch_description:"Specifies whether to include the entered keywords in the query.",Field_addQre:"Add QRE",Field_addQre_description:"Specifies whether to add a query ranking expression (QRE) in the search query using the input value as the expression.",Field_queryModifier:"Query modifier",Field_queryModifier_description:"Specifies how to affect the ranking score for documents containing the entered keywords.",Field_addSome:"Add 'some'",Field_addSome_description:"Specifies whether to add a $some query extension in the query.",Field_someBest:"Best",Field_someBest_description:"Specifies the X best keywords that are to be matched.",Field_someMatch:"Match",Field_someMatch_description:"Specifies that only documents containing X or more keywords of those provided are to be matched.",Field_someRemoveStopWords:"Remove stop words",Field_someRemoveStopWords_description:"Specifies whether to remove any stop word present in the keywords.",Field_someMaximum:"Maximum",Field_someMaximum_description:"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.",Field_addCorrelateUsingIdf:"Add correlateUsingIdf",Field_addCorrelateUsingIdf_description:"Specifies whether to add a $correlateUsingIdf query extension to the search query.",Field_correlateForceOneMatch:"Force one match",Field_correlateForceOneMatch_description:"Specifies whether to ensure that all results have at least one matching keyword.",Field_correlateRemoveStopWords:"Remove stop words",Field_correlateRemoveStopWords_description:"Specifies whether to remove any stop word present in the keywords.",Field_correlateNoStemming:"No stemming",Field_correlateNoStemming_description:"If true, keywords are not expanded using the index stemming before matching documents.",Field_correlateMaximum:"Maximum",Field_correlateMaximum_description:"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.",Picklist_title:"Title",Picklist_title_description:"Specifies the title to display above the picklist.",Picklist_caseField:"Case field",Picklist_caseField_description:"Specifies the field in which to save the picklist value when the end-user submits the form.",Picklist_values:"Values",Picklist_values_description:"Specifies the values available in the picklist. If this option is left empty, they will be automatically obtained using the caseField option.",Picklist_defaultValue:"Default value",Picklist_defaultValue_description:"Specifies the default selected value of the picklist.",Picklist_placeholder:"Placeholder",Picklist_placeholder_description:"Specifies the text to display when no option is selected.",Picklist_tooltip:"Tooltip",Picklist_tooltip_description:"Specifies what to display when the end-user's mouse is over the title.",Picklist_isRequired:"Is required",Picklist_isRequired_description:"Specifies whether an option in this picklist has to be selected before the form can be submitted.",Picklist_enableSearch:"Enable search",Picklist_enableSearch_description:"Specifies whether to include the selected option keywords in the search for related case.",Picklist_addQre:"Add QRE",Picklist_addQre_description:"Specifies whether to add a query ranking expression (QRE) in the query using the searchField and the selected option as expression.",Picklist_searchField:"Search field",Picklist_searchField_description:"Specifies the field to use in the query ranking expression (QRE) added to the search query.",Picklist_queryModifier:"Query modifier",Picklist_queryModifier_description:"Specifies how to affect the ranking score for documents where the searchField is equal to the selected option.",Picklist_addSome:"Add Some",Picklist_addSome_description:"Specifies whether to add a $some query extensions in the query.",Picklist_someBest:"Best",Picklist_someBest_description:"Specifies the X best keywords that are to be matched.",Picklist_someMatch:"Match",Picklist_someMatch_description:"Specifies that only documents containing X or more keywords of those provided are to be matched.",Picklist_someRemoveStopWords:"Remove stop words",Picklist_someRemoveStopWords_description:"Specifies whether to remove any stop word present in the keywords.",Picklist_someMaximum:"Maximum",Picklist_someMaximum_description:"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.",Picklist_addCorrelateUsingIdf:"Add correlateUsingIdf",Picklist_addCorrelateUsingIdf_description:"Specifies whether to add a $correlateUsingIdf query extensions to the search query.",Picklist_correlateForceOneMatch:"Force one match",Picklist_correlateForceOneMatch_description:"Specifies whether to ensure that all results have at least one matching keyword.",Picklist_correlateRemoveStopWords:"Remove stop words",Picklist_correlateRemoveStopWords_description:"Specifies whether to remove any stop word present in the keywords.",Picklist_correlateNoStemming:"No stemming",Picklist_correlateNoStemming_description:"If true, keywords are not expanded using the index stemming before matching documents.",Picklist_correlateMaximum:"Maximum",Picklist_correlateMaximum_description:"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.",Submit_title:"Title",Submit_title_description:"Specifies the text to display on the button.",Submit_redirectUrl:"Redirect URL",Submit_redirectUrl_description:"Specifies where to redirect the end-user once the case has been submitted.",Cancel_title:"Title",Cancel_title_description:"Specifies the text to display on the button.",Cancel_redirectUrl:"Redirect URL",Cancel_redirectUrl_description:"Specifies where to redirect the end-user once the case has been canceled."};t.defaultLanguage=r,t.setLanguageAfterPageLoaded=s},function(e,t,i){/*! globalize - v0.1.1 - 2013-04-30
	* https://github.com/jquery/globalize
	* Copyright 2013 ; Licensed MIT */
var r=function(t,i){var s,n,a,o,l,c,u,d,h,p,f,m,y,b,g,v,_,k,w,S,M,C,x,F;return s=function(e){return new s.prototype.init(e)},e.exports=s,s.cultures={},s.prototype={constructor:s,init:function(e){return this.cultures=s.cultures,this.cultureSelector=e,this}},s.prototype.init.prototype=s.prototype,s.cultures.default={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},s.cultures.default.calendar=s.cultures.default.calendars.standard,s.cultures.en=s.cultures.default,s.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,o=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,l=/^\s+|\s+$/g,c=function(e,t){if(e.indexOf)return e.indexOf(t);for(var i=0,r=e.length;r>i;i++)if(e[i]===t)return i;return-1},u=function(e,t){return e.substr(e.length-t.length)===t},d=function(){var e,t,r,s,n,a,o=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[1]||{},l=2),"object"==typeof o||p(o)||(o={});c>l;l++)if(null!=(e=arguments[l]))for(t in e)r=o[t],s=e[t],o!==s&&(u&&s&&(f(s)||(n=h(s)))?(n?(n=!1,a=r&&h(r)?r:[]):a=r&&f(r)?r:{},o[t]=d(u,a,s)):s!==i&&(o[t]=s));return o},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},p=function(e){return"[object Function]"===Object.prototype.toString.call(e)},f=function(e){return"[object Object]"===Object.prototype.toString.call(e)},m=function(e,t){return 0===e.indexOf(t)},y=function(e){return(e+"").replace(l,"")},b=function(e){return isNaN(e)?NaN:Math[0>e?"ceil":"floor"](e)},g=function(e,t,i){var r;for(r=e.length;t>r;r+=1)e=i?"0"+e:e+"0";return e},v=function(e,t){for(var i=0,r=!1,s=0,n=e.length;n>s;s++){var a=e.charAt(s);switch(a){case"'":r?t.push("'"):i++,r=!1;break;case"\\":r&&t.push("\\"),r=!r;break;default:t.push(a),r=!1}}return i},_=function(e,t){t=t||"F";var i,r=e.patterns,s=t.length;if(1===s){if(i=r[t],!i)throw"Invalid date format string '"+t+"'.";t=i}else 2===s&&"%"===t.charAt(0)&&(t=t.charAt(1));return t},k=function(e,t,i){function r(e,t){var i,r=e+"";return t>1&&t>r.length?(i=b[t-2]+r,i.substr(i.length-t,t)):i=r}function s(){return f||m?f:(f=g.test(t),m=!0,f)}function n(e,t){if(y)return y[t];switch(t){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+t}}var a,o=i.calendar,l=o.convert;if(!t||!t.length||"i"===t){if(i&&i.name.length)if(l)a=k(e,o.patterns.F,i);else{var c=new Date(e.getTime()),u=M(e,o.eras);c.setFullYear(C(e,o,u)),a=c.toLocaleString()}else a=""+e;return a}var d=o.eras,h="s"===t;t=_(o,t),a=[];var p,f,m,y,b=["0","00","000"],g=/([^d]|^)(d|dd)([^d]|$)/g,w=0,x=S();for(!h&&l&&(y=l.fromGregorian(e));;){var F=x.lastIndex,E=x.exec(t),A=t.slice(F,E?E.index:t.length);if(w+=v(A,a),!E)break;if(w%2)a.push(E[0]);else{var P=E[0],I=P.length;switch(P){case"ddd":case"dddd":var T=3===I?o.days.namesAbbr:o.days.names;a.push(T[e.getDay()]);break;case"d":case"dd":f=!0,a.push(r(n(e,2),I));break;case"MMM":case"MMMM":var L=n(e,1);a.push(o.monthsGenitive&&s()?o.monthsGenitive[3===I?"namesAbbr":"names"][L]:o.months[3===I?"namesAbbr":"names"][L]);break;case"M":case"MM":a.push(r(n(e,1)+1,I));break;case"y":case"yy":case"yyyy":L=y?y[0]:C(e,o,M(e,d),h),4>I&&(L%=100),a.push(r(L,I));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),a.push(r(p,I));break;case"H":case"HH":a.push(r(e.getHours(),I));break;case"m":case"mm":a.push(r(e.getMinutes(),I));break;case"s":case"ss":a.push(r(e.getSeconds(),I));break;case"t":case"tt":L=12>e.getHours()?o.AM?o.AM[0]:" ":o.PM?o.PM[0]:" ",a.push(1===I?L.charAt(0):L);break;case"f":case"ff":case"fff":a.push(r(e.getMilliseconds(),3).substr(0,I));break;case"z":case"zz":p=e.getTimezoneOffset()/60,a.push((0>=p?"+":"-")+r(Math.floor(Math.abs(p)),I));break;case"zzz":p=e.getTimezoneOffset()/60,a.push((0>=p?"+":"-")+r(Math.floor(Math.abs(p)),2)+":"+r(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":o.eras&&a.push(o.eras[M(e,d)].name);break;case"/":a.push(o["/"]);break;default:throw"Invalid date format pattern '"+P+"'."}}}return a.join("")},function(){var e;e=function(e,t,i){var r=i.groupSizes,s=r[0],n=1,a=Math.pow(10,t),o=Math.round(e*a)/a;isFinite(o)||(o=e),e=o;var l=e+"",c="",u=l.split(/e/i),d=u.length>1?parseInt(u[1],10):0;l=u[0],u=l.split("."),l=u[0],c=u.length>1?u[1]:"",d>0?(c=g(c,d,!1),l+=c.slice(0,d),c=c.substr(d)):0>d&&(d=-d,l=g(l,d+1,!0),c=l.slice(-d,l.length)+c,l=l.slice(0,-d)),c=t>0?i["."]+(c.length>t?c.slice(0,t):g(c,t)):"";for(var h=l.length-1,p=i[","],f="";h>=0;){if(0===s||s>h)return l.slice(0,h+1)+(f.length?p+f+c:c);f=l.slice(h-s+1,h+1)+(f.length?p+f:""),h-=s,r.length>n&&(s=r[n],n++)}return l.slice(0,h+1)+p+f+c},w=function(t,i,r){if(!isFinite(t))return 1/0===t?r.numberFormat.positiveInfinity:t===-1/0?r.numberFormat.negativeInfinity:r.numberFormat.NaN;if(!i||"i"===i)return r.name.length?t.toLocaleString():""+t;i=i||"D";var s,n=r.numberFormat,a=Math.abs(t),o=-1;i.length>1&&(o=parseInt(i.slice(1),10));var l,c=i.charAt(0).toUpperCase();switch(c){case"D":s="n",a=b(a),-1!==o&&(a=g(""+a,o,!0)),0>t&&(a="-"+a);break;case"N":l=n;case"C":l=l||n.currency;case"P":l=l||n.percent,s=0>t?l.pattern[0]:l.pattern[1]||"n",-1===o&&(o=l.decimals),a=e(a*("P"===c?100:1),o,l);break;default:throw"Bad number format specifier: "+c}for(var u=/n|\$|-|%/g,d="";;){var h=u.lastIndex,p=u.exec(s);if(d+=s.slice(h,p?p.index:s.length),!p)break;switch(p[0]){case"n":d+=a;break;case"$":d+=n.currency.symbol;break;case"-":/[1-9]/.test(a)&&(d+=n["-"]);break;case"%":d+=n.percent.symbol}}return d}}(),S=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},M=function(e,t){if(!t)return 0;for(var i,r=e.getTime(),s=0,n=t.length;n>s;s++)if(i=t[s].start,null===i||r>=i)return s;return 0},C=function(e,t,i,r){var s=e.getFullYear();return!r&&t.eras&&(s-=t.eras[i].offset),s},function(){var e,t,i,r,s,n,a;e=function(e,t){if(100>t){var i=new Date,r=M(i),s=C(i,e,r),n=e.twoDigitYearMax;n="string"==typeof n?(new Date).getFullYear()%100+parseInt(n,10):n,t+=s-s%100,t>n&&(t-=100)}return t},t=function(e,t,i){var r,s=e.days,o=e._upperDays;return o||(e._upperDays=o=[a(s.names),a(s.namesAbbr),a(s.namesShort)]),t=n(t),i?(r=c(o[1],t),-1===r&&(r=c(o[2],t))):r=c(o[0],t),r},i=function(e,t,i){var r=e.months,s=e.monthsGenitive||e.months,o=e._upperMonths,l=e._upperMonthsGen;o||(e._upperMonths=o=[a(r.names),a(r.namesAbbr)],e._upperMonthsGen=l=[a(s.names),a(s.namesAbbr)]),t=n(t);var u=c(i?o[1]:o[0],t);return 0>u&&(u=c(i?l[1]:l[0],t)),u},r=function(e,t){var i=e._parseRegExp;if(i){var r=i[t];if(r)return r}else e._parseRegExp=i={};for(var s,n=_(e,t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),a=["^"],o=[],l=0,c=0,u=S();null!==(s=u.exec(n));){var d=n.slice(l,s.index);if(l=u.lastIndex,c+=v(d,a),c%2)a.push(s[0]);else{var h,p=s[0],f=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":h="(\\D+)";break;case"tt":case"t":h="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":h="(\\d{"+f+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":h="(\\d\\d?)";break;case"zzz":h="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":h="([+-]?\\d\\d?)";break;case"/":h="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}h&&a.push(h),o.push(s[0])}}v(n.slice(l),a),a.push("$");var m=a.join("").replace(/\s+/g,"\\s+"),y={regExp:m,groups:o};return i[t]=y},s=function(e,t,i){return t>e||e>i},n=function(e){return e.split(" ").join(" ").toUpperCase()},a=function(e){for(var t=[],i=0,r=e.length;r>i;i++)t[i]=n(e[i]);return t},x=function(n,a,o){n=y(n);var l=o.calendar,c=r(l,a),u=RegExp(c.regExp).exec(n);if(null===u)return null;for(var d,h=c.groups,p=null,f=null,b=null,g=null,v=null,_=0,k=0,w=0,S=0,M=null,C=!1,x=0,F=h.length;F>x;x++){var E=u[x+1];if(E){var A=h[x],P=A.length,I=parseInt(E,10);switch(A){case"dd":case"d":if(g=I,s(g,1,31))return null;break;case"MMM":case"MMMM":if(b=i(l,E,3===P),s(b,0,11))return null;break;case"M":case"MM":if(b=I-1,s(b,0,11))return null;break;case"y":case"yy":case"yyyy":if(f=4>P?e(l,I):I,s(f,0,9999))return null;break;case"h":case"hh":if(_=I,12===_&&(_=0),s(_,0,11))return null;break;case"H":case"HH":if(_=I,s(_,0,23))return null;break;case"m":case"mm":if(k=I,s(k,0,59))return null;break;case"s":case"ss":if(w=I,s(w,0,59))return null;break;case"tt":case"t":if(C=l.PM&&(E===l.PM[0]||E===l.PM[1]||E===l.PM[2]),!C&&(!l.AM||E!==l.AM[0]&&E!==l.AM[1]&&E!==l.AM[2]))return null;break;case"f":case"ff":case"fff":if(S=I*Math.pow(10,3-P),s(S,0,999))return null;break;case"ddd":case"dddd":if(v=t(l,E,3===P),s(v,0,6))return null;break;case"zzz":var T=E.split(/:/);if(2!==T.length)return null;if(d=parseInt(T[0],10),s(d,-12,13))return null;var L=parseInt(T[1],10);if(s(L,0,59))return null;M=60*d+(m(E,"-")?-L:L);break;case"z":case"zz":if(d=I,s(d,-12,13))return null;M=60*d;break;case"g":case"gg":var O=E;if(!O||!l.eras)return null;O=y(O.toLowerCase());for(var q=0,z=l.eras.length;z>q;q++)if(O===l.eras[q].name.toLowerCase()){p=q;break}if(null===p)return null}}}var D,N=new Date,R=l.convert;if(D=R?R.fromGregorian(N)[0]:N.getFullYear(),null===f?f=D:l.eras&&(f+=l.eras[p||0].offset),null===b&&(b=0),null===g&&(g=1),R){if(N=R.toGregorian(f,b,g),null===N)return null}else{if(N.setFullYear(f,b,g),N.getDate()!==g)return null;if(null!==v&&N.getDay()!==v)return null}if(C&&12>_&&(_+=12),N.setHours(_,k,w,S),null!==M){var j=N.getMinutes()-(M+N.getTimezoneOffset());N.setHours(N.getHours()+parseInt(j/60,10),j%60)}return N}}(),F=function(e,t,i){var r,s=t["-"],n=t["+"];switch(i){case"n -":s=" "+s,n=" "+n;case"n-":u(e,s)?r=["-",e.substr(0,e.length-s.length)]:u(e,n)&&(r=["+",e.substr(0,e.length-n.length)]);break;case"- n":s+=" ",n+=" ";case"-n":m(e,s)?r=["-",e.substr(s.length)]:m(e,n)&&(r=["+",e.substr(n.length)]);break;case"(n)":m(e,"(")&&u(e,")")&&(r=["-",e.substr(1,e.length-2)])}return r||["",e]},s.prototype.findClosestCulture=function(e){return s.findClosestCulture.call(this,e)},s.prototype.format=function(e,t,i){return s.format.call(this,e,t,i)},s.prototype.localize=function(e,t){return s.localize.call(this,e,t)},s.prototype.parseInt=function(e,t,i){return s.parseInt.call(this,e,t,i)},s.prototype.parseFloat=function(e,t,i){return s.parseFloat.call(this,e,t,i)},s.prototype.culture=function(e){return s.culture.call(this,e)},s.addCultureInfo=function(e,t,i){var r={},s=!1;"string"!=typeof e?(i=e,e=this.culture().name,r=this.cultures[e]):"string"!=typeof t?(i=t,s=null==this.cultures[e],r=this.cultures[e]||this.cultures.default):(s=!0,r=this.cultures[t]),this.cultures[e]=d(!0,{},r,i),s&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},s.findClosestCulture=function(e){var t;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures.default;if("string"==typeof e&&(e=e.split(",")),h(e)){var i,r,s=this.cultures,n=e,a=n.length,o=[];for(r=0;a>r;r++){e=y(n[r]);var l,c=e.split(";");i=y(c[0]),1===c.length?l=1:(e=y(c[1]),0===e.indexOf("q=")?(e=e.substr(2),l=parseFloat(e),l=isNaN(l)?0:l):l=1),o.push({lang:i,pri:l})}for(o.sort(function(e,t){return e.pri<t.pri?1:e.pri>t.pri?-1:0}),r=0;a>r;r++)if(i=o[r].lang,t=s[i])return t;for(r=0;a>r;r++)for(i=o[r].lang;;){var u=i.lastIndexOf("-");if(-1===u)break;if(i=i.substr(0,u),t=s[i])return t}for(r=0;a>r;r++){i=o[r].lang;for(var d in s){var p=s[d];if(p.language===i)return p}}}else if("object"==typeof e)return e;return t||null},s.format=function(e,t,i){var r=this.findClosestCulture(i);return e instanceof Date?e=k(e,t,r):"number"==typeof e&&(e=w(e,t,r)),e},s.localize=function(e,t){return this.findClosestCulture(t).messages[e]||this.cultures.default.messages[e]},s.parseDate=function(e,t,i){i=this.findClosestCulture(i);var r,s,n;if(t){if("string"==typeof t&&(t=[t]),t.length)for(var a=0,o=t.length;o>a;a++){var l=t[a];if(l&&(r=x(e,l,i)))break}}else{n=i.calendar.patterns;for(s in n)if(r=x(e,n[s],i))break}return r||null},s.parseInt=function(e,t,i){return b(s.parseFloat(e,t,i))},s.parseFloat=function(e,t,i){"number"!=typeof t&&(i=t,t=10);var r=this.findClosestCulture(i),s=NaN,l=r.numberFormat;if(e.indexOf(r.numberFormat.currency.symbol)>-1&&(e=e.replace(r.numberFormat.currency.symbol,""),e=e.replace(r.numberFormat.currency["."],r.numberFormat["."])),e.indexOf(r.numberFormat.percent.symbol)>-1&&(e=e.replace(r.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))s=parseFloat(e);else if(!t&&n.test(e))s=parseInt(e,16);else{var c=F(e,l,l.pattern[0]),u=c[0],d=c[1];""===u&&"(n)"!==l.pattern[0]&&(c=F(e,l,"(n)"),u=c[0],d=c[1]),""===u&&"-n"!==l.pattern[0]&&(c=F(e,l,"-n"),u=c[0],d=c[1]),u=u||"+";var h,p,f=d.indexOf("e");0>f&&(f=d.indexOf("E")),0>f?(p=d,h=null):(p=d.substr(0,f),h=d.substr(f+1));var m,y,b=l["."],g=p.indexOf(b);0>g?(m=p,y=null):(m=p.substr(0,g),y=p.substr(g+b.length));var v=l[","];m=m.split(v).join("");var _=v.replace(/\u00A0/g," ");v!==_&&(m=m.split(_).join(""));var k=u+m;if(null!==y&&(k+="."+y),null!==h){var w=F(h,l,"-n");k+="e"+(w[0]||"+")+w[1]}o.test(k)&&(s=parseFloat(k))}return s},s.culture=function(e){return e!==i&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures.default},r}(this)},function(e,t){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return r.format.apply(this,arguments)}var r=Coveo.L10N;t.l=i},function(e,t,i){"use strict";var r=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},s=Coveo.Component,n=Coveo.Initialization,a=Coveo.$$,o=i(7),l=function(e){function t(t,i,r,n){e.call(this,t,i,r,n),this.element=t,this.options=i,this.result=n,a(t).removeClass(s.computeCssClassNameForType(o.EmailAsLink.ID))}return r(t,e),t.getMarkup=function(){return a("div",{className:"CoveoBoxEmailAsLink"}).el},t.prototype.getTitle=function(e){if(this.displayedInline=e,this.renderButton(),null!=this.buttonElement)return this.buttonElement.el},t.prototype.renderButton=function(){var e=this;a(this.element).empty(),this.buttonElement=a("div",{className:"coveo-box-attachToCase-view-in-menu"}),this.displayedInline?(this.iconElement=a("div",{className:"coveo-icon coveo-icon-email"}),this.buttonElement.append(this.iconElement.el)):(this.textElement=a("div",{className:"coveo-caption"}),this.textElement.text(Coveo.l("Email")),this.buttonElement.append(this.textElement.el)),this.bind.on(this.buttonElement,"click",function(){return e.handleClick()})},t.ID="BoxEmailAsLink",t}(o.EmailAsLink);t.BoxEmailAsLink=l,n.registerAutoCreateComponent(l)},function(e,t,i){"use strict";var r=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},s=Coveo.Component,n=Coveo.Initialization,a=Coveo.ComponentOptions,o=Coveo.$$,l=i(8),c=function(e){function t(i,r,s,n){e.call(this,i,t.ID,s),this.element=i,this.options=r,this.bindings=s,this.result=n,this.options=a.initComponentOptions(i,t,r),this.result=this.result||this.resolveResult(),this.searchInterface=this.searchInterface||this.resolveSearchInterface(),this.initialized=!1,"undefined"!=typeof emailAsLinkEndpoint&&null!=emailAsLinkEndpoint?this.setEmailAsLinkEndpoint(emailAsLinkEndpoint):this.logger.warn("No endpoint detected, make sure to set one using the SetEmailAsLinkEndpoint method.")}return r(t,e),t.prototype.initialize=function(){null!=this.emailAsLinkEndpoint?(this.renderButton(),this.initialized=!0):this.logger.warn("No endpoint detected, make sure to set one using the SetAttachToCaseEndpoint method.")},t.prototype.renderButton=function(){var e=this;o(this.element).empty(),this.buttonElement=o("div"),this.buttonElement.addClass("coveo-email-as-link"),this.buttonElement.setHtml('<span class="coveo-icon '+this.options.icon+'"></span><span class="coveo-caption">'+this.options.title+"</span>"),this.bind.on(this.buttonElement,"click",function(){return e.handleClick()}),this.element.appendChild(this.buttonElement.el)},t.prototype.sendEmail=function(){var e=o(this.options.emailTemplate.instantiateToElement(this.result)),t=e.el.getElementsByClassName("CoveoEmailSujet")[0].innerHTML,i=e.el.getElementsByClassName("CoveoEmailMessage")[0].innerHTML,r={articleID:this.result.raw.sfkbid,caseID:this.emailAsLinkEndpoint.caseId,resultUriHash:this.result.raw.sysurihash,author:this.result.raw.author},s={name:"caseEmail",type:"case"},n={subject:t,message:i};this.usageAnalytics.logCustomEvent(s,r,this.root),this.emailAsLinkEndpoint.sendEmail(n)},t.prototype.handleClick=function(){this.sendEmail()},t.prototype.setEmailAsLinkEndpoint=function(e){null!=e&&(this.emailAsLinkEndpoint=e,this.initialize())},t.ID="EmailAsLink",t.options={title:Coveo.ComponentOptions.buildStringOption({defaultValue:"Email"}),icon:Coveo.ComponentOptions.buildStringOption({defaultValue:""}),emailTemplate:a.buildTemplateOption({defaultFunction:function(e){return new l.DefaultEmailTemplate},selectorAttr:"data-template-selector",idAttr:"data-template-id"})},t}(s);t.EmailAsLink=c,n.registerAutoCreateComponent(c)},function(e,t){"use strict";var i=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},r=Coveo.Template,s=function(e){function t(){e.call(this)}return i(t,e),t.prototype.instantiateToString=function(e){return'<div class="CoveoEmailSujet">Your Subject</div><div class="CoveoEmailMessage">Your Message</div>'},t}(r);t.DefaultEmailTemplate=s}])});
//# sourceMappingURL=CoveoPSComponents.Custom.js.map