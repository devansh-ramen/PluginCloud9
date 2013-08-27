// Wrapped in JavaScript, to avoid cross-origin restrictions, created using wrap-in-js.sh
define(function() {
return '.livecoffee-highlight {\n' +
'  background-color : red;\n' +
'}\n' +
'\n' +
'.livecoffee-highlight.ace_gutter_active_line {\n' +
'	background-color : red;\n' +
'}\n' +

'html, body, h1, h2, h3, h4, h5, h6, div, span, blockquote, p, address, form, fieldset, img, ul, ol, dl, dt, dd, li, hr, table, td, th, strong, em, sup, sub, dfn, ins, del, q, cite, var, samp, code, kbd, tt, pre\n' +
'{\n' +
	'line-height: 1.5em;\n' +
'}\n' +

'body\n' +
'{\n' +
	'padding: 10px 30px;\n' +
'}\n' +

'input, textarea, select, option, optgroup, button, td, th\n' +
'{\n' +
	'font-size: 100%;\n' +
'}\n' +

'pre, code, kbd, samp, tt\n' +
'{\n' +
	'font-family: monospace,monospace;\n' +
	'font-size: 1em;\n' +
'}\n' +

'body {\n' +
    'width: 960px;\n' +
    'margin: 0 auto;\n' +
'}\n' +

'code\n' +
'{\n' +
	'background: #f3f3f3;\n' +
	'border: 1px solid #ddd;\n' +
	'padding: 1px 4px;\n' +

	'-moz-border-radius: 3px;\n' +
	'-webkit-border-radius: 3px;\n' +
	'border-radius: 3px;\n' +
'}\n' +

'abbr\n' +
'{\n' +
	'border-bottom: 1px dotted #555;\n' +
	'cursor: pointer;\n' +
'}\n' +

'.new\n' +
'{\n' +
	'background: #FF7E00;\n' +
	'border: 1px solid #DA8028;\n' +
	'color: #fff;\n' +
	'font-size: 10px;\n' +
	'font-weight: bold;\n' +
	'padding: 1px 4px;\n' +
	'text-shadow: 0 1px 0 #C97626;\n' +
	'text-transform: uppercase;\n' +
	'margin: 0 0 0 3px;\n' +

	'-moz-border-radius: 3px;\n' +
	'-webkit-border-radius: 3px;\n' +
	'border-radius: 3px;\n' +

	'-moz-box-shadow: 0 2px 3px 0 #FFA54E inset;\n' +
	'-webkit-box-shadow: 0 2px 3px 0 #FFA54E inset;\n' +
	'box-shadow: 0 2px 3px 0 #FFA54E inset;\n' +
'}\n' +

'h1.samples\n' +
'{\n' +
	'color: #0782C1;\n' +
	'font-size: 200%;\n' +
	'font-weight: normal;\n' +
	'margin: 0;\n' +
	'padding: 0;\n' +
'}\n' +

'h1.samples a\n' +
'{\n' +
	'color: #0782C1;\n' +
	'text-decoration: none;\n' +
	'border-bottom: 1px dotted #0782C1;\n' +
'}\n' +

'.samples a:hover\n' +
'{\n' +
	'border-bottom: 1px dotted #0782C1;\n' +
'}\n' +

'h2.samples\n' +
'{\n' +
	'color: #000000;\n' +
	'font-size: 130%;\n' +
	'margin: 15px 0 0 0;\n' +
	'padding: 0;\n' +
'}\n' +

'p, blockquote, address, form, pre, dl, h1.samples, h2.samples\n' +
'{\n' +
	'margin-bottom: 15px;\n' +
'}\n' +

'ul.samples\n' +
'{\n' +
	'margin-bottom: 15px;\n' +
'}\n' +

'.clear\n' +
'{\n' +
	'clear: both;\n' +
'}\n' +

'fieldset\n' +
'{\n' +
	'margin: 0;\n' +
	'padding: 10px;\n' +
'}\n' +

'body, input, textarea\n' +
'{\n' +
	'color: #333333;\n' +
	'font-family: Arial, Helvetica, sans-serif;\n' +
'}\n' +

'body\n' +
'{\n' +
	'font-size: 75%;\n' +
'}\n' +

'a.samples\n' +
'{\n' +
	'color: #189DE1;\n' +
	'text-decoration: none;\n' +
'}\n' +

'form\n' +
'{\n' +
	'margin: 0;\n' +
	'padding: 0;\n' +
'}\n' +

'pre.samples\n' +
'{\n' +
	'background-color: #F7F7F7;\n' +
	'border: 1px solid #D7D7D7;\n' +
	'overflow: auto;\n' +
	'padding: 0.25em;\n' +
	'white-space: pre-wrap;\n' +
	'word-wrap: break-word;\n' +
	'-moz-tab-size: 4;\n' +
	'-o-tab-size: 4;\n' +
	'-webkit-tab-size: 4;\n' +
	'tab-size: 4;\n' +
'}\n' +

'#footer\n' +
'{\n' +
	'clear: both;\n' +
	'padding-top: 10px;\n' +
'}\n' +

'#footer hr\n' +
'{\n' +
	'margin: 10px 0 15px 0;\n' +
	'height: 1px;\n' +
	'border: solid 1px gray;\n' +
	'border-bottom: none;\n' +
'}\n' +

'#footer p\n' +
'{\n' +
	'margin: 0 10px 10px 10px;\n' +
	'float: left;\n' +
'}\n' +

'#footer #copy\n' +
'{\n' +
	'float: right;\n' +
'}\n' +

'#outputSample\n' +
'{\n' +
	'width: 100%;\n' +
	'table-layout: fixed;\n' +
'}\n' +

'#outputSample thead th\n' +
'{\n' +
	'color: #dddddd;\n' +
	'background-color: #999999;\n' +
	'padding: 4px;\n' +
	'white-space: nowrap;\n' +
'}\n' +

'#outputSample tbody th\n' +
'{\n' +
	'vertical-align: top;\n' +
	'text-align: left;\n' +
'}\n' +

'#outputSample pre\n' +
'{\n' +
	'margin: 0;\n' +
	'padding: 0;\n' +
'}\n' +

'.description\n' +
'{\n' +
	'border: 1px dotted #B7B7B7;\n' +
	'margin-bottom: 10px;\n' +
	'padding: 10px 10px 0;\n' +
	'overflow: hidden;\n' +
'}\n' +

'label\n' +
'{\n' +
	'display: block;\n' +
	'margin-bottom: 6px;\n' +
'}\n' +

'.cke_editable.cke_editable_inline\n' +
'{\n' +
	'cursor: pointer;\n' +
'}\n' +

'.cke_editable.cke_editable_inline.cke_focus\n' +
'{\n' +
	'box-shadow: inset 0px 0px 20px 3px #ddd, inset 0 0 1px #000;\n' +
	'outline: none;\n' +
	'background: #eee;\n' +
	'cursor: text;\n' +
'}\n' +

'.cke_editable_inline pre\n' +
'{\n' +
	'white-space: pre-wrap;\n' +
	'word-wrap: break-word;\n' +
'}\n' +

'.twoColumns,\n' +
'.twoColumnsLeft,\n' +
'.twoColumnsRight\n' +
'{\n' +
	'overflow: hidden;\n' +
'}\n' +

'.twoColumnsLeft,\n' +
'.twoColumnsRight\n' +
'{\n' +
	'width: 45%;\n' +
'}\n' +

'.twoColumnsLeft\n' +
'{\n' +
	'float: left;\n' +
'}\n' +

'.twoColumnsRight\n' +
'{\n' +
	'float: right;\n' +
'}\n' +

'dl.samples\n' +
'{\n' +
	'padding: 0 0 0 40px;\n' +
'}\n' +
'dl.samples > dt\n' +
'{\n' +
	'display: list-item;\n' +
	'list-style-type: disc;\n' +
	'list-style-position: outside;\n' +
	'margin: 0 0 3px;\n' +
'}\n' +
'dl.samples > dd\n' +
'{\n' +
	'margin: 0 0 3px;\n' +
'}\n' +
'.warning\n' +
'{\n' +
    'color: #ff0000;\n' +
	'background-color: #FFCCBA;\n' +
    'border: 2px dotted #ff0000;\n' +
	'padding: 15px 10px;\n' +
	'margin: 10px 0;\n' +
'}\n' +

'blockquote\n' +
'{\n' +
	'font-style: italic;\n' +
	'font-family: Georgia, Times, "Times New Roman", serif;\n' +
	'padding: 2px 0;\n' +
	'border-style: solid;\n' +
	'border-color: #ccc;\n' +
	'border-width: 0;\n' +
'}\n' +

'.cke_contents_ltr blockquote\n' +
'{\n' +
	'padding-left: 20px;\n' +
	'padding-right: 8px;\n' +
	'border-left-width: 5px;\n' +
'}\n' +

'.cke_contents_rtl blockquote\n' +
'{\n' +
	'padding-left: 8px;\n' +
	'padding-right: 20px;\n' +
	'border-right-width: 5px;\n' +
'}\n' +

'img.right {\n' +
    'border: 1px solid #ccc;\n' +
    'float: right;\n' +
    'margin-left: 15px;\n' +
    'padding: 5px;\n' +
'}\n' +

'img.left {\n' +
    'border: 1px solid #ccc;\n' +
    'float: left;\n' +
    'margin-right: 15px;\n' +
    'padding: 5px;\n' +





'';});
