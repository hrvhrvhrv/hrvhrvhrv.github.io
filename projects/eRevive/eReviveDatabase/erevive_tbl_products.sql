-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: erevive
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_products`
--

DROP TABLE IF EXISTS `tbl_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_products` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(32) NOT NULL,
  `prod_brand` varchar(32) NOT NULL,
  `prod_desc` varchar(500) NOT NULL,
  `prod_age` int(11) NOT NULL,
  `prod_category` varchar(32) NOT NULL,
  `prod_price` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_products`
--

LOCK TABLES `tbl_products` WRITE;
/*!40000 ALTER TABLE `tbl_products` DISABLE KEYS */;
INSERT INTO `tbl_products` VALUES (18,'iphone 5C','Dell','iphone description]\r\n',10,'phone',322,2),(19,'Smart 4K Ultra HD TV','Samsung','This is the description for a tv',1,'tv',900,3),(20,'HD TV ','LG','This is the description for a tv',4,'tv',100,4),(21,'Smart HD TV','Panasonic','This is the description for a tv',3,'tv',200,2),(22,'Smart HD TV','Sony','This is the description for a tv',7,'tv',50,2),(23,'Sony Cybershot','Sony','This is the description for a camera',2,'tablet',40,1),(24,'Lumix DMC','Panasonic','This is the description for a camera',3,'camera-retro',125,2),(25,'3DO','Panasonic','This is the description for a games station',10,'gamepad',200,3),(26,'N64','Nintendo','This is the description for a games station',12,'gamepad',300,4),(27,'Mega Drive','Sega','This is the description for a video game',20,'gamepad',475,1),(28,'PS3','Sony','This is the description for a video game',8,'gamepad',248,1),(29,'iphone X','Apple','this is a description for a phone',1,'phone',800,1),(30,'iphone 6+','Apple','this is a description for a phone',3,'phone',400,2),(32,'asd','Amiga','adsfsaf',21,'phone',1234,2),(33,'G6','Samsung','this is a description for a radio',7,'music',50,2),(34,'PS4','Sony','this is a description of a ps4\r\n',1,'gamepad',256,1),(35,'Pan590','Panasonic','This is a description for a laptop',4,'laptop',86,1),(36,'gameboy','Nintendo','This is a description for a gameboy',15,'gamepad',35,7),(37,'1200','Amiga','this is a description for a computer',24,'gamepad',350,2);
/*!40000 ALTER TABLE `tbl_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-19 13:49:26
