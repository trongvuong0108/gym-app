/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 100425
 Source Host           : localhost:3306
 Source Schema         : gymsystem

 Target Server Type    : MySQL
 Target Server Version : 100425
 File Encoding         : 65001

 Date: 23/11/2022 19:13:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enable` bit(1) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` int NULL DEFAULT NULL,
  `type_account` int NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`account_id`) USING BTREE,
  UNIQUE INDEX `UK_gex1lmaqpg0ir5g1f5eftyaa1`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of account
-- ----------------------------
BEGIN;
INSERT INTO `account` (`account_id`, `email`, `enable`, `password`, `phone`, `role`, `type_account`, `username`) VALUES (1, 'tronghandsome1111@gmail.com', b'1', '$2a$10$PmzPEBAheF9.M75m8qTUpO9jxBttX1lPnU4zdweWS6RTKgOTUI5hO', '123123123', 0, 0, 'user2'), (2, 'tronghandsome1111@gmail.com', b'1', '$2a$10$cxAqi0fkcRUNCT3AnKmuku0.HU.CRrXEe848zVMQiNJhvKhFbf9hC', '123123', 0, 0, 'user3'), (3, 'tronghandsome1111@gmail.com', b'1', '$2a$10$.CXDcGMPDAFgB3BmP4oTCOxmlXkds.XXerVXRxRIECb2PM8rZK7KO', '123123', 1, 0, 'pt1'), (7, 'tronghandsome1111@gmail.com', b'1', '$2a$10$7TDlar980o4IOuCqmVctrurTP9pNg5jbQl.Q8bCLrctOirbeq3C/O', '123123', 1, 0, 'pt2'), (8, 'tronghandsome1111@gmail.com', b'1', '$2a$12$.HKtvoyscmS5q75BOlRUjODC8qFFxBawMTMFkiF1OLrlKnFSzEehW', '123213123321312321312', 0, 1, 'tronghandsome1111@gmail.com'), (9, 'tronghandsome1111@gmail.com', b'1', '$2a$10$PmzPEBAheF9.M75m8qTUpO9jxBttX1lPnU4zdweWS6RTKgOTUI5hO', '123123', 2, 0, 'admin'), (10, 'tronghandsome1111@gmail.com', b'1', '$2a$10$y0JbKu6DlH7fTIuVfp6iVOJ/POufz59bE.4rb3fSdHaMpGxtWeg5u', '123123', 0, 0, 'user123'), (11, 'tronghandsome1111@gmail.com', b'1', '$2a$10$VWe0oyV3s8UUGsRUnMChAebi73Qedt1IYkL82cAu.JYrZsPO0NdeG', '12313', 1, 0, 'pt123'), (13, 'tronghandsome1111@gmail.com', b'1', '$2a$10$WfHbpVFJt.uc3xX6rgwvBu/v7Ks2tEN4eet6x2Pq9t1fWFFLN35nC', '123123', 1, 0, 'pt1234'), (14, 'tronghandsome1111@gmail.com', b'1', '$2a$10$w5VwLbpU6Tr9to1Pp3qOk.e8GOkUWfPrmPTFImGddlCeiCS77p9.q', '123123', 1, 0, 'pt123123'), (15, 'tronghandsome1111@gmail.com', b'1', '$2a$10$PmzPEBAheF9.M75m8qTUpO9jxBttX1lPnU4zdweWS6RTKgOTUI5hO', '12313', 1, 0, 'ptkhang'), (16, 'tronghandsome1111@gmail.com', b'1', '$2a$10$kysmVgteFBL4g.br/XjWKOtUGnEEDzORRpumKstfL.S6rAhwb/ep.', '1231321223', 0, 0, 'trongdz123'), (18, 'tronghandsome1111@gmail.com', b'1', '$2a$10$ZLPhycOYe/YCbjNB.yd/d.oYRn/W1O6Tmk2lFeluxP7lh1UNx4MXu', '1231321223', 0, 0, 'trongdz1234'), (19, 'tronghandsome1111@gmail.com', b'1', '$2a$10$wFOT/IOWifVMEu8F61YVquz63HzH0oDjogMa0YIzR4iKbHX9ny4Yu', '1231321223', 0, 0, 'trongdz12345'), (20, 'tronghandsome1111@gmail.com', b'1', '$2a$10$lIlbLF6IHnGP46qFvobxOOKEbqi8uOKLy8kwA3DekRfC4s.ZEWDjW', '1231321223', 0, 0, 'trong123'), (21, 'tronghandsome1111@gmail.com', b'1', '$2a$10$sDDi5XKkTfRd/6dmhTQfbOmHFa4h/Gp/KIOCSPBZcSxtkk3VffPS2', '1231321223', 0, 0, 'trong1234'), (22, 'tronghandsome1111@gmail.com', b'1', '$2a$10$OVrs5AREHIh3pLo5XKWTb.Q//08j/Y6Wu7sPaJ2ZvFFoKNl3gLHQ6', '123123', 0, 0, 'trongdz1'), (24, 'tronghandsome1111@gmail.com', b'1', '$2a$10$PKyV780/6BidszuQWxX9LuuniMRlXQf/uGUyZAx4bx5vnarxwcf6K', '123123', 0, 0, 'trongdz2'), (25, 'tronghandsome1111@gmail.com', b'1', '$2a$10$xXskaq7PBahDQ8GY2WtQNesHYq6uwO0VCww.fP59FWpsMxvvLb7pG', '123123', 0, 0, 'trongdz3'), (26, 'tronghandsome1111@gmail.com', b'1', '$2a$10$l73xsgP/E7RY/DSr1Q3hQ.wtxNYcD1pCQKXBiCjemWztemwbLR7za', '123123', 0, 0, 'trongdz4'), (28, 'tronghandsome1111@gmail.com', b'1', '$2a$10$i3NhiYszA7QI.k.GldulD.j9al7gL0Bsscwfo0Nl.ym2ygPHYWhdq', '123123', 0, 0, 'trongdz5'), (29, 'tronghandsome1111@gmail.com', b'1', '$2a$10$8d9cAf.chRv3L0TPyaxe2.pxp.buQe/4Qv4kzosCPnB01nixz9CSa', '123123123', 0, 0, 'user1'), (30, 'tronghandsome1111@gmail.com', b'1', '$2a$10$F5sl5XN/BhiAayxtj4dRXOQqDjgktZplx.LVf2iNmaWzQ8uyBDgU2', '123123123', 0, 0, 'trongdz222'), (31, 'tronghandsome1111@gmail.com', b'1', '$2a$10$m1pKcNz.lpHtf5nMCBijCu3Yivao5UpI0vLqL2TZnlCBozZvi1KE.', '123123123', 0, 0, 'trongdz333'), (32, 'tronghandsome1111@gmail.com', b'1', '$2a$10$J/HbcjkknVPu8GoUnAx7NOxF.8H9vSonaMHY5agWSgIqU8xEP8gXu', '123123', 0, 0, 'trongdz2222'), (33, 'tronghandsome1111@gmail.com', b'1', '$2a$10$lqUp/1tcYrGIz5SZGDJ2lOaG7tRLP7fmsfT0ngjRLGaHFDrHAU8Um', '321321312', 0, 0, 'trongdz123456'), (34, 'tronghandsome1111@gmail.com', b'1', '$2a$10$wYHDWqieYDhIMAbWS9fTSuRe51.sob3FkuITDwReTjaoSUXJouNvC', '1234567890', 0, 0, 'trongdz123123'), (35, 'tronghandsome1111@gmail.com', b'1', '$2a$10$VqBm1YLEEb0AmPbMmy5NvOt5gkyEwKVZW6ZxaF.TdbRhSiE6e7/O.', '123456789', 0, 0, 'test1'), (36, 'tronghandsome1111@gmail.com', b'1', '$2a$10$Cxu67zqTjge/6cvfAsqM8u3QX8KvRYHCN0zKG9gxc2BmMZtc6RYTO', '123456789', 0, 0, 'test2'), (37, 'tronghandsome1111@gmail.com', b'1', '$2a$10$qGRbDNY2LtwHs7WA4VnZ7ezQkD8o.D.uEYbvc7ojAZUrNrZeavmTS', '123456789', 0, 0, 'test3'), (38, 'tronghandsome1111@gmail.com', b'1', '$2a$10$hYtpytLvxnVFE7C1jUCZU.uq4E.M6qZAoVFkAALADMO62jk3N4x7K', '123123123', 0, 0, 'test4'), (39, 'tronghandsome1111@gmail.com', b'1', '$2a$10$iGLP76qLkkoDc/CmqIeSj.TmHVDT/LPFQGhI3oo/tVO.OI74oP38G', '123123123', 0, 0, 'test5'), (40, 'tronghandsome1111@gmail.com', b'1', '$2a$10$mDI7O9hodY8MoaRQv8cXfOYyFLSRa6UxPcvHAOh21psNR63pjsoga', '123123123', 0, 0, 'test11'), (41, 'tronghandsome1111@gmail.com', b'1', '$2a$10$8UYjzj3SRdohohuK5CguB.CHGJsBX/jVKBXWEIU1hxZSoHVg20V4e', '123123123', 0, 0, 'test12'), (42, 'tronghandsome1111@gmail.com', b'1', '$2a$10$feK50vrLxNXTNEJ7gd.FmeamTCif7B5bcLsJW33Dr3zj3BP2dtk8u', '123123123', 0, 0, 'test222'), (43, 'trongvuong01082001@gmail.com', b'1', '$2a$10$B.5UdSUzuMHrR5/kmEwFB.pHxSmIJZE4LPtH3ZRtSz4URi9zNCq8W', '', 0, 1, 'trongvuong01082001@gmail.com'), (44, 'tronghandsome1111@gmail.com', b'0', '$2a$10$wrk/7/S/NAGxABE6Tb89EuNv6RWoUVaXs5kVyDBBU5FyTsgrPMkUm', '1231123123', 1, 0, 'trainer1'), (46, 'tronghandsome1111@gmail.com', b'0', '$2a$10$aKeh6QNfChmTxg0Y46MO8.ifJRxMPqeTORzQxZMBpmiXBSxCG0jZW', '1231123123', 1, 0, 'trainer2'), (47, 'tronghandsome1111@gmail.com', b'0', '$2a$10$fpKx9afbgNtqXT1YWglQ3OoHuhiXAVqpOZdhGLPpnQrA8DI7mPda.', '1231123123', 1, 0, 'trainer3'), (49, 'tronghandsome1111@gmail.com', b'0', '$2a$10$MpOXXLwT/E9dtLeQ5TRCxeiEYpELfOQ/GLmU75ffzwza7WQGEVmvi', '0123456789', 1, 0, 'trongdz2323'), (51, 'tronghandsome1111@gmail.com', b'0', '$2a$10$dXYxfmSxfvKd40F9IxlP1.7Ziv8VpIup1D/A5scizNmO3r1UBWMgi', '1231231231', 1, 0, 'trongPT2323'), (53, 'tronghandsome1111@gmail.com', b'1', '$2a$10$FngCTseErvyCCNyFHvJtjuBkYApf2Xcn8z6k3q9TP05i4gzze8C4O', '1231231231', 1, 0, 'trongPT123');
COMMIT;

