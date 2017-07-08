-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-23 03:15:11
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `douban`
--

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` text NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `label`, `text`) VALUES
(1, '这里是第一条评论的标签', '这里是第一条评论的内容'),
(2, '123', '123456'),
(3, '', '没什么好看的'),
(4, '', '啊啊啊啊啊啊'),
(5, '', '123123123'),
(6, '', '这里是新的评论信息'),
(7, '', '123123123123123'),
(8, '', '这里是评论内容啊     啊啊啊啊啊 \n');

-- --------------------------------------------------------

--
-- 表的结构 `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET utf8 NOT NULL,
  `password` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COMMENT='这是一个用户存信息储表' AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `data`
--

INSERT INTO `data` (`id`, `username`, `password`) VALUES
(1, '123', '123'),
(2, '123456789', '123456789'),
(3, '13691466552', 'fLy218205550490'),
(5, '1102189281', '1102189281'),
(6, '123456', '123456'),
(7, 'qwerasdf', 'qwerasdf'),
(8, '1111111', '111111'),
(9, 'aaaaaa', 'aaaaaa'),
(10, 'gggggg', 'gggggg'),
(15, '', ''),
(16, '', ''),
(17, '', ''),
(18, '', ''),
(19, 'abc', '1234'),
(20, 'fyl9527', '123321');

-- --------------------------------------------------------

--
-- 表的结构 `findmovie`
--

CREATE TABLE IF NOT EXISTS `findmovie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` char(6) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='这是一个发现好电影的表' AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `findmovie`
--

INSERT INTO `findmovie` (`id`, `color`, `content`) VALUES
(1, '#FF405', '同时入选IMDB250和豆瓣电影250的电影'),
(2, '#FFAC2', '带你进入不正常的世界'),
(3, '#FF405', '用电【影】来祭奠逝去的岁月'),
(4, '#FF405', '女孩们的故事【电影】'),
(5, '#4F9DE', '科幻是未来的钥匙——科幻启示录【科幻题材】'),
(6, '#3BA94', '美国生活面面观'),
(7, '#4678E', '经典韩国电影——收集100部'),
(8, '#42BD5', '2015终极期待');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
