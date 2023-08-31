//Vietnamese
$(function() {
    $(".vi").click(function() {
        $("#mainNav li:nth-child(1) a").text("Trang chủ");
        $("#mainNav li:nth-child(2) a").text("Giới thiệu");
        $("#mainNav li:nth-child(3) a").text("Sản phẩm");
        $("#call1").text("GỌI CHO CHÚNG TÔI NGAY");
        $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Công nghệ");
        $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Vật lý");
        $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Hóa học");
        $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Sinh học");
        $("#menuleft").children().eq(0).text("Tất cả các công nghệ");
        $("#submenuleft").children().eq(0).text("Kỹ thuật điện tử");
        $("#submenuleft").children().eq(1).text("Công nghệ ô tô");
        $("#submenuleft").children().eq(2).text("Chương trình đào tạo COM4LAB");
        $("#submenuleft").children().eq(3).text("Năng lượng tái tạo");
        $("#submenuleft").children().eq(4).text("Phương pháp học");
        $("#submenuleft").children().eq(5).text("Thiết bị đo và phân tích năng lương (CASSY)");
        $("#c7357 p:nth-child(1) b").text("Khám phá danh mục hệ thống đào tạo toàn diện của chúng tôi với các giải pháp của các thương hiệu công nghệ LEYBOLD, FEEDBACK và ELWE trong các lĩnh vực:");
        $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Kỹ thuật điện");
        $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Công nghệ ô tô");
        $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Năng lượng tái tạo");
        $(".language-selected .en").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
        $(".language-selected .vi").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
        

       
    });
});

//English
$(function() {
    $(".en").click(function() {
        $("#mainNav li:nth-child(1) a").text("Home");
        $("#mainNav li:nth-child(2) a").text("About");
        $("#mainNav li:nth-child(3) a").text("Products");
        $("#mainNav li:nth-child(4) a").text("CALL US NOW");
        $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Technology");
        $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Physics");
        $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Chemistry");
        $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Biology");
        $("#menuleft").children().eq(0).text("All Technologies");
        $("#submenuleft").children().eq(0).text("Electrical Engineering");
        $("#submenuleft").children().eq(1).text("Automotive Technology");
        $("#submenuleft").children().eq(2).text("COM4LAB");
        $("#submenuleft").children().eq(3).text("Regenerative Energy");
        $("#submenuleft").children().eq(4).text("Learning Methods");
        $("#submenuleft").children().eq(5).text("Power Analyser CASSY");
        $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Electrical  Engineering");
        $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Automotive Technology");
        $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Regenerative Energy");
        $(".language-selected .vi").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
        $(".language-selected .en").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
    });
});