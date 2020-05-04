$(document).ready(function () {

    var cines = [];
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        dataType: 'json'
    })
        .done(function (data) {
                for (i = 0; i < data.contentCinemaShows.length; i++) {
                    var cinemaShow = data.contentCinemaShows[i].cinemaShows;
                    for (j = 0; j < cinemaShow.length; j++) {
                        if (!cines.includes(cinemaShow[j].cinema)) {
                            cines.push(cinemaShow[j].cinema);
                        }
                    }
                }
                var contenido;
                for (i = 0; i < cines.length; i++) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.attr("href", "Cine"+i);
                    contenido = cines[i];
                    a.appendChild(document.createTextNode(contenido));
                    document.querySelector("#listaCines").appendChild(li).appendChild(a);
                }

                for (i = 0; i < cines.length; i++){
                    var div = document.createElement("div");
                    div.attr('id', 'Cine'+i);
                    var moviestemp=[];
                    for (j = 0; j < data.contentCinemaShows.length; j++) {
                        var cinemaShow1 = data.contentCinemaShows[j].cinemaShows;
                        for (k = 0; k < cinemaShow1.length; k++) {
                            if (cines[i] === cinemaShow[k].cinema) {
                                if (!moviestemp.includes(data.contentCinemaShows.movie)){
                                    moviestemp.push(data.contentCinemaShows.movie);
                                }
                            }
                        }
                    }

                    for (j=0;j<moviestemp;j++){
                        var botton = document.createElement("button");
                        botton.attr('id', 'Cine'+i+'movie'+j);
                        var url;
                        for (k=0;k<data.contentCinemaShows.length;k++){
                            if(moviestemp[j]===data.contentCinemaShows[k].movie){
                                url=data.contentCinemaShows[k].posterURL;
                            }
                        }
                        botton.css("background","url("+url+")")
                        botton.css("background-repeat","no-repeat");
                        botton.css("background-size","contain");
                        let wt=botton.css("width")*500/350;
                        botton.css("height",wt+"px");

                     //   document.querySelector("#").appendChild(li).appendChild(a);


                    }


                }


















                $("#movies").hide();
                $("#movies:first").show()
                 $("ul.tabs li").click(function() {

                //Desactivo el elemento activo. Observar que recorro todos los li.
                $("ul.tabs li").removeClass("active");

                //Activo el elemento al cual le hice click, agregándole la clase correspondiente. this viene con el evento.
                $(this).addClass("active");

                //Oculto TODOS los contenidos.
                $(".tab_content").hide();

                //TRIQUIÑUELA: Obtengo el atributo href dentro del elemento li que casulamente es el selector para el contenido correspondiente :)
                var activeTab = $(this).find("a").attr("href");

                //Lo presento con Fade porque soy un artista.
                $(activeTab).fadeIn();

                return false;
            });











            }
        )
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        });

});
