// //Vietnamese
// $(function() {
//     var lang;
//     $.fn.changeToVn = function(){ 
//         lang = "vi";
//         $("#mainNav li:nth-child(1) a").text("Trang chủ");
//         $("#mainNav li:nth-child(2) a").text("Giới thiệu");
//         $("#mainNav li:nth-child(3) a").text("Sản phẩm");
//         $("#call1").text("GỌI CHO CHÚNG TÔI NGAY");
//         $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Công nghệ");
//         $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Vật lý");
//         $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Hóa học");
//         $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Sinh học");
//         // $("#menuleft").children().eq(0).text("Tất cả các công nghệ");
//         $("#submenuleft li:nth-child(1) a ").text("Kỹ thuật điện tử");
//         // $("#submenuleft").children().eq(0).text("Kỹ thuật điện tử");
//         $("#submenuleft li:nth-child(2) a ").text("Công nghệ ô tô");
//         $("#submenuleft li:nth-child(3) > a ").text("Chương trình đào tạo COM4LAB");
//         $("#subsubmenuleft li:nth-child(1) > a ").text("System at a Glance");
//         $("#subsubmenuleft li:nth-child(2) > a ").text("COM4LAB Hardware");
//         $("#subsubmenuleft li:nth-child(3) > a ").text("Interactive Courses");
        
