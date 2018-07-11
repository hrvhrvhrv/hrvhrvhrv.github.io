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
-- Table structure for table `tbl_searches`
--

DROP TABLE IF EXISTS `tbl_searches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_searches` (
  `search_id` int(11) NOT NULL AUTO_INCREMENT,
  `search_term` varchar(32) NOT NULL,
  PRIMARY KEY (`search_id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_searches`
--

LOCK TABLES `tbl_searches` WRITE;
/*!40000 ALTER TABLE `tbl_searches` DISABLE KEYS */;
INSERT INTO `tbl_searches` VALUES (1,'Array'),(2,'Array'),(3,'phone'),(4,'phone'),(5,'cars'),(6,'sega'),(7,'phone'),(8,'gamepad'),(9,'gamepad'),(10,'tv'),(11,'laptop'),(12,'laptop'),(13,'phone'),(14,'phone'),(15,'phone'),(16,'phone'),(17,'phone'),(18,'phone'),(19,'phone'),(20,'phone'),(21,'a'),(22,'a'),(23,'a'),(24,'phone'),(25,'phone'),(26,'phone'),(27,'phone'),(28,'phone'),(29,'phone'),(30,'phone'),(31,'a'),(32,'a'),(33,'phone'),(34,'phone'),(35,'phone'),(36,'phone'),(37,'phone'),(38,'phone'),(39,'phone'),(40,'phone'),(41,'phone'),(42,'phone'),(43,'phone'),(44,'phone'),(45,'phone'),(46,'phone'),(47,'phone'),(48,'phone'),(49,'phone'),(50,'phone'),(51,'car'),(52,'car'),(53,'phone'),(54,'phone'),(55,'<hR>phone'),(56,'<hR>phone'),(57,'        cat'),(58,'        cat'),(59,'!phone'),(60,'!phone'),(61,'<h1>car</h1>'),(62,'<h1>car</h1>'),(63,'<h1>car</h1>'),(64,'<h1>'),(65,'<h1>'),(66,'a'),(67,'a'),(68,'phone'),(69,'phone'),(70,'<h1>phone</h1>'),(71,'<h1>phone</h1>'),(72,'car'),(73,'car'),(74,'car'),(75,'phone'),(76,'phone'),(77,'car'),(78,'car'),(79,'car'),(80,'phone'),(81,'phone'),(82,'<h1>phone</h1>'),(83,'<h1>phone</h1>'),(84,'<h1>phone</h1>'),(85,'<h1>phone</h1>'),(86,'<h1>phone</h1>'),(87,'<h1>phone</h1>'),(88,'phone'),(89,'phone'),(90,'<h1>phone</h1>'),(91,'<h1>phone</h1>'),(92,'<h1>phone</h1>'),(93,'<h1>phone</h1>'),(94,'<h1>phone</h1>'),(95,'phone'),(96,'phone'),(97,'phone'),(98,'phone');
/*!40000 ALTER TABLE `tbl_searches` ENABLE KEYS */;
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