-- ----------------------------
-- Table structure for bill_gym
-- ----------------------------
DROP TABLE IF EXISTS `bill_gym`;
CREATE TABLE `bill_gym`  (
  `bill_gym_id` int NOT NULL AUTO_INCREMENT,
  `day_end` datetime NULL DEFAULT NULL,
  `day_start` datetime NULL DEFAULT NULL,
  `combo_id` int NOT NULL,
  `gym_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`bill_gym_id`) USING BTREE,
  INDEX `FK7ny7jglhynmnn761u9ye8nx0o`(`combo_id` ASC) USING BTREE,
  INDEX `FKeb7662q8g720wua5rmyunl3a1`(`gym_id` ASC) USING BTREE,
  INDEX `FK4pc9oi8rhl20o7bk0glrl11te`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK4pc9oi8rhl20o7bk0glrl11te` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK7ny7jglhynmnn761u9ye8nx0o` FOREIGN KEY (`combo_id`) REFERENCES `combo` (`combo_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKeb7662q8g720wua5rmyunl3a1` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of bill_gym
-- ----------------------------
BEGIN;
INSERT INTO `bill_gym` (`bill_gym_id`, `day_end`, `day_start`, `combo_id`, `gym_id`, `user_id`) VALUES (1, '2022-12-14 19:55:34', '2022-11-14 19:55:34', 1, 1, 1), (2, '2022-12-17 17:02:39', '2022-11-17 17:02:39', 1, 1, 3), (3, '2022-12-17 17:14:13', '2022-11-17 17:14:13', 1, 1, 5);
COMMIT;

-- ----------------------------
-- Table structure for bill_pt
-- ----------------------------
DROP TABLE IF EXISTS `bill_pt`;
CREATE TABLE `bill_pt`  (
  `bill_pt_id` int NOT NULL AUTO_INCREMENT,
  `day_end` datetime NULL DEFAULT NULL,
  `day_start` datetime NULL DEFAULT NULL,
  `pt_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`bill_pt_id`) USING BTREE,
  INDEX `FKauv2ksfs86fx15e9qgr06p8yu`(`pt_id` ASC) USING BTREE,
  INDEX `FK2rvy5ed55og20n02uhw6w11qw`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK2rvy5ed55og20n02uhw6w11qw` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKauv2ksfs86fx15e9qgr06p8yu` FOREIGN KEY (`pt_id`) REFERENCES `personal_trainer` (`pt_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of bill_pt
-- ----------------------------
BEGIN;
INSERT INTO `bill_pt` (`bill_pt_id`, `day_end`, `day_start`, `pt_id`, `user_id`) VALUES (1, '2022-12-14 13:15:31', '2022-11-14 13:15:31', 1, 1), (2, '2022-12-15 14:04:11', '2022-11-15 14:04:11', 1, 3), (3, '2022-12-20 14:01:27', '2022-11-20 14:01:27', 1, 5);
COMMIT;

-- ----------------------------
-- Table structure for combo
-- ----------------------------
DROP TABLE IF EXISTS `combo`;
CREATE TABLE `combo`  (
  `combo_id` int NOT NULL AUTO_INCREMENT,
  `enable` bit(1) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` int NOT NULL,
  `gym_id` int NOT NULL,
  PRIMARY KEY (`combo_id`) USING BTREE,
  INDEX `FKbi0fbhxi3v2eit37uylp961e5`(`gym_id` ASC) USING BTREE,
  CONSTRAINT `FKbi0fbhxi3v2eit37uylp961e5` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of combo
-- ----------------------------
BEGIN;
INSERT INTO `combo` (`combo_id`, `enable`, `name`, `price`, `gym_id`) VALUES (1, b'1', 'gold', 1000000, 1), (2, b'1', 'silver', 500000, 1), (3, b'1', 'dimond', 1500000, 1), (4, b'1', 'dimond', 1500000, 2), (5, b'1', 'gold', 1000000, 2), (6, b'0', 'silver', 500000, 2), (7, b'1', 'silver', 500000, 3), (8, b'0', 'gold', 1000000, 3);
COMMIT;

-- ----------------------------
-- Table structure for discount
-- ----------------------------
DROP TABLE IF EXISTS `discount`;
CREATE TABLE `discount`  (
  `discount_id` int NOT NULL AUTO_INCREMENT,
  `end` datetime NULL DEFAULT NULL,
  `start` datetime NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `percent` int NOT NULL,
  `gym_id` int NOT NULL,
  PRIMARY KEY (`discount_id`) USING BTREE,
  INDEX `FK5veekx2hmvimdol5ahf0uyo5a`(`gym_id` ASC) USING BTREE,
  CONSTRAINT `FK5veekx2hmvimdol5ahf0uyo5a` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of discount
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for gym
-- ----------------------------
DROP TABLE IF EXISTS `gym`;
CREATE TABLE `gym`  (
  `gym_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enable` bit(1) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`gym_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of gym
-- ----------------------------
BEGIN;
INSERT INTO `gym` (`gym_id`, `address`, `avatar`, `email`, `enable`, `name`, `phone`) VALUES (1, 'TP.HCM', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223011/ppf0ynwgbic2qlwtf7ap.jpg', 'demo@gmail.com', b'1', 'Califonia Gym', '123123'), (2, 'TP.HCM', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223005/bqnttqv3sjljfohjtd3y.jpg', 'demo@gmail.com', b'1', 'City Gym', '123123'), (3, 'TP.HCM', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223005/bqnttqv3sjljfohjtd3y.jpg', 'demo@gmail.com', b'1', 'Califonia BD', '123123'), (16, 'TP.HCM', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1669003917/ogvamxblaenwclaci35t.png', 'demo@gmail.com', b'1', 'gym q9', '1231231231');
COMMIT;

-- ----------------------------
-- Table structure for gym_rate
-- ----------------------------
DROP TABLE IF EXISTS `gym_rate`;
CREATE TABLE `gym_rate`  (
  `gym_rate_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `vote` float NOT NULL,
  `gym_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`gym_rate_id`) USING BTREE,
  INDEX `FKs9l42kpokdo9m6jtmrsrux5lv`(`gym_id` ASC) USING BTREE,
  INDEX `FK8t6yggvrk1leghlw8rvc77ojh`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8t6yggvrk1leghlw8rvc77ojh` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKs9l42kpokdo9m6jtmrsrux5lv` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of gym_rate
-- ----------------------------
BEGIN;
INSERT INTO `gym_rate` (`gym_rate_id`, `content`, `vote`, `gym_id`, `user_id`) VALUES (1, 'tốt', 5, 1, 1), (2, 'không tốt', 1, 1, 1), (3, 'good', 5, 1, 1), (4, 'tốt', 5, 1, 1), (5, 'good', 5, 1, 3), (6, 'tot', 5, 2, 3);
COMMIT;

-- ----------------------------
-- Table structure for personal_trainer
-- ----------------------------
DROP TABLE IF EXISTS `personal_trainer`;
CREATE TABLE `personal_trainer`  (
  `pt_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` int NOT NULL,
  `account_id` int NULL DEFAULT NULL,
  `gym_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`pt_id`) USING BTREE,
  INDEX `FK7cba201tku98wavwuabcq3b9t`(`account_id` ASC) USING BTREE,
  INDEX `FK34j44de4ea2iwsba5iikvf5ya`(`gym_id` ASC) USING BTREE,
  CONSTRAINT `FK34j44de4ea2iwsba5iikvf5ya` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK7cba201tku98wavwuabcq3b9t` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of personal_trainer
-- ----------------------------
BEGIN;
INSERT INTO `personal_trainer` (`pt_id`, `address`, `avatar`, `name`, `price`, `account_id`, `gym_id`) VALUES (1, 'hcm', 'https://res.cloudinary.com/dzjmvy2ty/image/upload/v1668350835/gymer_iwe6ot.png', 'văn tèo', 5000000, 3, 1), (2, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668413345/xvnk1vvtovcubdyjedv9.png', 'văn tí', 10000000, 13, 1), (3, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668413996/pebfspfbjmc7xt7mausc.png', 'bi', 10000000, 14, 1), (4, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668414272/hbvim71imdho1xyspw4m.png', 'ptkhang', 10000000, 15, 1), (8, NULL, 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1669193499/o5pacsag4ecvjq6tf4we.png', NULL, 0, NULL, NULL), (9, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1669193499/o5pacsag4ecvjq6tf4we.png', 'trong', 1234, 53, 2);
COMMIT;

-- ----------------------------
-- Table structure for pic_gym
-- ----------------------------
DROP TABLE IF EXISTS `pic_gym`;
CREATE TABLE `pic_gym`  (
  `pic_gym_id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gym_id` int NOT NULL,
  PRIMARY KEY (`pic_gym_id`) USING BTREE,
  INDEX `FKpvc91ik7uwa68yghun52ps9ql`(`gym_id` ASC) USING BTREE,
  CONSTRAINT `FKpvc91ik7uwa68yghun52ps9ql` FOREIGN KEY (`gym_id`) REFERENCES `gym` (`gym_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of pic_gym
-- ----------------------------
BEGIN;
INSERT INTO `pic_gym` (`pic_gym_id`, `img`, `gym_id`) VALUES (1, 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223005/bqnttqv3sjljfohjtd3y.jpg', 1), (2, 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223005/bqnttqv3sjljfohjtd3y.jpg', 1), (3, 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668223005/bqnttqv3sjljfohjtd3y.jpg', 1);
COMMIT;

-- ----------------------------
-- Table structure for pic_pt
-- ----------------------------
DROP TABLE IF EXISTS `pic_pt`;
CREATE TABLE `pic_pt`  (
  `pic_pt_id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pt_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`pic_pt_id`) USING BTREE,
  INDEX `FK7p7csq2nxq8gcvsc3v5l4xl85`(`pt_id` ASC) USING BTREE,
  CONSTRAINT `FK7p7csq2nxq8gcvsc3v5l4xl85` FOREIGN KEY (`pt_id`) REFERENCES `personal_trainer` (`pt_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of pic_pt
-- ----------------------------
BEGIN;
INSERT INTO `pic_pt` (`pic_pt_id`, `img`, `pt_id`) VALUES (1, 'https://res.cloudinary.com/dzjmvy2ty/image/upload/v1668350835/gymer_iwe6ot.png', 1), (2, 'https://res.cloudinary.com/dzjmvy2ty/image/upload/v1668350835/gymer_iwe6ot.png', 1);
COMMIT;

-- ----------------------------
-- Table structure for pt_rate
-- ----------------------------
DROP TABLE IF EXISTS `pt_rate`;
CREATE TABLE `pt_rate`  (
  `pt_rate_id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `vote` float NOT NULL,
  `pt_id` int NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`pt_rate_id`) USING BTREE,
  INDEX `FKcod1b8vqfydn0y5dw8thabxqt`(`pt_id` ASC) USING BTREE,
  INDEX `FKpp3gg5wvt6bxibvojlwcjj4ma`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKcod1b8vqfydn0y5dw8thabxqt` FOREIGN KEY (`pt_id`) REFERENCES `personal_trainer` (`pt_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpp3gg5wvt6bxibvojlwcjj4ma` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of pt_rate
-- ----------------------------
BEGIN;
INSERT INTO `pt_rate` (`pt_rate_id`, `comment`, `vote`, `pt_id`, `user_id`) VALUES (1, 'tốt', 5, 1, 1), (2, 'good', 4, 1, 1), (3, '10d', 4.5, 1, 1), (4, 'good vl', 4.5, 1, 1), (5, 'cung~ dc', 5, 1, 1), (6, 'goood', 5, 2, 3), (7, 'good', 4.5, 1, 5);
COMMIT;

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token`  (
  `token_id` int NOT NULL AUTO_INCREMENT,
  `confirm_at` datetime NULL DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `expiry_at` datetime NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `token_type` int NULL DEFAULT NULL,
  `account_id` int NOT NULL,
  PRIMARY KEY (`token_id`) USING BTREE,
  INDEX `FKftkstvcfb74ogw02bo5261kno`(`account_id` ASC) USING BTREE,
  CONSTRAINT `FKftkstvcfb74ogw02bo5261kno` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 99 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of token
-- ----------------------------
BEGIN;
INSERT INTO `token` (`token_id`, `confirm_at`, `create_at`, `expiry_at`, `token`, `token_type`, `account_id`) VALUES (1, NULL, '2022-11-14 14:46:58', '2022-11-14 15:01:58', '3805', 1, 9), (2, NULL, '2022-11-14 14:49:19', '2022-11-14 15:04:19', '2673', 1, 10), (3, NULL, '2022-11-14 15:08:57', '2022-11-14 15:23:57', '7523', 1, 11), (4, NULL, '2022-11-14 15:14:25', '2022-11-14 15:29:25', '9036', 1, 13), (5, NULL, '2022-11-14 15:19:49', '2022-11-14 15:34:49', '6619', 1, 14), (6, NULL, '2022-11-14 15:24:25', '2022-11-14 15:39:25', '2735', 1, 15), (7, NULL, '2022-11-18 11:35:34', '2022-11-18 11:50:34', '6809', 1, 33), (8, NULL, '2022-11-18 11:45:50', '2022-11-18 12:00:50', '7600', 1, 33), (9, NULL, '2022-11-18 11:45:50', '2022-11-18 12:00:50', '6890', 1, 33), (10, NULL, '2022-11-18 11:46:07', '2022-11-18 12:01:07', '4182', 1, 33), (11, NULL, '2022-11-18 11:46:07', '2022-11-18 12:01:07', '1618', 1, 33), (12, NULL, '2022-11-18 13:48:23', '2022-11-18 14:03:23', '1972', 1, 34), (13, NULL, '2022-11-18 13:48:23', '2022-11-18 14:03:23', '6375', 1, 34), (14, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '1492', 1, 34), (15, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '7707', 1, 34), (16, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '5742', 1, 34), (17, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '7312', 1, 34), (18, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '9022', 1, 34), (19, NULL, '2022-11-18 13:48:37', '2022-11-18 14:03:37', '1230', 1, 34), (20, NULL, '2022-11-18 13:48:40', '2022-11-18 14:03:40', '1233', 1, 34), (21, NULL, '2022-11-18 13:48:41', '2022-11-18 14:03:41', '9896', 1, 34), (22, NULL, '2022-11-18 13:48:41', '2022-11-18 14:03:41', '8515', 1, 34), (23, NULL, '2022-11-18 13:48:41', '2022-11-18 14:03:41', '8465', 1, 34), (24, NULL, '2022-11-18 13:48:42', '2022-11-18 14:03:42', '9715', 1, 34), (25, NULL, '2022-11-18 13:48:43', '2022-11-18 14:03:43', '8319', 1, 34), (26, NULL, '2022-11-18 13:48:45', '2022-11-18 14:03:45', '8811', 1, 34), (27, NULL, '2022-11-18 13:48:46', '2022-11-18 14:03:46', '1095', 1, 34), (28, NULL, '2022-11-18 13:48:48', '2022-11-18 14:03:48', '2596', 1, 34), (29, NULL, '2022-11-18 13:48:48', '2022-11-18 14:03:48', '7212', 1, 34), (30, NULL, '2022-11-18 13:48:50', '2022-11-18 14:03:50', '4420', 1, 34), (31, NULL, '2022-11-18 13:48:50', '2022-11-18 14:03:50', '4904', 1, 34), (32, NULL, '2022-11-18 13:49:24', '2022-11-18 14:04:24', '5162', 1, 34), (33, NULL, '2022-11-18 13:49:24', '2022-11-18 14:04:24', '1415', 1, 34), (34, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '1269', 1, 34), (35, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '8627', 1, 34), (36, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '2416', 1, 34), (37, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '7446', 1, 34), (38, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '4884', 1, 34), (39, NULL, '2022-11-18 13:49:35', '2022-11-18 14:04:35', '7818', 1, 34), (40, NULL, '2022-11-18 13:49:39', '2022-11-18 14:04:39', '9429', 1, 34), (41, NULL, '2022-11-18 13:49:39', '2022-11-18 14:04:39', '7410', 1, 34), (42, NULL, '2022-11-18 13:49:41', '2022-11-18 14:04:41', '2861', 1, 34), (43, NULL, '2022-11-18 13:49:41', '2022-11-18 14:04:41', '7049', 1, 34), (44, NULL, '2022-11-18 13:49:41', '2022-11-18 14:04:41', '5858', 1, 34), (45, NULL, '2022-11-18 13:49:43', '2022-11-18 14:04:43', '2130', 1, 34), (46, NULL, '2022-11-18 13:49:44', '2022-11-18 14:04:44', '2174', 1, 34), (47, NULL, '2022-11-18 13:49:45', '2022-11-18 14:04:45', '1149', 1, 34), (48, NULL, '2022-11-18 13:49:46', '2022-11-18 14:04:46', '7037', 1, 34), (49, NULL, '2022-11-18 13:49:50', '2022-11-18 14:04:50', '9061', 1, 34), (50, NULL, '2022-11-18 13:49:50', '2022-11-18 14:04:50', '7749', 1, 34), (51, NULL, '2022-11-18 13:50:05', '2022-11-18 14:05:05', '5666', 1, 34), (52, NULL, '2022-11-18 13:50:05', '2022-11-18 14:05:05', '3383', 1, 34), (53, NULL, '2022-11-18 13:50:07', '2022-11-18 14:05:07', '6193', 1, 34), (54, NULL, '2022-11-18 13:50:07', '2022-11-18 14:05:07', '3711', 1, 34), (55, NULL, '2022-11-18 13:50:44', '2022-11-18 14:05:44', '9139', 1, 34), (56, NULL, '2022-11-18 13:50:44', '2022-11-18 14:05:44', '5688', 1, 34), (57, NULL, '2022-11-18 13:50:47', '2022-11-18 14:05:47', '3129', 1, 34), (58, NULL, '2022-11-18 13:50:47', '2022-11-18 14:05:47', '2468', 1, 34), (59, NULL, '2022-11-18 13:51:06', '2022-11-18 14:06:06', '1335', 1, 34), (60, NULL, '2022-11-18 13:51:06', '2022-11-18 14:06:06', '6219', 1, 34), (61, NULL, '2022-11-18 13:51:09', '2022-11-18 14:06:09', '5443', 1, 34), (62, NULL, '2022-11-18 13:51:09', '2022-11-18 14:06:09', '5449', 1, 34), (63, NULL, '2022-11-18 13:51:43', '2022-11-18 14:06:43', '2224', 1, 34), (64, NULL, '2022-11-18 13:51:43', '2022-11-18 14:06:43', '5466', 1, 34), (65, NULL, '2022-11-18 13:51:48', '2022-11-18 14:06:48', '7846', 1, 34), (66, NULL, '2022-11-18 13:51:48', '2022-11-18 14:06:48', '1593', 1, 34), (67, NULL, '2022-11-18 13:51:54', '2022-11-18 14:06:54', '4155', 1, 34), (68, NULL, '2022-11-18 13:52:23', '2022-11-18 14:07:23', '2807', 1, 34), (69, NULL, '2022-11-18 13:52:23', '2022-11-18 14:07:23', '2380', 1, 34), (70, NULL, '2022-11-18 13:52:38', '2022-11-18 14:07:38', '7298', 1, 34), (71, NULL, '2022-11-18 13:52:38', '2022-11-18 14:07:38', '6706', 1, 34), (72, NULL, '2022-11-18 13:52:53', '2022-11-18 14:07:53', '5305', 1, 34), (73, NULL, '2022-11-18 13:52:53', '2022-11-18 14:07:53', '7662', 1, 34), (74, NULL, '2022-11-18 13:52:54', '2022-11-18 14:07:54', '1197', 1, 34), (75, NULL, '2022-11-18 13:52:54', '2022-11-18 14:07:54', '5924', 1, 34), (76, NULL, '2022-11-18 13:52:54', '2022-11-18 14:07:54', '6374', 1, 34), (77, NULL, '2022-11-18 13:52:59', '2022-11-18 14:07:59', '3447', 1, 34), (78, NULL, '2022-11-18 13:53:17', '2022-11-18 14:08:17', '2837', 1, 34), (79, NULL, '2022-11-18 13:53:17', '2022-11-18 14:08:17', '1562', 1, 34), (80, NULL, '2022-11-18 13:53:32', '2022-11-18 14:08:32', '2036', 1, 34), (81, NULL, '2022-11-18 13:53:32', '2022-11-18 14:08:32', '7338', 1, 34), (82, NULL, '2022-11-18 13:53:33', '2022-11-18 14:08:33', '8692', 1, 34), (83, NULL, '2022-11-18 13:53:33', '2022-11-18 14:08:33', '6145', 1, 34), (84, NULL, '2022-11-18 13:53:33', '2022-11-18 14:08:33', '6096', 1, 34), (85, NULL, '2022-11-18 13:53:38', '2022-11-18 14:08:38', '9066', 1, 34), (86, NULL, '2022-11-18 13:57:52', '2022-11-18 14:12:52', '3820', 1, 35), (87, NULL, '2022-11-18 13:58:50', '2022-11-18 14:13:50', '7861', 1, 36), (88, NULL, '2022-11-18 14:00:01', '2022-11-18 14:15:01', '2591', 1, 37), (89, NULL, '2022-11-18 14:03:22', '2022-11-18 14:18:22', '2009', 1, 37), (90, NULL, '2022-11-18 14:07:01', '2022-11-18 14:22:01', '3473', 1, 38), (91, NULL, '2022-11-18 14:07:24', '2022-11-18 14:22:24', '5602', 1, 38), (92, NULL, '2022-11-18 14:09:48', '2022-11-18 14:24:48', '5543', 1, 39), (93, NULL, '2022-11-18 14:10:27', '2022-11-18 14:25:27', '7050', 1, 39), (94, NULL, '2022-11-18 14:15:29', '2022-11-18 14:30:29', '9238', 1, 40), (95, NULL, '2022-11-18 14:15:42', '2022-11-18 14:30:42', '9696', 1, 40), (96, NULL, '2022-11-18 14:17:08', '2022-11-18 14:32:08', '9162', 1, 41), (97, NULL, '2022-11-18 14:20:27', '2022-11-18 14:35:27', '4059', 1, 42), (98, NULL, '2022-11-23 15:53:37', '2022-11-23 16:08:37', '3678', 1, 53);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `account_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `FKc3b4xfbq6rbkkrddsdum8t5f0`(`account_id` ASC) USING BTREE,
  CONSTRAINT `FKc3b4xfbq6rbkkrddsdum8t5f0` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`user_id`, `address`, `avatar`, `name`, `account_id`) VALUES (1, '123123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412046/ypkyf1gpxfxadhtgpkwf.png', 'user', 1), (2, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412046/ypkyf1gpxfxadhtgpkwf.png', 'user', 2), (3, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412046/ypkyf1gpxfxadhtgpkwf.png', 'trong', 8), (4, 'tronghandsome1111@gmail.com', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412046/ypkyf1gpxfxadhtgpkwf.png', 'admin', 9), (5, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 10), (6, '1223213123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 16), (7, '1223213123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 18), (8, '1223213123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 19), (9, '1223213123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 20), (10, '1223213123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 21), (11, '12313', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668735310/cemkx5ttdeakizzrxigc.jpg', 'trong', 22), (12, '12313', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 24), (13, '12313', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 25), (14, '12313', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 26), (15, '12313', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668412166/maoduyvf65ohyj4hlc1j.png', 'trong', 28), (16, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668735879/frt0a2oxycofn8bg9azj.png', 'tronghandsome', 29), (17, '123312321', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668736068/gpjuig8me5fzq326t7ag.jpg', 'trongdz122', 30), (18, '12312312312', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668737072/ytzthyfrk4ibqk0zbahh.jpg', 'trong', 31), (19, '123123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668737562/baw0xr8jdmglk7inhgme.jpg', '123123', 32), (20, '1234123123', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668745142/gfyq7e1ncomp8b8qtf0l.png', 'trong', 33), (21, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668754111/ahdtg3xlakeu2iloxvvr.png', 'trong', 34), (22, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668754676/wjleiub89hvschtscavy.jpg', 'trong', 35), (23, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668754734/j9282dgvn3yyqxfjzopj.jpg', 'trong', 36), (24, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668754805/bssvsljvwbrvfltckzqh.jpg', 'trong', 37), (25, '12 hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668755225/kc89ybkxwwvmz6umw0bg.jpg', 'trongdz', 38), (26, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668755393/thffim89sym17egvsu81.jpg', 'user', 39), (27, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668755733/ui1pasitokn2pfo67c9r.jpg', 'trong', 40), (28, '123 hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668755832/ykwznqxokotabhrcqqj1.jpg', 'trong', 41), (29, 'hcm', 'http://res.cloudinary.com/dzjmvy2ty/image/upload/v1668756034/so0pknbaqosvaru6klr8.jpg', 'trong', 42), (30, '', 'https://lh3.googleusercontent.com/a/ALm5wu1ylD_SMAipm3Xd44K-3it-_00Z4vPYbEt3qxXI=s96-c', 'vuong', 43);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
