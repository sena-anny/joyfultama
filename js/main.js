function header(){
  //console.log( "text" );
  $.ajax({
    url: "http://localhost/casa_feliz/include/header.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      //html = html.replace(/\{\$root\}/g, rootDir);//http://joyfultama.co.jp/に置換
      document.write(html);
    }
  });
}
function navi(){
  //console.log( "text" );
  $.ajax({
    url: "http://localhost/casa_feliz/include/navi.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      //html = html.replace(/\{\$root\}/g, rootDir);//http://joyfultama.co.jp/に置換
      document.write(html);
    }
  });
}
function aside(){
  //console.log( "text" );
  $.ajax({
    url: "http://localhost/casa_feliz/include/aside.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      //html = html.replace(/\{\$root\}/g, rootDir);//http://joyfultama.co.jp/に置換
      document.write(html);
    }
  });
}
function footer(){
  //console.log( "text" );
  $.ajax({
    url: "http://localhost/casa_feliz/include/footer.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      //html = html.replace(/\{\$root\}/g, rootDir);//http://joyfultama.co.jp/に置換
      document.write(html);
    }
  });
}