//         $("#subsubmenuleft li:nth-child(4) > a ").text("Digital Education");
//         $("#subsubmenuleft li:nth-child(5) > a ").text("Various Learning Locations");
//         $("#subsubmenuleft li:nth-child(6) > a ").text("Comprehensive Curriculus");
//         $("#subsubmenuleft li:nth-child(7) > a ").text("Course Overview");
//         $("#submenuleft li:nth-child(4) a ").text("Năng lượng tái tạo");
//         $("#submenuleft li:nth-child(5) a ").text("Phương pháp học");
//         $("#submenuleft li:nth-child(6) a ").text("Thiết bị đo và phân tích năng lượng (CASSY)");
//         $("#c7357 p:nth-child(1) b").text("Khám phá danh mục hệ thống đào tạo toàn diện của chúng tôi với các giải pháp của các thương hiệu công nghệ LEYBOLD, FEEDBACK và ELWE trong các lĩnh vực:");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Kỹ thuật điện tử");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Công nghệ ô tô");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Năng lượng tái tạo");
//         $("#a1010").text("CASSY: Đo lường và đánh giá hỗ trợ của máy tính");
//         $("#a1011").text("Hệ thống CASSY dạng mô-đun giúp thực hiện đo lường và đánh giá với sự hỗ trợ của máy tính cho tất cả các cấp độ đào tạo và giáo dục cho đến đại học.");
//         $("#a1012").text("HỆ THỐNG CASSY BAO GỒM:");
//         $("#a1012 + ul > li:nth-child(1)").text("Giao diện để ghi dữ liệu đo lường");
//         $("#a1012 + ul > li:nth-child(2)").text("Cung cấp toàn diện các cảm biến để phát hiện các biến số điện và phi điện");
//         $("#a1012 + ul > li:nth-child(3)").text("CASSY Lab 2: Phần mềm đo lường và đánh giá trực quan và dễ sử dụng đã được thiết kế để phù hợp với tất cả các thiết bị và cảm biến.");
//         $("#a1012 + ul > li:nth-child(4)").text("Các giải pháp phần mềm được điều chỉnh hoàn toàn, ví dụ: để chẩn đoán xe cơ giới");
//         $("#a1013").text("Để biết thêm thông tin về CASSY-System và các sản phẩm của nó, hãy nhấp vào: ");
//         $("#a1013 + a").text("TẠI ĐÂY");
//         $("#a1014").text("Giải pháp đào tạo kỹ thuật");
//         $("#a1015").text("Để đối mặt với tình trạng thiếu lao động có tay nghề trầm trọng trong thế giới công nghiệp và nhu cầu ngày càng tăng về trình độ chuyên môn cao hơn trong công việc, ngày càng có nhiều sự chú ý trong nước và quốc tế tập trung vào");
//         $("#a1015 + b").text("Hệ thống giáo dục và đào tạo nghề kép của Đức");
//         $("#a1016").text("Đây là hệ thống giáo dục dựa trên đào tạo thực hành, thực hành trong ngành kết hợp học lý thuyết tương ứng ở trường cao đẳng nghề: đây là hệ thống hướng tới tương lai và phù hợp với nhu cầu phát triển.");
//         $("#a1016 + b").text("Hệ thống giảng dạy được thiết kế mang tính giáo dục của chúng tôi dành cho đào tạo nghề");
//         $("#a1017").text("được thiết kế chính xác để đáp ứng những thách thức công nghệ mà các nước công nghiệp đang phải đối mặt.");
//         $("#a1018").text("LD DIDACTIC xây dựng cầu nối giữa lý thuyết và thực hành bằng việc cung cấp hệ thống, thiết bị kỹ thuật phục vụ đào tạo tại:");
//         $("#a1018 + ul > li:nth-child(1) b").text("Các trường Cao đẳng nghề");
//         $("#a1018 + ul > li:nth-child(2) b").text("Các trường cao đẳng và kỹ thuật");
//         $("#a1018 + ul > li:nth-child(3) b").text("Các cơ sở đào tạo tại chỗ");
//         $("#a1018 + ul > li:nth-child(4) b").text("Các trường cao đẳng và đại học");
//         $("#a1019").text("Lập kế hoạch và lắp đặt cơ sở vật chất và phòng thí nghiệm: Nội thất phòng thí nghiệm và nguồn điện");
//         $("#a1020 > span:nth-of-type(1)").text("Những người lập kế hoạch phòng của chúng tôi tùy chỉnh thiết kế phòng thí nghiệm của bạn chỉ bằng cách điều chỉnh các thiết bị thí nghiệm, đồ nội thất và giải pháp lưu trữ mong muốn theo nhu cầu cụ thể của bạn.");
//         $("#a1020 > span:nth-of-type(2)").text("Nhờ có nhiều năm kinh nghiệm, chúng tôi là đối tác đáng tin cậy trong tất cả các giai đoạn lập kế hoạch dự án từ khi hình thành đến khi thực hiện.");
//         $("#a1021").text("NỘI THẤT PHÒNG THÍ NGHIỆM ĐÀO TẠO KỸ THUẬT ĐIỆN/ĐIỆN TỬ VÀ KỸ THUẬT Ô TÔ (ĐÀO TẠO NGHỀ NGHIỆP)");
//         $("#a1022").text("Hệ thống nội thất phòng thí nghiệm của chúng tôi tính đến các yêu cầu của thiết bị thí nghiệm và thiết bị ngoại vi CNTT trong giảng dạy Kỹ thuật Điện/Điện tử và Kỹ thuật Ô tô ngay cả trong giai đoạn thiết kế phòng.");
//         $("#a1022 + p").text("Hợp tác chặt chẽ với bạn, chúng tôi có thể phát triển cách bố trí phòng/thiết bị phù hợp có tính đến nhu cầu và yêu cầu của bạn.");
//         $("#a1023 > li:nth-child(1)").text("Ghế thí nghiệm, ghế đa năng");
//         $("#a1023 > li:nth-child(2)").text("Máy trạm cho bài tập cài đặt");
//         $("#a1023 > li:nth-child(3)").text("Hệ thống cung cấp điện trong các mô-đun trượt 19 ở ba đơn vị chiều cao (HU)");
//         $("#a1023 > li:nth-child(4)").text("Tủ đựng đồ");
//         $("#a1023 > li:nth-child(5)").text("Thí nghiệm là viết tắt của mục đích trình diễn");
//         $("#a1023 > li:nth-child(6)").text("Mạng lưới cung cấp điện, ghế đa năng và hệ thống đào tạo.");
//         $("#a1024").text("NỘI THẤT PHÒNG VÀ PHÒNG THÍ NGHIỆM CHUYÊN DỤNG CHO THIẾT BỊ KHOA HỌC VẬT LÝ/HÓA HỌC/ SINH HỌC");
//         $("#a1025").text("Nội thất phòng thí nghiệm khoa học được cung cấp bởi đối tác SYNERGIE Mobiliar GmbH của chúng tôi tại Syke/Đức.");
//         $("#a1026").text("Thông tin chi tiết hơn có sẵn trong danh mục trực tuyến của chúng tôi ");
//         $("#a1026 + a").text("tại đây");
//         $(".language-selected .en").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
//         $(".language-selected .vi").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
//         $("#a2000").text("Hãy cho tôi một điểm tựa, tôi sẽ di chuyển thế giới này");
    
