CREATE DATABASE IF NOT EXISTS `sht` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sht`;

-- 테이블 sht.apply_alert1 구조 내보내기
CREATE TABLE IF NOT EXISTS `apply_alert2` (
  `season` varchar(50) DEFAULT NULL,
  `month` varchar(50) DEFAULT NULL,
  `support_area` varchar(100) DEFAULT NULL,
  `residential_area1` varchar(100) DEFAULT NULL,
  `residential_area2` varchar(100) DEFAULT NULL,
  `period` int(11) DEFAULT NULL,
  `applicable` int(10) unsigned DEFAULT NULL,
  `inapplicable` int(10) unsigned DEFAULT NULL,
  `etc` int(11) DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 sht.apply_alert1:~18 rows (대략적) 내보내기
/*!40000 ALTER TABLE `apply_alert1` DISABLE KEYS */;
INSERT INTO `apply_alert2` (`season`, `month`, `support_area`, `residential_area1`, `residential_area2`, `period`, `applicable`, `inapplicable`, `etc`, `start`, `end`) VALUES
	('4차', '12월', '동작구수방사', '서울특별시', '', 24, 140, 0, 0, NULL, NULL),
	('4차', '12월', '남양주왕숙2', '경기도', '남양주시', 12, 147, 98, 245, NULL, NULL),
	('2차', '10월', '군포대야미', '경기도', '군포시', 24, 700, 0, 0, NULL, NULL),
	('2차', '10월', '성남낙생', '경기도', '성남시', 24, 630, 0, 0, NULL, NULL),
	('2차', '10월', '성남복정2', '경기도', '성남시', 24, 420, 0, 0, NULL, NULL),
	('2차', '10월', '의왕월암', '경기도', '의왕시', 24, 560, 0, 0, NULL, NULL),
	('2차', '10월', '수원당수', '경기도', '수원시', 24, 105, 70, 175, NULL, NULL),
	('2차', '10월', '부천원종', '경기도', '부천시', 24, 280, 0, 0, NULL, NULL),
	('3차', '11월', '시흥하중', '경기도', '시흥시', 24, 490, 0, 0, NULL, NULL),
	('3차', '11월', '과천주암', '경기도', '과천시', 24, 980, 0, 0, NULL, NULL),
	('4차', '12월', '성남금토', '경기도', '성남시', 24, 490, 0, 0, NULL, NULL),
	('4차', '12월', '부천대장', '경기도', '부천시', 24, 210, 140, 350, NULL, NULL),
	('4차', '12월', '고양창릉', '경기도', '고양시', 24, 126, 84, 210, NULL, NULL),
	('4차', '12월', '부천역곡', '경기도', '부천시', 24, 189, 126, 315, NULL, NULL),
	('4차', '12월', '시흥거모', '경기도', '시흥시', 24, 168, 112, 280, NULL, NULL),
	('4차', '12월', '안산장상', '경기도', '안산시', 24, 63, 42, 105, NULL, NULL),
	('4차', '12월', '구리갈매역세권', '경기도', '구리시', 24, 231, 154, 385, NULL, NULL),
	('4차', '12월', '안산신길2', '경기도', '안산시', 24, 126, 84, 210, NULL, NULL),
	('본청약', '8월', '과천지식정보타운', '경기도', '과천시', 24, 48, 31, 78, NULL, NULL);
/*!40000 ALTER TABLE `apply_alert1` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
