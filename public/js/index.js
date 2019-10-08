define(function () {
    var createPoster = avalon.define({
        $id: 'createPoster',

        name: '',
        title: '',
        introduce: '',
        dynamic: '',
        course: '',

        imgSrc: '',

        //图片转为base64
        getBase64: function(id){
            var url = $('#' + id).attr("src");
            //console.log(url);
            var Img = new Image();
            Img.setAttribute('crossOrigin', 'anonymous');
            var dataURL = '';
            Img.src = url;
            Img.onload = function(){
                var canvas = document.createElement("canvas");
                var width = Img.width;
                var height = Img.height;
                canvas.width = width;
                canvas.height = height;
                canvas.getContext("2d").drawImage(Img, 0, 0, width, height);
                dataURL = canvas.toDataURL('image/jepe');
                $('#' + id).attr("src", dataURL);
                //console.log($('#' + id).attr("src"));
            };
        },

        //生成海报
        generate: function(){
            html2canvas($("#posterBox"), {  
                //useCORS: true,
                //height: $("#posterBox").outerHeight() + 10,  
                //width: $("#posterBox").outerWidth() + 10  ,
                onrendered: function(canvas) {                 
                    $("#down1").attr('href', canvas.toDataURL()); 
                    var timestamp = Date.parse(new Date());
                    $("#down1").attr('download',timestamp + '.png') ; 
                }  
            });
        }

    });
    return createPoster;
});
