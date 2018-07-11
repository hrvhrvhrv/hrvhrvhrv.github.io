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
-- Table structure for table `tbl_login`
--

DROP TABLE IF EXISTS `tbl_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_login` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(32) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_firstName` varchar(32) DEFAULT NULL,
  `user_lastName` varchar(32) DEFAULT NULL,
  `user_location` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_login`
--

LOCK TABLES `tbl_login` WRITE;
/*!40000 ALTER TABLE `tbl_login` DISABLE KEYS */;
INSERT INTO `tbl_login` VALUES (1,'craig.harvey.18@gmail.com','$2y$10$mcP6WpDYnyoD92jemu1XyOmZ2HAn/cQN6BFd5ezY/heckULsGeRE6','Craig','Harvey','Glasgow'),(2,'admin@admin.admin','$2y$10$4vYpnWQtol2h.n8dExpElu0ZJlUv7mNnYkCqHeayD1IlufE8RqJK.','admin','admin','adminLand'),(7,'steven@aitken.com','$2y$10$fNyi.rf8.t73J1nwuZb0Zena73y9pT2VatIdLnM.FBsjSWUBqjPjS','Steven','Aitken','Glasgow'),(8,'a@a.com','$2y$10$RSqpV1dwKTFeCDy9jra16uxn6NlWJN1EU6cGYjHbWtLSrI.mTtwmq','Duncan ','Shearer','Aberdeen'),(9,'m@c.com','$2y$10$Tt8DbLlXc7ZA6mzcEketGeiPg8W7/5FpT8dAoXAd8.F0FGWB8PTe.','Michelle','Campbell','Glasgow'),(10,'m@c.com','$2y$10$aoO.BgXwPLwAQGBmX87equjECjD/0ZcrZy6LgbJtm/IuDnNtylQCq','Michelle','Campbell','France'),(11,'m@c.com','$2y$10$B3eY.cyxxUULLwoLnRhcYOh1rZT62PIHvOQWfKbMFfu6N28Rk6J.u','Michelle','Campbell','Glasgow'),(12,'craig.harvey.18@gmail.com','$2y$10$nyhoiFSfir9R.sBrcfi4d.XYV4JJL7HLji.AVGmc5rLgbLMg1T3aq','Craig','Harvey','Dundee'),(14,'admin@admin.admin',NULL,NULL,NULL,NULL),(15,'email@email.com','$2y$10$3NRGDZM/YiSG/ADdGU440OZvPYJQK0EDbm.pXk5Xrc965wIoI0A1C','Craig','Harvey','aberdeen'),(16,'password@password.com','$2y$10$FKt2kL3.j7ujnk3AwIxhxOhNM7q2adM13Q4PV32./c9FIR5nI1MJ.','<h1>Craig</h1>','Harvey','france'),(17,'billy@email.com','$2y$10$zEn2qIEk.f38QfM10EsXnOsc.WROQDmHCDDSkEHSrXhfhwg44CIv2','Billy','harvey','aberdeen'),(18,'jim@bob.com','$2y$10$qBtHFoyUVZpVPtBtHmRYfOanTE2zkBZXhQAzG5xojS83T5XLvgXm2','jim','bob','non'),(19,'test@test.test','$2y$10$Vwt4bDKq5Xyf4diD6PlA/.FaUJMmMoGfQJykj7fVe1PqecNYHZkSS','Craig','bob','non');
/*!40000 ALTER TABLE `tbl_login` ENABLE KEYS */;
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
