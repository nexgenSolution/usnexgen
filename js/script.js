//Vietnamese
$(function() {
    $(".vi").click(function() {
        $("#menuleft").children().eq(0).text("Tất cả các công nghệ");
        $("#submenuleft").children().eq(0).text("Kỹ thuật điện tử");
        $("#submenuleft").children().eq(1).text("Abc");
        $("#submenuleft").children().eq(2).text("xyz");
        $("#submenuleft").children().eq(3).text("aesfdgsdfg");
        $("#submenuleft").children().eq(4).text("awsdvsadfv");
        $("#submenuleft").children().eq(5).text("asdvad");
    

        // //header
        // $(".nav-menu").children().eq(0).text("Solutions");
        // $(".nav-menu").children().eq(1).text("community");
        // $(".nav-menu").children().eq(2).text("Buy");
        // $(".nav-menu").children().eq(3).text("Log in");
        // $(".language-selected").text("en-US");
        // $(".language-selected").removeClass("change-es");
        // $(".language-selected").removeClass("change-br");
        // $(".language-selected").addClass("change-en");
        // //section
        // $("#title").text("A simple webpage with Milti-language option");
        // //About
        // $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        // $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        // $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        // $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        // $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        // $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});

//English
$(function() {
    $(".en").click(function() {
        $("#menuleft").children().eq(0).text("All Technologies");
        $("#submenuleft").children().eq(0).text("Electrical Engineering");
        $("#submenuleft").children().eq(1).text("Abc");
        $("#submenuleft").children().eq(2).text("xyz");
        $("#submenuleft").children().eq(3).text("aesfdgsdfg");
        $("#submenuleft").children().eq(4).text("awsdvsadfv");
        $("#submenuleft").children().eq(5).text("asdvad");
    });
});