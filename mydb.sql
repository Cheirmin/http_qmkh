-- phpMyAdmin SQL Dump
-- version 4.8.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-05-19 15:50:53
-- 服务器版本： 5.6.38-log
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- 表的结构 `t_books_info`
--

CREATE TABLE `t_books_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `book_id` int(11) UNSIGNED NOT NULL,
  `book_name` varchar(50) NOT NULL,
  `book_summary` text NOT NULL,
  `kind_id` int(11) NOT NULL,
  `lend_id` int(11) DEFAULT NULL,
  `lend_time` timestamp NULL DEFAULT NULL,
  `creator` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `deleter` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `t_books_info`
--

INSERT INTO `t_books_info` (`id`, `book_id`, `book_name`, `book_summary`, `kind_id`, `lend_id`, `lend_time`, `creator`, `updater`, `deleter`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1000010000, '《倾城之恋》', '传奇里的倾国倾城的人大抵如此。\r\n\r\n到处都是传奇，可不见得有这么圆满的收场。胡琴咿咿哑哑拉着，在万盏灯的夜晚，拉过来又拉过去，说不尽的苍凉的故事——不问也罢！\r\n\r\n《倾城之恋》是张爱玲的成名作与代表作。白流苏和范柳原这一对现实庸俗的男女，在战争的兵荒马乱之中被命运掷骰子般地掷到了一起，于“一刹那”体会到了“一对平凡的夫妻”之间的“一点真心”。\r\n\r\n张爱玲是作为中国现代文学史上的一位杰出作家，而不是作为一个怪人、异人而存在的。也许她将不仅仅属于现代文学史。遥想几十年、几百年后，她会像她欣赏的李清照一样，在整个中国文学史上占据一个稳定的位置也说不定，而我们知道，那时候今天为我们所熟知的许多现代作家肯定都将被忽略不计了。\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n第一章 ：他的情妇\r\n\r\n \r\n    从法国到北京八千多公里，从北京首都机场到*四十五分钟，一百二十元。\r\n\r\n    那一个人从云端到泥泞，需要多少的时间？\r\n\r\n    我恨不得一天有一百个小时可以麻醉我自已，让我认不出我的名字，认不出我的姓。\r\n\r\n    可是驾驶证却还是触目可及，一张平静而又不会笑的脸，一个好听的名字，陌千寻。\r\n\r\n    这个城市熟悉得让我心痛，但是我却还不舍得离开这个城市。\r\n\r\n    空车上了山道，扑面而来的清绿色还是让我沉默着，警卫员示意我停车，指着未经允许不得闯入的牌子让我看。\r\n\r\n    我捏着手机下车：“我去乔府。”取了身份证给他们看，一个警卫员走过来看了眼，笑道：“哦，是陌小姐，今儿个早上大宅那边打电话过来说陌小姐会来，放行吧。怎么不懂事儿呢，陌小姐的身份证你们也查。”\r\n\r\n    “不登记了吗？”\r\n\r\n    “登什么记，陌小姐可是乔少爷的未婚妻。陌小姐快进去吧，夫人早些时候已经回来了。”\r\n\r\n    开着我的破夏利，在别人异样的眼光开了进去，乔府门前已经摆满了各种昂贵的名车，我的夏利出租车停挤在哪儿，就像是个小丑。\r\n\r\n    就如我的人生，也是一个小丑。\r\n\r\n    那早守在花园口的朴奶妈寡着一张脸说：“陌小姐，你跟我从后门走吧，前面宾客多，夫人说别丢了乔府的面子。”\r\n\r\n    我笑笑地跟随而去，一直上了楼梯她站在扶手边说：“陌小姐，夫人应该在少爷房里。”\r\n\r\n    “是。”\r\n\r\n    上了阶梯往左一直走，是乔东城的房间。\r\n\r\n    门推了条缝，女人的声音娇滴滴地传了出来：“东城，我穿这个衣服好看吗？”\r\n\r\n    只需要微一侧目，就能看到漂亮精致的女子拿着一套宝蓝色的低胸裙对一个背对着我穿上衣的男人说话。\r\n\r\n    她身上只着了内衣裤，越发显得身段惹火。\r\n\r\n    我知道她是谁，著名的某主持人，经常在电视里看到端庄漂亮的她，而她却是我未婚夫的情妇。\r\n\r\n    大床被子凌乱，用脚趾头想也知道发生过什么事。\r\n\r\n    “东城，这可怎么办呢，人家全身现在都没有力气了，一会儿开场舞要是跳得不好可丢脸来着了。”声音娇酥得让我听了也骨头软软的。\r\n\r\n    我礼貌地合上房门，看到长廊边乔夫人似笑非笑的表情。\r\n\r\n    我颔首点头：“乔夫人。”\r\n\r\n    “今儿个是东城的生日，我倒也不知他叫了朋友来，……千寻。”她别有深意地叫我的名字。\r\n\r\n    我笑着说：“乔夫人，我今天也挺忙的，替我跟他说一声生日快乐。”\r\n\r\n    她拧着眉，不怎么高兴地看着地毯，雪白的地毯让我踩出一些黑痕，我低下头将鞋子脱了提在手上：“乔夫人，我先去忙了，再见。”\r\n\r\n    她客气地说：“你慢走，明儿个我再打电话给你。”\r\n\r\n    “奶妈，奶妈。”背后她声音冷淡：“把地毯换了吧，都踩脏了别让客人看了失礼。”', 2, NULL, NULL, NULL, NULL, NULL, '2018-05-09 11:52:40', '2018-05-09 11:52:40', NULL),
(2, 1000010001, '不知道', '没有描述', 1, NULL, NULL, NULL, NULL, NULL, '2018-05-09 12:27:28', '2018-05-09 12:27:28', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `t_book_kind_info`
--

CREATE TABLE `t_book_kind_info` (
  `id` int(10) NOT NULL,
  `kind_name` varchar(255) NOT NULL,
  `creator` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `deleter` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `t_book_kind_info`
--

INSERT INTO `t_book_kind_info` (`id`, `kind_name`, `creator`, `updater`, `deleter`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '政治', NULL, NULL, NULL, '2018-05-09 11:43:24', '2018-05-09 11:43:24', NULL),
(2, '文学', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(3, '军事', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(4, '经济', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(5, '艺术', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(6, '工业', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(7, '农业', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(8, '科技', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(9, '生物学', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(10, '环境安全学', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(11, '儿童读物', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(12, '历史地理', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL),
(13, '其他', NULL, NULL, NULL, '2018-05-09 11:43:26', '2018-05-09 11:43:26', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `t_role_info`
--

CREATE TABLE `t_role_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_permission` text NOT NULL,
  `creator` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `deleter` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

--
-- 转存表中的数据 `t_role_info`
--

INSERT INTO `t_role_info` (`id`, `role_name`, `role_permission`, `creator`, `updater`, `deleter`, `created_at`, `updated_at`, `deleted_at`) VALUES
(0, '管理员', '0', NULL, NULL, NULL, '2018-05-09 11:37:21', '2018-05-09 11:37:21', NULL),
(1, '普通用户', '1', NULL, NULL, NULL, '2018-05-09 11:36:34', '2018-05-09 11:36:34', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `t_users_info`
--

CREATE TABLE `t_users_info` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(11) NOT NULL COMMENT '学号',
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `my_lend` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '我借的书本',
  `creator` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `updater` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `deleter` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `t_users_info`
--

INSERT INTO `t_users_info` (`id`, `user_id`, `user_name`, `password`, `role_id`, `email`, `my_lend`, `creator`, `updater`, `deleter`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1060, 14164801067, 'Cheirmin', '$2a$10$mVf6gsrTor/vj7RihTynMejPTT0ZJSSAJec1G9xoKIlmdV9iX0Pkm', 0, '1147905069@qq.com', NULL, NULL, NULL, NULL, '2018-05-16 12:05:58', '2018-05-16 12:05:58', NULL),
(1061, 14164801068, '晓明哥', '$2a$10$nOf/DPuNZejBxPwoS0mYru6H7WWWdhWx5fuJap1ZVgW9Bh4RGzGPy', 1, '1147905069@qq.com', NULL, NULL, NULL, NULL, '2018-05-16 12:06:37', '2018-05-16 12:06:37', NULL),
(1076, 14164801069, 'test', '$2a$10$vgwmTyT1SJfoX0/eq/krauQ8qZvyvNo1f/c1A/aNHH6z.q3VI8nIO', 1, '123456@qq.com', NULL, NULL, NULL, NULL, '2018-05-18 15:13:51', '2018-05-18 15:13:51', NULL),
(1077, 14164801070, '骚的一匹', '$2a$10$JPeJfmz0ni9SJcbno9p35OmyBg7Umzu2qXwYM0vynViTTiaqKyuQG', 1, '456@qq.com', NULL, NULL, NULL, NULL, '2018-05-18 15:28:54', '2018-05-18 15:28:54', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, '123456', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_books_info`
--
ALTER TABLE `t_books_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kind_id` (`kind_id`);

