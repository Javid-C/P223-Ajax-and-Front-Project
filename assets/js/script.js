$(document).ready(function() {
    $(window).scroll(function() {
        let scrollPx = $(window).scrollTop()
        if (scrollPx > 500) {
            $("#backToTop").fadeIn(450)
            $("#backToTop").css("display", "flex")
        } else {
            $("#backToTop").fadeOut(450)

        }

    })

    $("#backToTop").click(function() {
        $(window).scrollTop(0)
    })

    // $.ajax({
    //     url: 'http://api.plos.org/search?q=title:DNA',
    //     type: "GET",
    //     dataType: "json",
    //     success: function(data) {
    //         data.response.docs.forEach(data => {
    //             console.log(data);
    //             let myCard = document.createElement("div")
    //             let id_journal = document.createElement("div")
    //             let id = document.createElement("div")
    //             let journal = document.createElement("div")
    //             let desc = document.createElement("div")

    //             myCard.className = "myCard"

    //             id_journal.className = "id-journal"

    //             id.setAttribute("data-toggle", "tooltip")
    //             id.setAttribute("data-placement", "right")
    //             id.setAttribute("title", `${data.id}`)

    //             journal.className = "journal"

    //             desc.className = "desc"

    //             id.innerText = data.id.substring(0, 15) + "..."
    //             journal.innerText = data.journal
    //             desc.innerText = data.abstract[0].substring(0, 570) + "..."

    //             id_journal.append(id, journal)
    //             myCard.append(id_journal, desc)
    //             $(".container .row").append(myCard)


    //         });
    //     },
    //     error: function(e) {
    //         console.log("This site is not working");
    //     }

    // })

    $(".menu-icon i").click(function() {
        // $(".menu").addClass("active")
        $(".menu").css("display", "block")
        $(".menu").addClass("animate__bounceInRight")
        $(".menu").removeClass("animate__bounceOutRight")

        // filter: blur(2px)
        // $("header").css("filter", "blur(2px)")
        // $(".menu").css("filter", "blur(0px)")
    })

    $(".myClose i").click(function() {
        // $(".menu").removeClass("active")
        $(".menu").removeClass("animate__bounceInRight")
        $(".menu").addClass("animate__bounceOutRight")


        // $("header").css("filter", "blur(0px)")

    })
})