/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
define(function() {
return 'html, body, h1, h2, h3, h4, h5, h6, div, span, blockquote, p, address, form, fieldset, img, ul, ol, dl, dt, dd, li, hr, table, td, th, strong, em, sup, sub, dfn, ins, del, q, cite, var, samp, code, kbd, tt, pre\n' +
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
/*
#footer hr
{
	margin: 10px 0 15px 0;
	height: 1px;
	border: solid 1px gray;
	border-bottom: none;
}

#footer p
{
	margin: 0 10px 10px 10px;
	float: left;
}

#footer #copy
{
	float: right;
}

#outputSample
{
	width: 100%;
	table-layout: fixed;
}

#outputSample thead th
{
	color: #dddddd;
	background-color: #999999;
	padding: 4px;
	white-space: nowrap;
}

#outputSample tbody th
{
	vertical-align: top;
	text-align: left;
}

#outputSample pre
{
	margin: 0;
	padding: 0;
}

.description
{
	border: 1px dotted #B7B7B7;
	margin-bottom: 10px;
	padding: 10px 10px 0;
	overflow: hidden;
}

label
{
	display: block;
	margin-bottom: 6px;
}

.cke_editable.cke_editable_inline
{
	cursor: pointer;
}

.cke_editable.cke_editable_inline.cke_focus
{
	box-shadow: inset 0px 0px 20px 3px #ddd, inset 0 0 1px #000;
	outline: none;
	background: #eee;
	cursor: text;
}

.cke_editable_inline pre
{
	white-space: pre-wrap;
	word-wrap: break-word;
}

.twoColumns,
.twoColumnsLeft,
.twoColumnsRight
{
	overflow: hidden;
}

.twoColumnsLeft,
.twoColumnsRight
{
	width: 45%;
}

.twoColumnsLeft
{
	float: left;
}

.twoColumnsRight
{
	float: right;
}

dl.samples
{
	padding: 0 0 0 40px;
}
dl.samples > dt
{
	display: list-item;
	list-style-type: disc;
	list-style-position: outside;
	margin: 0 0 3px;
}
dl.samples > dd
{
	margin: 0 0 3px;
}
.warning
{
    color: #ff0000;
	background-color: #FFCCBA;
    border: 2px dotted #ff0000;
	padding: 15px 10px;
	margin: 10px 0;
}

blockquote
{
	font-style: italic;
	font-family: Georgia, Times, "Times New Roman", serif;
	padding: 2px 0;
	border-style: solid;
	border-color: #ccc;
	border-width: 0;
}

.cke_contents_ltr blockquote
{
	padding-left: 20px;
	padding-right: 8px;
	border-left-width: 5px;
}

.cke_contents_rtl blockquote
{
	padding-left: 8px;
	padding-right: 20px;
	border-right-width: 5px;
}

img.right {
    border: 1px solid #ccc;
    float: right;
    margin-left: 15px;
    padding: 5px;
}

img.left {
    border: 1px solid #ccc;
    float: left;
    margin-right: 15px;
    padding: 5px; */
'';});