--
-- Indexes for table `t_book_kind_info`
--
ALTER TABLE `t_book_kind_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_role_info`
--
ALTER TABLE `t_role_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_users_info`
--
ALTER TABLE `t_users_info`
  ADD PRIMARY KEY (`id`,`role_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `username` (`user_name`),
  ADD KEY `user_id_2` (`user_id`),
  ADD KEY `user_id_3` (`user_id`),
  ADD KEY `username_2` (`user_name`),
  ADD KEY `email` (`email`),
  ADD KEY `role_name_idx` (`role_id`),
  ADD KEY `my_rent` (`my_lend`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `t_books_info`
--
ALTER TABLE `t_books_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `t_book_kind_info`
--
ALTER TABLE `t_book_kind_info`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- 使用表AUTO_INCREMENT `t_role_info`
--
ALTER TABLE `t_role_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `t_users_info`
--
ALTER TABLE `t_users_info`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1078;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 限制导出的表
--

--
-- 限制表 `t_books_info`
--
ALTER TABLE `t_books_info`
  ADD CONSTRAINT `t_books_info_ibfk_1` FOREIGN KEY (`kind_id`) REFERENCES `t_book_kind_info` (`id`);

--
-- 限制表 `t_users_info`
--
ALTER TABLE `t_users_info`
  ADD CONSTRAINT `t_users_info_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `t_role_info` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
