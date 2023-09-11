//Vietnamese
$(function() {
    $.fn.changeToVn = function(){ 
        $("#mainNav li:nth-child(1) a").text("Trang chủ");
        $("#mainNav li:nth-child(2) a").text("Giới thiệu");
        $("#mainNav li:nth-child(3) a").text("Sản phẩm");
        $("#call1").text("GỌI CHO CHÚNG TÔI NGAY");
        $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Công nghệ");
        $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Vật lý");
        $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Hóa học");
        $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Sinh học");
        $("#menuleft").children().eq(0).text("Tất cả các công nghệ");
        $("#submenuleft li:nth-child(1) a ").text("Kỹ thuật điện tử");
        // $("#submenuleft").children().eq(0).text("Kỹ thuật điện tử");
        $("#submenuleft li:nth-child(2) a ").text("Công nghệ ô tô");
        $("#submenuleft li:nth-child(3) a ").text("Chương trình đào tạo COM4LAB");
        $("#submenuleft li:nth-child(4) a ").text("Năng lượng tái tạo");
        $("#submenuleft li:nth-child(5) a ").text("Phương pháp học");
        $("#submenuleft li:nth-child(6) a ").text("Thiết bị đo và phân tích năng lương (CASSY)");
        $("#c7357 p:nth-child(1) b").text("Khám phá danh mục hệ thống đào tạo toàn diện của chúng tôi với các giải pháp của các thương hiệu công nghệ LEYBOLD, FEEDBACK và ELWE trong các lĩnh vực:");
        $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Kỹ thuật điện");
        $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Công nghệ ô tô");
        $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Năng lượng tái tạo");
        $(".language-selected .en").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
        $(".language-selected .vi").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
    
    }
    $.fn.changeToEn = function(){
        $("#mainNav li:nth-child(1) a").text("Home");
        $("#mainNav li:nth-child(2) a").text("About");
        $("#mainNav li:nth-child(3) a").text("Products");
        $("#mainNav li:nth-child(4) a").text("CALL US NOW");
        $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Technology");
        $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Physics");
        $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Chemistry");
        $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Biology");
        $("#menuleft").children().eq(0).text("All Technologies");
        $("#submenuleft li:nth-child(1) a ").text("Electrical Engineering");
        $("#submenuleft li:nth-child(2) a ").text("Automotive Technology");
        $("#submenuleft li:nth-child(3) a ").text("COM4LAB");
        $("#submenuleft li:nth-child(4) a ").text("Regenerative Energy");
        $("#submenuleft li:nth-child(5) a ").text("Learning Methods");
        $("#submenuleft li:nth-child(6) a ").text("Power Analyser CASSY");
        $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Electrical  Engineering");
        $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Automotive Technology");
        $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Regenerative Energy");
        $(".language-selected .vi").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
        $(".language-selected .en").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
    }
    $(".vi").click(function() {
        $.fn.changeToVn();
       
    });
    $(".en").click(function() {
        $.fn.changeToEn();
    });

    
});