//     }
//     $.fn.changeToEn = function(){
//         lang = "en";
//         $("#mainNav li:nth-child(1) a").text("Home");
//         $("#mainNav li:nth-child(2) a").text("About");
//         $("#mainNav li:nth-child(3) a").text("Products");
//         $("#call1").text("CALL US NOW");
//         $("#menudropdown ul:nth-child(2) li:nth-child(1) a").text("Technology");
//         $("#menudropdown ul:nth-child(2) li:nth-child(2) a").text("Physics");
//         $("#menudropdown ul:nth-child(2) li:nth-child(3) a").text("Chemistry");
//         $("#menudropdown ul:nth-child(2) li:nth-child(4) a").text("Biology");
//         // $("#menuleft").children().eq(0).text("All Technologies");
//         $("#submenuleft li:nth-child(1) a ").text("Electrical Engineering");
//         $("#submenuleft li:nth-child(2) a ").text("Automotive Technology");
//         $("#submenuleft li:nth-child(3) > a ").text("COM4LAB");
//         $("#subsubmenuleft li:nth-child(1) > a ").text("System at a Glance");
//         $("#subsubmenuleft li:nth-child(2) > a ").text("COM4LAB Hardware");
//         $("#subsubmenuleft li:nth-child(3) > a ").text("Interactive Courses");
        
//         $("#subsubmenuleft li:nth-child(4) > a ").text("Digital Education");
//         $("#subsubmenuleft li:nth-child(5) > a ").text("Various Learning Locations");
//         $("#subsubmenuleft li:nth-child(6) > a ").text("Comprehensive Curriculus");
//         $("#subsubmenuleft li:nth-child(7) > a ").text("Course Overview");
//         $("#submenuleft li:nth-child(4) a ").text("Regenerative Energy");
//         $("#submenuleft li:nth-child(5) a ").text("Learning Methods");
//         $("#submenuleft li:nth-child(6) a ").text("Power Analyser CASSY");
//         $("#c7357 p:nth-child(1) b").text("Discover our comprehensive portfolio of training systems with solutions of our brands LEYBOLD, FEEDBACK and ELWE Technology within the fields of:");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(1) span").text("Electrical  Engineering");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(2) span").text("Automotive Technology");
//         $("#c7357 ul:nth-of-type(1) li:nth-child(3) span").text("Regenerative Energy");
//         $("#a1010").text("CASSY: Computer-assisted Measurement and Evaluation");
//         $("#a1011").text("The modular CASSY system makes computer-assisted measurement and evaluation possible for all training and educational levels up to university.");
//         $("#a1012").text("THE CASSY SYSTEM COVERS:");
//         $("#a1012 + ul > li:nth-child(1)").text("Interface for recording measurement data");
//         $("#a1012 + ul > li:nth-child(2)").text("Comprehensive offering of sensors for the detection of electrical and non-electrical variables");
//         $("#a1012 + ul > li:nth-child(3)").text("CASSY Lab 2: The intuitive and easy-to-use software for measurement and evaluation has been designed to fit all the equipment and sensors.");
//         $("#a1012 + ul > li:nth-child(4)").text("Software solutions fully-adapted, e. g. for motor vehicle diagnostics");
//         $("#a1013").text("For more information about the CASSY-System and its products click: ");
//         $("#a1013 + a").text("HERE");
//         $("#a1014").text("Solutions for technical training");
//         $("#a1015").text("To face the acute shortage of skilled labour in the industrial world and increasing demands for higher qualifications on the job, more and more national and international attention is being focussed on the");
//         $("#a1015 + b").text("German dual system of vocational training and education");
//         $("#a1016").text("This is an educational system based on practical, hands-on training in industry combined with studying the corresponding theory in a vocational college: this is a system which is future-oriented and in line with developing demands.");
//         $("#a1016 + b").text("Our educationally-designed teaching systems for vocational training");
//         $("#a1017").text("precisely geared to meet the technological challenges facing industrial countries.");
//         $("#a1018").text("LD DIDACTIC builds bridges between theory and practice by supplying technical equipment and systems for training at:");
//         $("#a1018 + ul > li:nth-child(1) b").text("Vocational colleges");
//         $("#a1018 + ul > li:nth-child(2) b").text("Technical colleges and schools");
//         $("#a1018 + ul > li:nth-child(3) b").text("On-the-job training facilities");
//         $("#a1018 + ul > li:nth-child(4) b").text("Colleges and universities");
//         $("#a1019").text("Facility and Lab Planning and Installation: Lab Furniture and Power Supplies");
//         $("#a1020 > span:nth-of-type(1)").text("Our room planners custom design your laboratory simply by tailoring the desired experiment equipment, furniture and storage solutions to your specific needs.");
//         $("#a1020 > span:nth-of-type(2)").text("Thanks to our many years of experience, we are reliable partners in all phases of project planning from conception to implementation.");
//         $("#a1021").text("LABORATORY FURNITURE FOR THE TRAINING IN ELECTRICAL ENGINEERING/ELECTRONICS AND AUTOMOTIVE ENGINEERING (VOCATIONAL TRAINING)");
//         $("#a1022").text("Our laboratory furniture system takes into account the requirements of the experimental equipment and IT peripherals in the teaching of Electrical Engineering/Electronics and Automotive Engineering even in the room design phase.");
//         $("#a1022 + p").text("Working hand in hand with you, we can develop a tailored room/equipment layout taking into consideration your needs and requirements.");
//         $("#a1023 > li:nth-child(1)").text("Laboratory benches, multifunctional benches");
//         $("#a1023 > li:nth-child(2)").text("Workstations for installation exercises");
//         $("#a1023 > li:nth-child(3)").text("Power supply systems in 19 slide-in modules in three height units (HU)");
//         $("#a1023 > li:nth-child(4)").text("Storage cabinets");
//         $("#a1023 > li:nth-child(5)").text("Experiment stands for demonstration purposes");
//         $("#a1023 > li:nth-child(6)").text("Networking of power supply, multifunctional benches and training system.");
//         $("#a1024").text("SPECIALIZED ROOM AND LABORATORY FURNITURE FOR SCIENTIFIC EQUIPMENT PHYSICS/CHEMISTRY/BIOLOGY");
//         $("#a1025").text("Scientific laboratory furniture is provided by our partner SYNERGIE Mobiliar GmbH in Syke/Germany.");
//         $("#a1026").text("More detailed information is available in our online catalog ");
//         $("#a1026 + a").text("here");
//         $(".language-selected .vi").css({"-webkit-filter": "grayscale(100%)","filter": "grayscale(100%)"});
//         $(".language-selected .en").css({"-webkit-filter": "grayscale(0%)","filter": "grayscale(0%)"});
//         $("#a2000").text("Give me a place to stand, and a lever long enough, and I will move the world");
//     }
    
