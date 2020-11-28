-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: 35.242.165.143    Database: projects_database
-- ------------------------------------------------------
-- Server version	5.7.25-google-log

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='43266f45-2686-11eb-9e25-42010a9a0fe6:1-35258';

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `booking_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'Donald','Trump','donald.trump@outlook.com','2020-11-14 16:14:22'),(2,'Barack','Obama','b.o@outlook.com','2020-11-14 16:17:42'),(3,'Joe','Biden','j.b@outlook.com','2020-11-14 16:17:42'),(4,'Boris','Jhonnson','b.j@outlook.com','2020-11-15 17:23:36'),(5,'Boris','Jhonnson','b.j@outlook.com','2020-11-15 17:26:01'),(6,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 16:44:57'),(7,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 16:47:32'),(8,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 17:08:53'),(9,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 17:11:49'),(10,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 17:13:35'),(11,'Boris','Jhonnson','b.j@outlook.com','2020-11-18 17:38:00'),(12,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 15:43:07'),(13,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 16:26:03'),(14,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 16:34:06'),(15,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 16:53:13'),(16,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 17:34:14'),(17,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 17:35:56'),(18,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 17:38:14'),(19,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 17:39:44'),(20,'Boris','Jhonnson','b.j@outlook.com','2020-11-21 17:41:57'),(21,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 16:46:32'),(22,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 16:47:27'),(23,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 16:53:31'),(24,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 16:56:30'),(25,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 16:58:08'),(26,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 17:07:54'),(27,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 17:09:39'),(28,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 17:12:57'),(29,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 17:13:04'),(30,'Boris','Jhonnson','b.j@outlook.com','2020-11-22 17:15:15'),(31,'Giovanni','Barrista','g.b.j@outlook.com','2020-11-22 18:09:44'),(32,'Giovanni','Battista','g.b.j@outlook.com','2020-11-22 18:10:18'),(33,'Giovanni','Battista','g.b.j@outlook.com','2020-11-22 18:17:39'),(34,'Giovanni','Battista','g.b.j@outlook.com','2020-11-23 19:34:21'),(35,'Giovanni','Battista','g.b.j@outlook.com','2020-11-23 19:44:23');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-23 19:51:06
