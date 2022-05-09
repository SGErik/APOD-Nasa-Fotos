var date = $("#inputData").val();
var recebeVideo = $("#receiveVideo");
var recebeImagem = $("#receiveImg");
var imgAndVideo = $("#receiveImgOrVideo")




$('#btnDate').click(function () {
    var date = $("#inputData").val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=gcZG2YgEeGIBCoRRxFtwCbOOhqepwpdLNzBLSaUo&date=${date}`,
        type: "GET",

        success: function (info) {
            $("h2").text(info.title);
            if (info.media_type == "image" || info.media_type == "gif") {
                recebeImagem.attr("src", info.url).css("display", "flex")
                recebeVideo.css("display", "none")
            }else if(info.media_type == "video"){
                recebeVideo.attr("src", info.url).css("display", "flex")
                recebeImagem.css("display", "flex")
            }
            $("p").text(info.explanation)
            imgAndVideo.css("display", "flex")
            }

    })

})

