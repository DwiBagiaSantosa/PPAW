-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2023 at 05:46 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_baru`
--

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_dosen`
--

CREATE TABLE `jadwal_dosen` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `matakuliah` varchar(255) NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `sks` int(11) NOT NULL,
  `ruang` varchar(255) NOT NULL,
  `hari` varchar(255) NOT NULL,
  `waktu` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal_dosen`
--

INSERT INTO `jadwal_dosen` (`id`, `uuid`, `matakuliah`, `kelas`, `sks`, `ruang`, `hari`, `waktu`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '3999786a-f800-46a7-a865-5e58da86752e', 'ppaw', 'b', 2, 'R408', 'rabu', '14.20', '2022-12-24 11:36:05', '2022-12-24 11:36:05', 1),
(2, '', 'PAM', 'B', 3, '4.01', 'Kamis', '14.20', '2022-12-28 10:08:53', '2022-12-28 10:08:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `materi`
--

CREATE TABLE `materi` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_materi` varchar(255) NOT NULL,
  `link_materi` varchar(255) NOT NULL,
  `mata_kuliah` varchar(255) NOT NULL,
  `tenggat_waktu` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `materi`
--

INSERT INTO `materi` (`id`, `uuid`, `nama_materi`, `link_materi`, `mata_kuliah`, `tenggat_waktu`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '96090af1-120f-4065-8755-f0b78f3605fb', 'Belajar Express', 'https://drive.google.com/drive/u/0/folders/1PR1uLHN2FBIBccaIZJsDNsTuzhrZ6Rva', 'PAW', '0000-00-00', 2, '2022-12-23 04:23:57', '2022-12-23 04:23:57'),
(2, '2226ca58-ac29-4781-9073-1a889faf7064', 'Belajar menggunakan library React-Router-Dom', 'https://drive.google.com/drive/u/0/folders/1ANzXfndZLwZDLTLgIyW48BWzm9fdkBwt', 'PAWww', '0000-00-00', 2, '2022-12-23 04:24:48', '2022-12-28 08:07:47'),
(3, 'e097c30b-743d-439b-9506-6d9137312176', 'Tugas Menghubungkan BE dan FE dengan libary axios', 'https://drive.google.com/drive/u/0/folders/1v6v2sFKud590OI59oWPwrri5HzXrke4U', 'PAW', '0000-00-00', 2, '2022-12-23 04:26:11', '2022-12-28 08:51:37'),
(4, '851d9b2c-b766-4df7-ad93-57e611cb253c', 'Membuat Widget dengan bahasa Jawa', 'https://drive.google.com/drive/u/0/folders/13OS1hAMkj42D9j-TFs0M1Or5rLq1nsxl', 'PAM', '0000-00-00', 3, '2022-12-23 04:28:08', '2022-12-23 04:28:08'),
(5, 'c01b2d92-d3cb-4355-84a0-2c09a729c596', 'Tugas Library Volley', 'https://drive.google.com/drive/u/0/folders/1NVYSejubarNI8WZTeq0sOI32Y8JBy2lq', 'PAM', '2023-01-10', 3, '2022-12-23 04:29:12', '2022-12-23 04:29:12'),
(6, '05c71169-f1be-4468-9322-83d46026953f', 'Materi 4', 'http://djawdjwaodjawdo.com', 'paw', '2022-12-26', 3, '2022-12-24 11:23:31', '2022-12-24 11:23:31');

-- --------------------------------------------------------

--
-- Table structure for table `matkul`
--

CREATE TABLE `matkul` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_matkul` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('7nip0FHUDGCXxRzQv53HgDGrEtG3ipJW', '2023-01-03 16:38:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-02 16:38:51', '2023-01-02 16:38:51'),
('aGNLSPzkyskmGU1RX19mrmB2Xc7Gx1O-', '2023-01-03 16:28:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-02 16:28:41', '2023-01-02 16:28:41'),
('nCcfYd_zYtfAEljPgkYPWoSZq0kJtZeC', '2023-01-03 16:27:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-02 16:27:31', '2023-01-02 16:27:31'),
('Oif1ToTFZ3vxtfs-Jzn6BBCReX9ti5vD', '2023-01-03 16:29:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-02 16:29:15', '2023-01-02 16:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nim` varchar(255) DEFAULT NULL,
  `npm` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `dp` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `nim`, `npm`, `password`, `alamat`, `dp`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '9826acf7-373a-429a-9662-5a930ecd7c19', 'Ibham Bathsyi', 'ibem@gmail.com', NULL, NULL, '$argon2id$v=19$m=4096,t=3,p=1$Xpo1i2J2a70+8m61P97W/w$YNtBeUEX4c7QOxUjM+QQjUtkbdE5Y1rTKJpi1PedhX4', NULL, NULL, 'admin', '2022-12-23 04:17:52', '2022-12-24 12:53:46'),
(2, '1f3b8e0c-868e-42fb-bc99-74ebae6b1acc', 'Dwi Bagia', 'dwi@gmail.com', ' ', 'dosen123456', '$argon2id$v=19$m=4096,t=3,p=1$TIiy5Pj9br6HtvZkYY66JA$X6NzyYU/fiteQw2tQT/a4fML76AuRpi8puHqpE3yNvI', ' ', ' ', 'dosen', '2022-12-23 04:18:28', '2022-12-26 15:04:32'),
(3, '6db7c4bb-ed14-4d58-9dbe-459b7dc72b20', 'Pak Dosen', 'dosen@gmail.com', '1207050044', 'dosen123456', '$argon2id$v=19$m=4096,t=3,p=1$7laAfH3aQx7zXiqLfEbOQA$l0M/5b/WzqEzT3NXJP4Z5tuX/kIKTAr2BqgW2U3KX4k', '', '', 'dosen', '2022-12-23 04:21:59', '2022-12-23 04:21:59'),
(6, 'd8df87ca-f278-4770-9b36-8f1fcca3f891', 'Haikal Azhar', 'haikal@gmail.com', '1207050044', '', '$argon2id$v=19$m=4096,t=3,p=1$S+5B5cg8oQBbTBj8XoHJkQ$6ZvBHcxob8b3vsu5CEJviw/ViOOxRycrzvsTHGjcc5U', 'Banten', '', 'mahasiswa', '2022-12-28 08:30:18', '2022-12-28 08:30:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `materi`
--
ALTER TABLE `materi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `matkul`
--
ALTER TABLE `matkul`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `materi`
--
ALTER TABLE `materi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `matkul`
--
ALTER TABLE `matkul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  ADD CONSTRAINT `jadwal_dosen_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `materi`
--
ALTER TABLE `materi`
  ADD CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `matkul`
--
ALTER TABLE `matkul`
  ADD CONSTRAINT `matkul_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
