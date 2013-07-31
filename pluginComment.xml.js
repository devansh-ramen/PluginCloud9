// Wrapped in JavaScript, to avoid cross-origin restrictions, created using wrap-in-js.sh
define(function() {
return '<a:application xmlns:a="http://ajax.org/2005/aml">\n' +
'    <a:window\n' +
'      id = "loginOutput"\n' +
'      title = "Login First"\n' +
'      center = "true"\n' +
'      modal = "false"\n' +
'      buttons = "close"\n' +
'      kbclose = "true"\n' +
'      width = "400"\n' +
'      height = "180">\n' +
//'	   <a:divider />\n' +
//'        <a:tab id="loginTabs" height="240">\n' +
'                        <a:label id="lblusername">Username: </a:label>\n' +
'                        <a:input class="test" id="txtusername" />\n' +
'                        <a:label id="lblpassword">Password: </a:label>\n' +
'                        <a:input type="password" id="txtpassword" style="" />\n' +
'        <a:button style="float:left;width:50%;display:inline" onclick="require(\'core/ext\').extLut[\'ext/livecoffee/livecoffee\'].validateLoginDetails()">Login</a:button>\n' +
//'        </a:td>\n' +
//'        <a:td>\n' +
'        <a:button style="float:right;width:50%;display:inline" onclick="require(\'core/ext\').extLut[\'ext/livecoffee/livecoffee\'].closeCodeOutput()">Close</a:button>\n' +
//'                    </a:hbox>\n' + */
//'        </a:tab>\n' +
'    </a:window>\n' +
'    <a:window\n' +
'      id = "addCommentOutput"\n' +
'      title = "Add Comments"\n' +
'      center = "true"\n' +
'      modal = "false"\n' +
'      buttons = "close"\n' +
'      kbclose = "true"\n' +
'      width = "400"\n' +
'      height = "240">\n' +
//'	   <a:divider />\n' +
'        <a:tab id="addCommentTabs" height="240">\n' +
//'            <a:page id="liveCoffeeCoffeeScript" caption="Tab Title Test">\n' + //First Tab title
'                <a:textarea\n' +
'                    id="liveCoffeeCodeOutput"\n' +
'                    flex="1"\n' +
'                    realtime="true"\n' +
'                    border="0"\n' +
'                    showprintmargin="false"\n' +
'                    printmargincolumn="0"\n' +
'                    width="400"\n' +
'                    height="130" />\n' +

'        <a:button style="float:left;width:50%;display:inline" onclick="require(\'core/ext\').extLut[\'ext/livecoffee/livecoffee\'].saveComment()">Save</a:button>\n' +
//'        </a:td>\n' +
//'        <a:td>\n' +
'        <a:button style="float:right;width:50%;display:inline" onclick="require(\'core/ext\').extLut[\'ext/livecoffee/livecoffee\'].closeCodeOutput()">Close</a:button>\n' +
//'                    </a:hbox>\n' + */
'        </a:tab>\n' +
'    </a:window>\n' +
'</a:application>\n' +
'';});