//     $(".vi").click(function() {
//         $.fn.changeToVn();
       
//         console.log(lang);
//     });
//     $(".en").click(function() {
//         $.fn.changeToEn();
//         console.log(lang);
//     });
    
   
// //     var params = new window.URLSearchParams(window.location.search);    
// // console.log(params);
//     function getURLParams(url) {
//     return Object.fromEntries(new URL(url).searchParams.entries());
//     }
  
//   var params = getURLParams(window.location.href);
// //   console.log(params);
//   if(params['vi'] == ""){
//     $.fn.changeToVn();
//     console.log(lang);
//   }
//   if(params['en'] == ""){
//     $.fn.changeToEn();
//   }
//   if(typeof lang == "undefined"){
//     $.fn.changeToEn();
//   }
//   $("a").click(function(){
//     var oldHref = $(this).attr("href");
//     $(this).attr("href",oldHref+"?"+lang);
//     console.log(lang);
//    });

// });
// 👇️ One, Two, Three
let vars = '';

$(function() {
    let map = ["automative","automotive-technology","fundamentals-electr-on-ics-and-multimedia","fundamentals-with-ste","basics-of-complete-systems-with-ste","vehicle-electrics","power-supply","lighting-systems","networking-lighting-systems","backfitting-electrical-systems","combustion-engine","ignition-systems","motor-management-systems-petrol", "driver-assistance-and-comfort-systems","automation","driver-assistance-systems","chassis-and-drive-train","braking-systems","steering-system","automotive-networking-and-diagnosis-systems","networking-automotive-systems","diagnosis","electromobility"];
    let fullver = ["Automative","Automotive Technology","Fundamentals electr(on)ics and Multimedia","Fundamentals with STE","Basics of complete systems with STE","Vehicle Electrics","Power Supply","Lighting systems","Networking lighting systems","Backfitting electrical systems","Combustion Engine","Ignition Systems","Motor Management Systems Petrol", "Driver Assistance and Comfort Systems","Automation","Driver Assistance Systems","Chassis and Drive Train","Braking Systems","Steering System","Automotive Networking and Diagnosis Systems","Networking Automotive Systems","Diagnosis","Electromobility"];
    $.fn.changeText = function(){
        $(".tagslink").each(function () {
            var $this = $(this);
            var string = $this.text();
            for (let index = 0; index < map.length; index++) {
                const element = map[index];
                if(string == element){
                    $this.text(fullver[index]);
                    break;
                }
            }
        });
    }
    $.fn.changeText();
});


$("#nav-sets").find("a").each((i,v)=>{
    var link = $(v).text();
    var texta = link.replace(/\s/g, '');
    $(v).attr("href","/"+texta.toLowerCase());
});


$("#nav-sets-tab").click(function(){
    var a =	$(".box-productlist a").text();
    // console.log(a);
});

function change_image(image){

    var container = document.getElementById("main-image");

   container.src = image.src;
}


document.addEventListener("DOMContentLoaded", function(event) {
});