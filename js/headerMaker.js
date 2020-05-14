$(document).ready(function () {


    fetch("/api/catalog_system/pub/category/tree/4/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/]+/g, '-');
                $(".deptos ul").append(`<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
                console.log("adding main");


                if (element.hasChildren) {
                    $("#top-menu .container #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row">
            <div><a><img src="/arquivos/menu_${element.name}.jpg" /></a></div>
                 <div class="col-sm-4 firstLayer firstLayer-${element.name}">
                     <ul class="">
                         

                     </ul>
                 </div>
                 
                 
                 
             </div>
            </div>`);

                    //Desktop
                    $(`.depto-${element.name}`).mouseenter(function () {
                        $(".deptonav").hide();
                        $(`#deptos-list .depto-${element.name}#${element.name}`).show()
                    });

                    $(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function () {
                        $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                        $(`#deptos-list .deptonav .row .secondLayer`).hide();
                        $(`#deptos-list .deptonav .row .thirdLayer`).hide();
                    });


                    element.children.forEach((subs, index) => {
                        console.log("adding children");
                        console.log(subs)
                        let divtextsub = subs.name;
                        subs.name = subs.name.replace(/[\s/]+/g, '-');

                        $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul`).append(`<li><a href="${subs.url}" class="item-${subs.name}"><i class="fa fa-angle-right"></i>${divtextsub}</a></li>`);
                        if (subs.hasChildren) {
                            $(`.depto-${element.name} .row`).append(`
                        <div class="col-sm-4 secondLayer secondLayer-${subs.name} parent-${element.name}" style="display:none">
                     <ul class="">
                         
                     </ul>
                 </div>
                        `);

                            //Desktop
                            $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul .item-${subs.name}`).mouseenter(function () {
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-4.thirdLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}`).show()
                            });

                            /*$(`#deptos-list .depto-${element.name}#${element.name}`).mouseleave(function() {
                             $(`#deptos-list .depto-${element.name}#${element.name}`).hide()
                         });*/

                            subs.children.forEach((grandsubs) => {
                                console.log("adding grandchildren");
                                console.log(grandsubs)
                                let divtextgrandsubs = grandsubs.name;
                                grandsubs.name = grandsubs.name.replace(/[\s/]+/g, '-');
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}  ul`).append(`<li><a href="${grandsubs.url}" class="item-${grandsubs.name}"><i class="fa fa-angle-right"></i>${divtextgrandsubs}</a></li>`);

                                if (grandsubs.hasChildren) {
                                    $(`.depto-${element.name} .row`).append(`
                                <div class="col-sm-4 thirdLayer thirdLayer-${grandsubs.name} parent-${subs.name}" style="display:none">
                             <ul class="">
                                 
                             </ul>
                         </div>
                                `);


                                    $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}  ul .item-${grandsubs.name}`).mouseenter(function () {
                                        
                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer`).hide()
                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer-${grandsubs.name}`).show()
                                    });



                                    grandsubs.children.forEach((ggsubs) => {
                                        console.log("adding grandgrandchildren");
                                        console.log(ggsubs);

                                        let divtextggsubs = ggsubs.name;
                                        ggsubs.name = ggsubs.name.replace(/[\s/]+/g, '-');

                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer-${grandsubs.name}  ul`).append(`<li><a href="${ggsubs.url}" class="item-${ggsubs.name}"><i class="fa fa-angle-right"></i>${divtextggsubs}</a></li>`);

                                    })

                                }

                            })
                        }




                        //mobile
                        $(`.dropdown-container#${element.name}`).append(`<a href="${subs.url}">${subs.name}</a>`)

                    })



                    $(".sidenav").append(`<button class="dropdown-btn" id="${element.name}">${element.name}<i class="fa fa-angle-down"></i></button>
            <div class="dropdown-container" id="${element.name}"></div>`)








                    //Mobile
                    $(`.dropdown-btn#${element.name}`).toggle(() => {
                        $(".dropdown-container").slideUp();
                        $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
                        $(`.dropdown-container#${element.name}`).slideDown()
                    }, () => {
                        $(`.dropdown-container#${element.name}`).slideUp()
                        $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
                    })




                }
            });








        })


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

});