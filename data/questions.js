const quizConfig = {
  shuffleQuestions: true, // trộn câu
  shuffleOptions: true, // trộn đáp án
  shuffleBlocks: false, // trộn đoạn đọc
};

window.questions = [
  // ===== PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN =====

  {
    type: "mcq",
    q: "Đâu là cơ sở pháp lý để các nước Đông Nam Á xây dựng Cộng đồng ASEAN?",
    options: [
      "A. Hiến chương ASEAN.",
      "B. Tuyên bố Băng - cốc.",
      "C. Hiến chương Liên hợp quốc.",
      "D. hiệp ước Ba-li 1976.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Một trong những nội dung phản ánh nguyện vọng của các nước Đông Nam Á khi xây dựng Cộng đồng ASEAN là",
    options: [
      "A. thiết lập một liên minh quân sự Đông Nam Á.",
      "B. đoàn kết, hợp tác gạt bỏ ảnh hưởng của Pháp.",
      "C. một khu vực Đông Nam Á hữu nghị, hợp tác.",
      "D. liên kết, hợp tác toàn diện chặt chẽ về mọi mặt.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Ý tưởng xây dựng cộng đồng ASEAN xuất hiện từ khi",
    options: [
      "A. ASEAN mới thành lập (1967) tại Băng Cốc.",
      "B. khi Chiến tranh lạnh kết thúc.",
      "C. khủng hoảng năng lượng (1973).",
      "D. khủng hoảng tài chính (1997).",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Trong Tuyên bố Băng Cốc (1967), các nước thành viên ASEAN đã đề ra ý tưởng nào sau đây?",
    options: [
      "A. Tổ chức Đông Nam Á thành một khu vực mậu dịch tự do trong vòng 10 năm.",
      "B. Thành lập tổ chức liên minh chính trị - quân sự của các nước trong khu vực.",
      "C. Xây dựng một cộng đồng các nước Đông Nam Á hòa bình và thịnh vượng.",
      "D. Thúc đẩy quan hệ kinh tế, văn hóa giữa ASEAN và Cộng đồng châu Âu (EC).",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh đúng một trong những thách thức bên ngoài tác động đến Cộng đồng ASEAN?",
    options: [
      "A. Sự đa dạng về chế độ chính trị, những mâu thuẫn trong quan hệ song phương.",
      "B. Khoảng cách kinh tế, sự chênh lệch trình độ phát triển, sự cạnh tranh sản xuất.",
      "C. Sự cạnh tranh chiến lược của các nước lớn và sự thay đổi địa-chính trị.",
      "D. Tình hình chính trị một số nước còn phức tạp, sự chênh lệnh trình độ phát triển.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh không đúng về Cộng đồng Chính trị - An ninh ASEAN (APSC)?",
    options: [
      "A. Tạo khuôn khổ hợp tác chính trị - an ninh toàn diện.",
      "B. Xây dựng một môi trường hòa bình và ổn định.",
      "C. Hoạt động dựa trên cơ sở Hiến chương ASEAN.",
      "D. Tạo ra một liên minh quân sự ở khu vực Đông Nam Á.",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Một trong những nội dung chính của Cộng đồng Văn hóa – Xã hội ASEAN (ASCC) là",
    options: [
      "A. xây dựng khu vực kinh tế có sức cạnh tranh cao, phát triển đều.",
      "B. xây dựng một cộng đồng theo các giá trị và chuẩn mực chung.",
      "C. nâng cao ý thức cộng đồng và bản sắc chung của khối ASEAN.",
      "D. xây dựng thành một thị trường và hệ thống sản xuất thống nhất.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây là một trong những mục tiêu xây dựng Cộng đồng ASEAN?",
    options: [
      "A. Tạo điều kiện để ASEAN tập trung phát triển nội khối.",
      "B. Đưa tốc độ tăng trưởng của ASEAN cao nhất thế giới.",
      "C. Đưa ASEAN trở thành một tổ chức nhất thế hóa khu vực.",
      "D. Thúc đẩy ASEAN mở rộng hợp tác với bên ngoài.",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây là một trong những cơ hội đối với Việt Nam khi gia nhập Cộng đồng Kinh tế ASEAN (AEC)?",
    options: [
      "A. Mở rộng thị trường trong và ngoài khu vực.",
      "B. Xóa bỏ hoàn toàn sự chênh lệnh về kinh tế.",
      "C. Tăng cường khả năng cạnh tranh và thu hút đầu tư.",
      "D. Thay đổi hoàn toàn cấu trúc kinh tế Việt Nam.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Năm 2015, các nhà lãnh đạo ASEAN kí kết Tuyên bố Cua-la Lăm-pơ, đánh dấu sự ra đời của tổ chức nào sau đây?",
    options: [
      "A. Hiệp hội các quốc gia Đông Nam Á.",
      "B. Cộng đồng ASEAN.",
      "C. Tổ chức phòng thủ Đông Nam Á.",
      "D. Liên minh vì sự tiến bộ Đông Nam Á.",
    ],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh không đúng thách thức của Cộng đồng ASEAN?",
    options: [
      "A. Mức độ liên kết của ba trụ cột: chính trị - an ninh, kinh tế và văn hóa – xã hội.",
      "B. Sự đa dạng về chế độ chính trị, những mâu thuẫn trong quan hệ song phương.",
      "C. Khoảng cách kinh tế, sự chênh lệch trình độ phát triển, sự cạnh tranh sản xuất.",
      "D. An ninh phi truyền thống, ô nhiễm môi trường và các tội phạm xuyên quốc gia.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Một trong những nội dung phản ánh nguyện vọng của các nước Đông Nam Á khi xây dựng Cộng đồng ASEAN là",
    options: [
      "A. một khu vực Đông Nam Á hữu nghị, hợp tác.",
      "B. thiết lập một liên minh quân sự Đông Nam Á.",
      "C. đoàn kết, hợp tác gạt bỏ ảnh hưởng của Pháp.",
      "D. xây dựng liên minh kinh tế độc lập.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Đọc đoạn tư liệu sau: <i>“Toàn bộ Đông Nam Á sẽ là một cộng đồng ASEAN, nhận thức được các mối liên hệ lịch sử của mình, hiểu rõ di sản văn hóa của mình và gắn bó với nhau bằng một bản sắc chung của khu vực”</i>. Để xây dựng một bản sắc chung của Cộng đồng ASEAN như mục tiêu đề ra, các quốc gia thành viên cần phải thực hiện biện pháp nào sau đây?",
    options: [
      "A. Đồng nhất các nền văn hóa trong ASEAN để tạo ra một bản sắc khu vực duy nhất.",
      "B. Ưu tiên phát triển KT mà không cần chú trọng đến các yếu tố VH và lịch sử.",
      "C. Thúc đẩy sự hiểu biết và tôn trọng lẫn nhau về di sản văn hóa và lịch sử của từng quốc gia.",
      "D. Tách biệt hoàn toàn các yếu tố văn hóa truyền thống để hội nhập với các khu vực khác.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "<i>“Cộng đồng ASEAN sẽ được thành lập gồm ba trụ cột là hợp tác chính trị và an ninh, hợp tác kinh tế và hợp tác văn hóa – xã hội được gắn kết chặt chẽ và cùng tăng cường cho mục đích đảm bảo hòa bình, ổn định lâu dài và cùng thịnh vượng trong khu vực”</i> Được trích trong",
    options: [
      "A. Thỏa ước Ba-li II (2003).",
      "B. Lộ trình xây dựng Cộng đồng ASEAN (2009-2015).",
      "C. Hội nghị cấp cao ASEAN 14.",
      "D. Tầm nhìn ASEAN 2025.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Đâu không phải là một trong những trụ cột của Cộng đồng ASEAN?",
    options: [
      "A. Cộng đồng Chính trị - An ninh.",
      "B. Cộng đồng Văn hóa - Xã hội.",
      "C. Cộng đồng An ninh - Quốc phòng.",
      "D. Cộng đồng Kinh tế.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Tổng khởi nghĩa tháng Tám năm 1945 ở Việt Nam nổ ra trong bối cảnh quốc tế nào sau đây?",
    options: [
      "A. Liên hợp quốc được thành lập và tuyên bố chống phát xít.",
      "B. Quân Phiệt Nhật Bản đầu hàng Đồng minh không điều kiện.",
      "C. Chiến tranh lạnh bùng nổ và lan rộng khắp thế giới.",
      "D. Liên Xô và Mỹ đang ở thế đối đầu gay gắt về quân sự.",
    ],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Đại hội Quốc dân tại Tân Trào (Tuyên Quang) ngày 16 – 17/8/1945 đã quyết định chủ trương nào sau đây?",
    options: [
      "A. Bầu Chính phủ Việt Nam Dân chủ Cộng hòa.",
      "B. Tán thành chủ trương Tổng khởi nghĩa của Đảng.",
      "C. Phát động chiến tranh du kích ở Bắc Bộ.",
      "D. Thành lập Ủy ban giải phóng dân tộc Việt Nam.",
    ],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Những địa phương nào sau đây ở Việt Nam giành chính quyền tại tỉnh lị sớm nhất trong Cách mạng tháng Tám năm 1945?",
    options: [
      "A. Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam.",
      "B. Bắc Giang, Hải Dương, Huế và Sài Gòn.",
      "C. Hà Nội, Hải Phòng, Huế, Quảng Nam.",
      "D. Hà Nội, Huế, Sài Gòn, Đồng Nai Thượng.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Cách mạng tháng Tám năm 1945 ở Việt Nam thành công đã ảnh hưởng như thế nào đến phong trào cách mạng thế giới?",
    options: [
      "A. Làm sụp đổ hệ thống thuộc địa của chủ nghĩa thực dân.",
      "B. Tăng cường tình đoàn kết giữa các nước thuộc địa.",
      "C. Cổ vũ mạnh mẽ phong trào cách mạng thế giới.",
      "D. Dẫn đến sự ra đời của các tổ chức quốc tế.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Cách mạng tháng Tám thành công mở ra kỉ nguyên mới trong lịch sử dân tộc Việt Nam vì:",
    options: [
      "A. Phá tan xiềng xích nô lệ Pháp – Nhật, lật đổ chế độ phong kiến...",
      "B. Đã đưa nhân dân lao động lên nắm chính quyền, làm chủ đất nước....",
      "C. Đảng Cộng sản Đông Dương trở thành Đảng cầm quyền.",
      "D. Cổ vũ mạnh mẽ các nước thuộc địa đấu tranh giải phóng dân tộc.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Trong Cách mạng tháng Tám năm 1945 ở Việt Nam, địa phương nào sau đây đã tiến hành khởi nghĩa và giành thắng lợi vào ngày 19-8-1945?",
    options: ["A. Huế.", "B. Hà Nội.", "C. Hà Tiên.", "D. Sài Gòn."],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Chế độ phong kiến ở Việt Nam hoàn toàn sụp đổ được đánh dấu bằng sự kiện nào sau đây?",
    options: [
      "A. Vua Bảo Đại tuyên bố thoái vị, trao ấn kiếm cho chính quyền cách mạng.",
      "B. Nhà Nguyễn ký Hiệp ước Pa-tơ-nốt, thừa nhận Pháp bảo hộ.",
      "C. Phát xít Nhật vào Đông Dương và cấu kết với Pháp để thống trị Việt Nam.",
      "D. Nhân dân các địa phương Hà Nội, Huế, Sài Gòn giành được chính quyền.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Trong Tổng khởi nghĩa Cách mạng tháng Tám năm 1945, nhân dân Việt Nam đã giành chính quyền từ tay",
    options: [
      "A. thực dân Pháp.",
      "B. đế quốc Mỹ.",
      "C. thực dân Anh.",
      "D. phát xít Nhật.",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "<i>“Hỡi quốc dân đồng bào! Phát xít Nhật đã đầu hàng Đồng minh, quân Nhật đã bị tan rã tại khắp các mặt trận, kẻ thù chúng ta đã ngã gục..”</i> (Ủy ban Khởi nghĩa toàn quốc, Quân lệnh số 1). Đoạn thông tin trên phản ánh",
    options: [
      "A. điều kiện chủ quan thuận lợi của Tổng khởi nghĩa tháng Tám.",
      "B. điều kiện khách quan thuận lợi của Tổng khởi nghĩa tháng Tám.",
      "C. Cách mạng tháng Tám đã thành công ở Việt Nam và Đông Dương.",
      "D. phát xít Nhật đã đầu hàng quân Đồng minh và rút khỏi Việt Nam.",
    ],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Tỉnh giành chính quyền muộn nhất trong Cách mạng tháng Tám năm 1945 là",
    options: [
      "A. Đồng Nai Thượng.",
      "B. Hà Tĩnh.",
      "C. Quảng Nam.",
      "D. Vĩnh Long.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Hội nghị toàn quốc của Đảng Cộng sản Đông Dương họp tại Tân Trào (Tuyên Quang) vào ngày 14 – 15/8 đưa ra chủ trương nào sau đây?",
    options: [
      "A. Phát động cao trào kháng Nhật, cứu nước.",
      "B. Quyết định giành chính quyền ở Hà Nội trước tiên.",
      "C. Thông qua kế hoạch lãnh đạo toàn dân Tổng khởi nghĩa.",
      "D. Phát động Tổng tiến công quân địch trên toàn quốc.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Trong Cách mạng tháng Tám năm 1945 ở Việt Nam, địa phương nào sau đây đã tiến hành khởi nghĩa và giành thắng lợi vào ngày 23-8-1945?",
    options: ["A. Huế.", "B. Hà Tiên.", "C. Hà Nội.", "D. Sài Gòn."],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Trong cuộc Tổng khởi nghĩa tháng Tám năm 1945, thắng lợi ở các địa phương nào đóng vai trò quyết định nhất?",
    options: [
      "A. Thái Nguyên, Bắc Giang, Hải Dương.",
      "B. Bắc Giang, Hà Nội, Huế.",
      "C. Hà Nội, Huế, Sài Gòn.",
      "D. Sài Gòn, Cần Thơ, Huế.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Nghệ thuật chớp thời cơ của Đảng Cộng sản Đông Dương trong Cách mạng tháng Tám năm 1945 được thể hiện qua quyết định nào sau đây?",
    options: [
      "A. Giành chính quyền trước khi quân Đồng minh vào giải giáp quân đội Nhật.",
      "B. Giành chính quyền ngay khi quân đội Nhật Bản đảo chính Pháp.",
      "C. Tiến hành khởi nghĩa bằng lực lượng vũ trang ba thứ quân.",
      "D. Tổ chức Cao trào kháng Nhật sau khi quân Nhật Bản đầu hàng Đồng minh.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Thắng lợi của Cách mạng tháng Tám năm 1945 ở Việt Nam để lại bài học kinh nghiệm quan trọng nào sau đây cho sự nghiệp bảo vệ Tổ quốc ở Việt Nam?",
    options: [
      "A. Xây dựng thế trận toàn dân đánh giặc, phát triển lực lượng ở cả nông thôn và thành thị.",
      "B. Xây dựng lực lượng vũ trang ba thứ quân, kết hợp sức mạnh của lực lượng chính trị.",
      "C. Xây dựng khối đại đoàn kết quốc tế, phát huy sự giúp đỡ từ các nước xã hội chủ nghĩa.",
      "D. Xây dựng nền quốc phòng toàn dân, lấy lực lượng vũ trang ba thứ quân làm nòng cốt.",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Ngày 2 - 9 - 1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đã",
    options: [
      "A. phát lệnh Tổng khởi nghĩa.",
      "B. đọc Lời kêu gọi toàn quốc kháng chiến.",
      "C. đọc bản Tuyên ngôn Độc lập.",
      "D. công bố Chỉ thị Toàn dân kháng chiến.",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "<i>“Pháp chạy, Nhật hàng, vua Bảo Đại thoái vị. Dân ta đã đánh đổ các xiềng xích thực dân gần 100 năm nay để gây nên nước Việt Nam độc lập. Dân ta lại đánh đổ chế độ quân chủ mấy mươi thế kỉ mà lập nên chế độ dân chủ cộng hoà”.</i> (Hồ Chí Minh, Tuyên ngôn Độc lập (năm 1945)). Đoạn tư liệu trên phản ánh",
    options: [
      "A. sự suy yếu, lạc hậu của chế độ thực dân và phong kiến ở Việt Nam.",
      "B. những đóng góp của Cách mạng tháng Tám năm 1945 đối với thế giới.",
      "C. những kết quả to lớn của cuộc Cách mạng tháng Tám năm 1945.",
      "D. nhân dân Việt Nam đã giành chính quyền từ tay thực dân Pháp.",
    ],
    answer: 2,
  },

  // ===== PHẦN II: CÂU TRẮC NGHIỆM ĐÚNG SAI =====
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Cộng đồng ASEAN sẽ được thành lập gồm ba trụ cột là hợp tác chính trị và an ninh, hợp tác kinh tế và hợp tác văn hóa – xã hội, được gắn kết chặt chẽ và cùng tăng cường cho mục đích bảo đảm hòa bình, ổn định lâu dài và cùng thịnh vượng trong khu vực”.</i> (Trích: Tuyên bố Ba-li II, năm 2003)",
    options: [
      "a. Chính trị và an ninh là một trong ba trụ cột của Cộng đồng ASEAN.",
      "b. Cộng đồng ASEAN được chính thức thành lập năm 2007.",
      "c. Cộng đồng ASEAN được thành lập 10 năm sau khi ASEAN chính thức thông qua Hiến chương.",
      "d. Một trong những mục đích của việc thành lập Cộng đồng ASEAN là hướng đến một khu vực Đông Nam Á cùng phát triển thịnh vượng.",
    ],
    answer: [0, 3],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Đến năm 2020, ASEAN sẽ thiết lập được một Đông Nam Á hòa bình và ổn định, ở đó mỗi nước sống bình yên, những nguyên nhân xung đột đã được loại bỏ qua việc tôn trọng công lí, luật pháp và tăng cường tinh thần tự cường quốc gia và khu vực,… toàn bộ Đông Nam Á sẽ là một Cộng đồng ASEAN nhận thức được các mối liên hệ lịch sử của mình, hiểu rõ di sản văn hóa của mình và gắn bó với nhau bằng một bản sắc chung của khu vực”.</i> (Trích: Tầm nhìn ASEAN 2020)",
    options: [
      "a. Nội dung Tầm nhìn ASEAN 2020 hướng đến xây dựng một ASEAN hòa bình và ổn định.",
      "b. Đến năm 2015, theo kế hoạch, ASEAN sẽ chính thức được chuyển thành Cộng đồng ASEAN.",
      "c. Những nguyên nhân xung đột đã được loại bỏ ở Đông Nam Á trước và sau năm 2020.",
      "d. Tầm nhìn ASEAN 2020 hướng đến xây dựng một cộng đồng ASEAN gắn bó với nhau bằng một bản sắc chung của khu vực.",
    ],
    answer: [0, 1, 3],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Suốt dọc đường đi bộ về Hà Nội, Võ Nguyên Giáp và binh sĩ của ông đón nhận một sự ủng hộ rầm rộ của dân chúng địa phương. Những lá cờ đỏ sao vàng bay trên mọi làng ông đi qua. Khi đến Gia Lâm, gần Hà Nội, những tiền đồn của quân Nhật đã chặn đường. Sau một hồi tranh cãi, quân Nhật đã để cho họ đi qua,… Tinh thần dân chúng đã thay đổi khi họ biết Việt Minh đã giành chính quyền ở Hà Nội,… Các tội phạm đã biến mất. Ngay đến những vụ trộm và cướp giật cũng giảm hẳn”.</i> (Xe-xi Cơ-rây, “Những người Mỹ ở Hà Nội năm 1945”, in trong: Một số sự kiện lịch sử 200 năm quan hệ Việt – Mỹ 1820 – 2020, NXB Hồng Đức – Tạp chí Xưa và Nay, Hà Nội, 2020, tr.98)",
    options: [
      "a. Đoạn tư liệu phản ánh sự kiện Võ Nguyên Giáp cùng giải phóng quân tiến về Hà Nội trong Chiến dịch Điện Biên Phủ.",
      "b. Đoạn tư liệu thể hiện sự ủng hộ to lớn của nhân dân đối với quân đội Việt Minh trong khởi nghĩa giành chính quyền ở Hà Nội.",
      "c. Đoạn tư liệu khẳng định Cách mạng tháng Tám thành công ở Hà Nội đã làm giảm hẳn các tệ nạn xã hội.",
      "d. Đoạn tư liệu phản ánh thái độ ngoan cố, chống đối và quyết tâm duy trì chế độ thống trị của quân phiệt Nhật Bản.",
    ],
    answer: [1, 2],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Bảo Đại đọc xong [Chiếu thoái vị] thì trên kì đài cờ vàng của nhà vua từ từ hạ xuống và lá cờ nền đỏ thắm tươi long lanh năm cánh sao vàng được kéo lên giữa những tiếng vỗ tay, những tiếng hoan hô như sấm… Rồi ông Trần Huy Liệu đọc bản tuyên bố của Đoàn đại biểu Chính phủ, nêu rõ thắng lợi của Cách mạng tháng Tám là kết quả của hàng mấy chục năm đấu tranh anh dũng, kiên cường, bền bỉ của nhân dân cả nước, tuyên bố chấm dứt vĩnh viễn chế độ quân chủ…”.</i> (Phạm Khắc Hòe, Từ triều đình Huế đến chiến khu Việt Bắc, NXB Thuận Hóa, Huế, 1987, tr.86)",
    options: [
      "a. Sự kiện vua Bảo Đại đọc chiếu thoái vị, trao ấn, kiếm cho chính quyền cách mạng đã đánh dấu chấm dứt sự tồn tại của chế độ phong kiến ở Việt Nam.",
      "b. Cách mạng tháng Tám năm 1945, đã chấm dứt vĩnh viễn chế độ quân chủ chuyên chế ở Việt Nam tồn tại 4.000 năm.",
      "c. Cách mạng tháng Tám năm 1945 ở Việt Nam thắng lợi là kết quả của quá trình chuẩn bị lực lượng suốt 15 năm dưới sự lãnh đạo của Đảng Cộng sản Đông Dương.",
      "d. Cách mạng tháng Tám năm 1945 ở Việt Nam thành công đã chấm dứt hoàn toàn cuộc kháng chiến chống Pháp.",
    ],
    answer: [0, 2],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Chủ trương của Việt Nam độc lập đồng minh - chủ trương liên hiệp hết thảy các tầng lớp nhân dân không phân biệt tôn giáo, đảng phái, xu hướng chính trị nào, giai cấp nào, đoàn kết chiến đấu để đánh đuổi Pháp - Nhật giành quyền độc lập cho xứ sở. Việt Nam độc lập đồng minh lại còn hết sức giúp đỡ cho Ai Lao độc lập đồng minh và Cao Miên độc lập đồng minh”.</i> (Đảng Cộng Sản Việt Nam (2000), Văn kiện Đảng toàn tập, Tập 7, NXB Chính trị Quốc gia, Hà Nội, tr.149-150)",
    options: [
      "a. Việt Nam độc lập đồng minh chủ trương liên hiệp tất cả các tầng lớp nhân dân để đánh đuổi thực dân Pháp và phát xít Nhật.",
      "b. Chủ trương của Việt Nam độc lập đồng minh không phân biệt tầng lớp, tôn giáo hay xu hướng chính trị nhằm đạt được sự đoàn kết toàn diện.",
      "c. Việc liên hiệp các tầng lớp nhân dân trong chủ trương của Việt Minh đã tạo nên sự hỗn loạn và khó khăn trong việc quản lý và lãnh đạo phong trào độc lập.",
      "d. Chủ trương giúp đỡ Ai Lao và Cao Miên độc lập đồng minh của Việt Minh là một hành động không có lợi ích chiến lược cho Việt Nam.",
    ],
    answer: [0, 1],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Cộng đồng ASEAN với ba trụ cột về chính trị-an ninh, kinh tế và văn hóa-xã hội, có mục tiêu bao trùm là xây dựng Hiệp hội thành một tổ chức hợp tác liên Chính phủ liên kết sâu rộng hơn và vững mạnh hơn, nhưng vẫn mở rộng hợp tác với bên ngoài, đồng thời hướng mạnh tới người dân, phục vụ và nâng cao cuộc sống của người dân”.</i> (Học viện Ngoại giao, Việt Nam trong tiến trình hội nhập và phát triển, Nxb. Chính trị quốc gia, Hà Nội, 2009, tr. 393)",
    options: [
      "a. Chính trị - an ninh, kinh tế và văn hóa - xã hội là ba trụ cột của cộng đồng ASEAN.",
      "b. Cộng đồng ASEAN được xây dựng chỉ nhằm mở rộng quan hệ với các nước phát triển.",
      "c. Cộng đồng ASEAN sẽ góp phần đưa các quốc gia thành viên phát triển về mọi mặt.",
      "d. Cộng đồng ASEAN ra đời đánh dấu bước phát triển mới của tổ chức trong khu vực.",
    ],
    answer: [0, 2, 3],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Bước sang thế kỷ XXI, cuộc cạnh tranh quyết liệt giữa các cường quốc trên thế giới diễn ra ngày càng gay gắt nhằm định vị lại trật tự thế giới mới. Riêng đối với khu vực Đông Nam Á, nơi có một Cộng đồng ASEAN đang phát triển mạnh mẽ, thì việc tranh giành ảnh hưởng giữa các nước lớn tại đây trở nên nóng bỏng hơn bao giờ hết. Trong bối cảnh nhiều thay đổi phức tạp đó, các cường quốc đã tìm nhiều phương cách lôi kéo ASEAN vào quỹ đạo chi phối của mình, tạo ra thế kiềm chế lẫn nhau trong tình hình ngày càng phức tạp trong mối quan hệ quốc tế”.</i> (Trần Xuân Hiệp, Cộng đồng ASEAN từ ý tưởng đến hiện thực, Nxb. Thế giới, Hà Nội, 2021, tr. 52)",
    options: [
      "a. Đoạn tư liệu cho thấy ASEAN luôn gặp phải những khó khăn, thách thức từ tình hình thế giới và khu vực.",
      "b. Cộng đồng ASEAN hình thành và phát triển trong bối cảnh các nước lớn trên thế giới đã chấm dứt mọi xung đột, mâu thuẫn.",
      "c. Để tồn tại và phát triển, ASEAN cần phải thích ứng được những biến đổi và tác động từ tình hình khu vực và thế giới.",
      "d. ASEAN cần phải chủ động cân bằng các lợi ích giữa các cường quốc và giữ vững độc lập để duy trì vai trò quan trọng trong trật tự thế giới mới.",
    ],
    answer: [0, 2, 3],
  },
  {
    type: "truefalse",
    q: "Cho đoạn tư liệu sau:<br><i>“Giờ Tổng khởi nghĩa đã đánh. Cơ hội có một cho quân dân Việt Nam vùng dậy giành chính quyền độc lập của nước nhà!... Chúng ta phải hành động cho nhanh với một tinh thần vô cùng quả cảm, vô cùng thận trọng!... Cuộc thắng lợi hoàn toàn nhất định sẽ thuộc về ta”.</i> (Trích Quân lệnh số 1 của Ủy ban khởi nghĩa toàn quốc)",
    options: [
      "a. Đoạn tư liệu phản ánh chủ trương của Đảng Cộng sản Đông Dương trong việc lãnh đạo nhân dân khởi nghĩa giành chính quyền về tay nhân dân.",
      "b. Đoạn tư liệu phản ánh thời cơ tổng khởi nghĩa giành chính quyền về tay nhân dân chưa đến.",
      "c. Bản Quân lệnh số 1 do đồng chí Trần Huy Liệu soạn thảo và kêu gọi toàn dân thực hiện.",
      "d. Với việc ban bố bản Quân lệnh số 1, Tổng khởi nghĩa giành chính quyền chính thức được phát động trên cả nước.",
    ],
    answer: [0, 3],
  },
  {
    type: "truefalse",
    q: "Đọc đoạn tư liệu sau đây:<br><b>Tư liệu 1:</b> <i>“Vấn đề Biển Đông, biến đổi khí hậu, quản trị lưu vực sông Mê Công đang là những thách thức hàng đầu đe doạ sự ổn định và phát triển của Cộng đồng ASEAN nói riêng và Đông Nam Á nói chung. Các thách thức này có tính khu vực, đòi hỏi sự hợp tác chặt chẽ giữa quốc gia ASEAN và giữa ASEAN với đối tác bên ngoài.”</i><br><b>Tư liệu 2:</b> <i>“Để hiện thực hóa AEC, nhiều hiệp định, thoả thuận, sáng kiến đã được đàm phán, ký kết và thực hiện, như Hiệp định Thương mại hàng hóa ASEAN (ATIGA), Hiệp định khung về dịch vụ ASEAN (AFAS), Hiệp định đầu tư toàn diện ASEAN (ACIA).... nhằm tạo ra dòng luân chuyển tự do của hàng hóa, dịch vụ, đầu tư và lao động trong khối ASEAN.”</i> (Sách giáo khoa Lịch sử 12, bộ Cánh diều, trang 22, 25)",
    options: [
      "a. Tư liệu 1 nói về những thách thức mà ASEAN đang phải đối mặt hiện nay.",
      "b. Tư liệu 2 nói về cách thức giải quyết những thách thức nêu ra ở tư liệu 1.",
      "c. Tư liệu 2 nói về AEC, đây là một trong ba trụ cột của Cộng đồng ASEAN.",
      "d. Để xây dựng Cộng đồng ASEAN, cần hợp tác chặt chẽ giữa các quốc gia thành viên và với bên ngoài.",
    ],
    answer: [0, 2, 3],
  },
  {
    type: "truefalse",
    q: "Đọc đoạn tư liệu sau đây:<br><i>“Có thể nói, bằng những nỗ lực không ngừng nghỉ của các quốc gia thành viên ASEAN, đã góp phần kiến tạo nên một Đông Nam Á hòa bình, ổn định. Đây sẽ là một tiền lệ tốt cho các nước thành viên ASEAN trong quy cách ứng xử với các xung đột nảy sinh, lan tỏa giá trị hòa bình, hòa hợp trong tất cả các nước cùng chia sẻ lợi ích chung. Mặc dù còn những bất đồng chưa thể giải quyết triệt để, song những gì mà ASEAN làm được trong những năm đầu tiên sẽ đặt nền móng vững chắc để tiến tới xây dựng một cộng động phát triển thịnh vượng trong tương lai”.</i><br>(Trần Xuân Hiệp, Cộng đồng ASEAN từ ý tưởng đến hiện thực, Nxb. Thế giới, Hà Nội, 2021, tr. 24)",
    options: [
      "a. Đoạn tư liệu cho thấy triển vọng tốt đẹp trong việc xây dựng Cộng đồng ASEAN phát triển thịnh vượng nhất hiện nay.",
      "b. Xây dựng Cộng đồng ASEAN là một trong những biện pháp nhằm ngăn chặn sự ảnh hưởng của các cường quốc đối với khu vực.",
      "c. Các quốc gia thành viên đã có những đóng góp quan trọng trong tiến trình hình thành và phát triển của Cộng đồng ASEAN.",
      "d. Trong quá trình tồn tại và phát triển Cộng đồng ASEAN đã từng bước vượt qua mọi khó khăn, thử thách từ khu vực và thế giới.",
    ],
    answer: [0, 2, 3],
  },
];
