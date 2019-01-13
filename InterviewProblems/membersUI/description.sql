-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2019 at 06:27 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `members`
--

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `last_name` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `town` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`last_name`, `first_name`, `email_address`, `position`, `town`) VALUES
('Gardner', 'Michael', 'michael.gardner@ippsecpro.com', 'CTO & Co-Founder', 'Troy'),
('Shulman', 'Alexander', 'alexander.shulman@ippsecpro.com', 'CEO & Co-Founder', 'Boston'),
('Volk', 'Ben', 'ben.volk@ippsecpro.com', 'CEO & Co-Founder', 'Boston'),
('Gardner', 'Michael', 'michael.gardner@ippsecpro.com', 'lead architect', 'Troy'),
('Kloss', 'Peter', 'peter.kloss@ippsecpro.com', 'COO', 'Framingham'),
('McCurry', 'Peter', 'peter.mccurry@ippsecpro.com', 'android developer', 'Troy'),
('Giron', 'Paulina', 'Paulina.Giron@ippsecpro.com', 'CMO', 'Boston'),
('undefined', 'test', 'undefined', 'undefined', 'undefined'),
('undefined', 'test', 'undefined', 'undefined', 'undefined'),
('test', 'test', 'test', 'test', 'test'),
('', 'Travis', 'ptravis765@gmail.com', '', 'Stony Point'),
('Peterson', 'Travis', 'ptravis765@gmail.com', 'Assistant', 'Stony Point'),
('Peterson', 'Travis', 'ptravis765@gmail.com', '', 'Stony Point');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
