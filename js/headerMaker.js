$(document).ready(function () {


    fetch("/api/catalog_system/pub/category/tree/4/")
        .then(res => res.json())
        .then(response => {
            console.log(response);



            response.forEach(element => {
                let divtext = element.name;
                element.name = element.name.replace(/[\s/,]+/g, '-');

                //desk
                $(".deptos ul").append(`<li class="depto-${element.name}"><a href="${element.url}">${divtext}</a></li>`);
               // console.log("adding main");
               
                if (element.hasChildren) {
                    $("#top-menu .container #deptos-list").append(`<div class="deptonav depto-${element.name}" id="${element.name}" style="display: none">

            <div class="row">
            <div><a><img src="/arquivos/menu_${element.name}.png" style="    max-width: 97.5%;
            margin-left: 5px;"/></a></div>
                 <div class="col-sm-4 firstLayer firstLayer-${element.name}">
                     <ul class="">
                      </ul>
                 </div>
                 </div>
            </div>`);



             //mobile
             $(".sidenav").append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span><button class="dropdown-btn" id="${element.name}"><i class="fa fa-angle-down"></i></button></div>
             <div class="dropdown-container" id="${element.name}"></div>`);
             

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


                    //Mobile
           $(`.dropdown-btn#${element.name}`).toggle(() => {
           // $(".dropdown-container").slideUp();
            $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-up');
            $(`.dropdown-container#${element.name}`).slideDown()
        }, () => {
            $(`.dropdown-container#${element.name}`).slideUp()
            $(`.dropdown-btn#${element.name} i`).attr('class', 'fa fa-angle-down');
        })

        element.children.sort( function( a, b ) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
                    element.children.forEach((subs, index) => {
                      //  console.log("adding children");
                      //  console.log(subs)
                        let divtextsub = subs.name;
                        subs.name = subs.name.replace(/[\s/,]+/g, '-');
                        //desktop
                        $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul`).append(`<li  class="item-${subs.name}"><a href="${subs.url}"><i class="fa fa-angle-right"></i>${divtextsub}</a></li>`);
                       
                       if(!subs.hasChildren) {
                        $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${element.name}"><a href="${subs.url}">${divtextsub}</a></span></div>`);

                       }
                       

                        if (subs.hasChildren) {
                            $(`.depto-${element.name} .row`).append(`
                        <div class="col-sm-4 secondLayer secondLayer-${subs.name} parent-${element.name}" style="display:none">
                     <ul class="">
                         
                     </ul>
                 </div>
                        `);
                            //Mobile
                        $(`.dropdown-container#${element.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${subs.name}"><a href="${subs.url}">${divtextsub}</a></span>
                        <button class="dropdown-btn" id="${subs.name}"><i class="fa fa-angle-down"></i></button></div>
                        <div class="dropdown-container" id="${subs.name}"></div>`);








                            //Desktop
                            $(`.depto-${element.name} .row .col-sm-4.firstLayer-${element.name}  ul .item-${subs.name}`).mouseenter(function () {
                               // $(`.depto-${element.name} .row .col-sm-4.secondLayer`).hide()
                                $(`.deptonav .row .col-sm-4.secondLayer`).hide();
                                $(`.depto-${element.name} .row .col-sm-4.thirdLayer`).hide()
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}`).show()
                            });

                          
                            
                                //Mobile
                                console.log("inserindo listeners sub long " + subs.name )
                                $(`.dropdown-btn#${subs.name}`).toggle(() => {
                                 console.log(`.dropdown-btn#${subs.name}`)
                                 $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                                 $(`.dropdown-btn#${subs.name} i`).attr('class', 'fa fa-angle-up');
                                 $(`.dropdown-container#${subs.name}`).slideDown()
                             }, () => {
                                 $(`.dropdown-container#${subs.name}`).slideUp()
                                 $(`.dropdown-btn#${subs.name} i`).attr('class', 'fa fa-angle-down');
                             })
                     

                           
                             subs.children.sort( function( a, b ) {
                                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                            });  

                            subs.children.forEach((grandsubs) => {
                              //  console.log("adding grandchildren");
                               // console.log(grandsubs)
                                let divtextgrandsubs = grandsubs.name;
                                grandsubs.name = grandsubs.name.replace(/[\s/,]+/g, '-');
                                $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}  ul`).append(`<li  class="item-${grandsubs.name}"><a href="${grandsubs.url}"><i class="fa fa-angle-right"></i>${divtextgrandsubs}</a></li>`);

                                //mobile
                                if(!grandsubs.hasChildren) {
                                    $(`.dropdown-container#${subs.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${grandsubs.name}"><a href="${grandsubs.url}">${divtextgrandsubs}</a></span></div>`);
                                   
                                   } 
                                    
                                   
                              

                                if (grandsubs.hasChildren) {
                                    $(`.depto-${element.name} .row`).append(`
                                <div class="col-sm-4 thirdLayer thirdLayer-${grandsubs.name} parent-${subs.name}" style="display:none">
                             <ul class="">
                                 
                             </ul>
                         </div>
                                `);
                                  //mobile
                                  $(`.dropdown-container#${subs.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${grandsubs.name}"><a href="${grandsubs.url}">${divtextgrandsubs}</a></span>
                                  <button class="dropdown-btn" id="${grandsubs.name}"><i class="fa fa-angle-down"></i></button></div>
                                  <div class="dropdown-container" id="${grandsubs.name}"></div>`);


                                    $(`.depto-${element.name} .row .col-sm-4.secondLayer-${subs.name}  ul .item-${grandsubs.name}`).mouseenter(function () {
                                        
                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer`).hide()
                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer-${grandsubs.name}`).show()
                                    });


                                        
                                               



                                  


                                    
                                        //Mobile
                                        console.log("inserindo listeners grandsub  long " + grandsubs.name)
                                       
                                        $(`.dropdown-btn#${grandsubs.name}`).toggle(() => {
                                         console.log(`.dropdown-btn#${grandsubs.name}`)
                                         $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                                         $(`.dropdown-btn#${grandsubs.name} i`).attr('class', 'fa fa-angle-up');
                                         $(`.dropdown-container#${grandsubs.name}`).slideDown()
                                     }, () => {
                                         $(`.dropdown-container#${grandsubs.name}`).slideUp()
                                         $(`.dropdown-btn#${grandsubs.name} i`).attr('class', 'fa fa-angle-down');
                                     })
                                                               


                                     grandsubs.children.sort( function( a, b ) {
                                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                                    });
                                    grandsubs.children.forEach((ggsubs, index) => {
                                      //  console.log("adding grandgrandchildren");
                                      //  console.log(ggsubs);

                                        let divtextggsubs = ggsubs.name;
                                        ggsubs.name = ggsubs.name.replace(/[\s/,]+/g, '-');

                                        $(`.depto-${element.name} .row .col-sm-4.thirdLayer-${grandsubs.name}  ul`).append(`<li class="item-${ggsubs.name}"><a href="${ggsubs.url}"><i class="fa fa-angle-right"></i>${divtextggsubs}</a></li>`);

                                        //mobile
                                       
                                            $(`.dropdown-container#${grandsubs.name}`).append(`<div style="display:block;border-top: solid 1px #E4E5E9;"><span class="depto-${ggsubs.name}"><a href="${ggsubs.url}">${divtextggsubs}</a></span></div>`);

                                            console.log("inserindo listeners ggsub temp")
                                            $(`.dropdown-btn#${ggsubs.name}`).toggle(() => {
                                                console.log(`.dropdown-btn#${ggsubs.name}`)
                                             $(`.dropdown-btn i`).attr('class', 'fa fa-angle-down');
                                             $(`.dropdown-btn#${ggsubs.name} i`).attr('class', 'fa fa-angle-up');
                                             $(`.dropdown-container#${ggsubs.name}`).slideDown()
                                         }, () => {
                                             $(`.dropdown-container#${ggsubs.name}`).slideUp()
                                             $(`.dropdown-btn#${ggsubs.name} i`).attr('class', 'fa fa-angle-down');
                                         })
                                        
                                   

                                    })

                                }

                            })
                        }




                        //mobile
                       

                    })

                        //Desktop

                   









                } else {
                    $(".sidenav").append(`<span class="depto-${element.name}"><a href="${element.url}">${divtext}</a></span>`)
                }
            });








        })


    $(".vtexIdUI .modal-header .close").click(function () {
        window.location.href = '/';
    })

    //MUDAR TAMANHO DAS IMAGENS NA BARRA DE BUSCA
    


   
    

});




$(".fulltext-search-box.ui-autocomplete-input.ui-corner-all").on("change paste keyup", function() {

    setInterval(()=>{

        const imgsLength = $(".ui-autocomplete .ui-menu-item").length;

        for(let i= 0; i < imgsLength; i++) {
            let imgProduct = $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src");
            imgProduct = imgProduct.replace(/-25-25/g, '-50-50');
            $($(".ui-autocomplete .ui-menu-item img")[i]).attr("src",imgProduct);
        }
    },1000)
  
 });