$('#bg_color-sel').colorPalette().on('selectColor', function(e) {
  $('#bg_color').val(e.color); $('#bg_color').css('color',e.color);
});
$('#fg_color-sel').colorPalette().on('selectColor', function(e) {
  $('#fg_color').val(e.color); $('#fg_color').css('color',e.color);
});
$('#fg_sec_color-sel').colorPalette().on('selectColor', function(e) {
  $('#fg_sec_color').val(e.color); $('#fg_sec_color').css('color',e.color);
});
['bg_color','fg_color','fg_sec_color'].forEach(function(id) {
    $$(id).style.color = $$(id).value;
});
function generate () {
         var base = "http://webchat.voltirc.com:9090/";
         var opts = {
             prompt: 1,
             nick: $$('nick').value||"VoltIRC....",
             channels: encodeURIComponent(($$('chans').value||"chat,help").replace(/#/g,'')),
             bg_color: ($$('bg_color').value||"022330").replace(/#/g,''),
             fg_color: ($$('fg_color').value||"DDDDDD").replace(/#/g,''),
             fg_sec_color: ($$('fg_sec_color').value||"999999").replace(/#/g,''),
         };
         var get = [];
         for (var id in opts) {
             get.push(id+'='+opts[id])
         };
         var url = base+'?'+get.join('&'),
             frame = '<iframe src="'+url+'" width="647" height="400"></iframe>',
             link =  'URL: <a href="'+url+'">'+url+'</a>';
         $$('output').innerHTML = '<br />Your custom URL:<br /><a href="'+url+'" target="_blank">'+url+'</a><br /><br />'+
                                  'You can embed this into your page with the following code:<br />'+
                                  '<input type="text" onClick="this.select();" id="iframe"><br /><br />'+
                                  '(Click <a href="#" onclick="popExample(\''+url+'\')">here</a> for an example.)';
         $$('iframe').value = frame;
};
function popExample (url) {
         window.open(url,'VoltIRC - Example Web Client','height=400,width=647');
};
function $$ (id) {
         return document.getElementById(id);
};
