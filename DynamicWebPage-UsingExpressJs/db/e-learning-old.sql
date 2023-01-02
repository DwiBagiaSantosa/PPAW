-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2022 at 08:03 AM
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
-- Database: `e-learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `akun`
--

CREATE TABLE `akun` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `akun`
--

INSERT INTO `akun` (`id`, `username`, `password`) VALUES
(0, 'dosen', 'dosen'),
(1, 'dosen', 'dosen'),
(3, 'mahasiswa', 'mahasiswa');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_dosen`
--

CREATE TABLE `jadwal_dosen` (
  `jadwal_id` int(11) NOT NULL,
  `mata_kuliah` varchar(255) NOT NULL,
  `kelas` varchar(25) NOT NULL,
  `sks` varchar(52) NOT NULL,
  `ruang` varchar(25) NOT NULL,
  `hari` varchar(25) NOT NULL,
  `waktu` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal_dosen`
--

INSERT INTO `jadwal_dosen` (`jadwal_id`, `mata_kuliah`, `kelas`, `sks`, `ruang`, `hari`, `waktu`) VALUES
(1, 'PAW', 'A', '2', '4.01', 'Senin', '12.40 - 14.20'),
(2, 'PPAW', 'A', '1', '4.02', 'Rabu', '14.20 - 16.00'),
(3, 'PAW', 'B', '2', '4.01', 'Senin', '8.40 - 10.20'),
(4, 'PPAW', 'B', '1', '4.02', 'Selasa', '7.00 - 8.40'),
(5, 'Algoritma dan Pemrograman', 'A', '2', '4.11', 'Rabu', '8.40 - 10.20'),
(6, 'Prak. Algoritma dan Pemrograman', 'A', '1', '4.05', 'Kamis', '7.00 - 8.40');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_mahasiswa`
--

CREATE TABLE `jadwal_mahasiswa` (
  `jadwal_id` int(11) NOT NULL,
  `mata_kuliah` varchar(255) NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `sks` varchar(255) NOT NULL,
  `ruang` varchar(255) NOT NULL,
  `hari` varchar(255) NOT NULL,
  `waktu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jadwal_mahasiswa`
--

INSERT INTO `jadwal_mahasiswa` (`jadwal_id`, `mata_kuliah`, `kelas`, `sks`, `ruang`, `hari`, `waktu`) VALUES
(1, 'Manajemen Basis Data', 'B', '2', '4.10', 'Selasa', '7.00 - 8.40'),
(2, 'Prak. Manajemen Basis Data', 'B', '1', '4.05', 'Senin', '10.20 - 12.00'),
(3, 'Jaringan Komputer', 'B', '2', '102', 'Selasa', '8.40 - 10.20'),
(4, 'Prak. Jaringan Komputer', 'E', '1', '4.05', 'Kamis', '10.20 - 12.00'),
(5, 'Pengembangan Aplikasi Mobile', 'B', '2', '102', 'Rabu', '12.40 - 14.20'),
(6, 'Prak. Pengembangan Aplikasi Mobile', 'E', '1', '4.04', 'Kamis', '8.40 - 10.20'),
(7, 'Pengembangan Aplikasi Web', 'B', '2', '4.01', 'Jum\'at', '14.20 - 16.00'),
(8, 'Prak. Pengembangan Aplikasi Web', 'H', '1', '4.04', 'Selasa', '10.20 - 12.00'),
(9, 'Interaksi Manusia dan Komputer', 'B', '3', '4.01', 'Rabu', '9.30 - 12.00'),
(10, 'Intelegensia Buatan', 'B', '3', '4.01', 'Kamis', '15.30 - 18.00'),
(11, 'Manajemen Proyek Perangkat Lunak', 'B', '3', '4.12', 'Kamis', '12.40 - 15.10'),
(12, 'Sosio Informatika', 'D', '2', '4.11', 'Selasa', '12.40 - 14.20');

-- --------------------------------------------------------

--
-- Table structure for table `tb_dosen`
--

CREATE TABLE `tb_dosen` (
  `dosen_id` int(11) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `nip` varchar(25) NOT NULL,
  `jenis_kelamin` varchar(25) NOT NULL,
  `alamat` varchar(25) NOT NULL,
  `kota` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_dosen`
--

INSERT INTO `tb_dosen` (`dosen_id`, `nama`, `nip`, `jenis_kelamin`, `alamat`, `kota`, `email`) VALUES
(1, 'Maulana H', '199821211', 'Laki-laki', 'Margahayu', 'Jakarta', 'maulana@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tb_mahasiswa`
--

CREATE TABLE `tb_mahasiswa` (
  `mahasiswa_id` int(11) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `nim` varchar(25) NOT NULL,
  `jenis_kelamin` varchar(25) NOT NULL,
  `alamat` varchar(25) NOT NULL,
  `kota` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_mahasiswa`
--

INSERT INTO `tb_mahasiswa` (`mahasiswa_id`, `nama`, `nim`, `jenis_kelamin`, `alamat`, `kota`, `email`) VALUES
(1, 'DIaz Aria B', '1207050030', 'Laki-laki', 'Jalan Logam', 'Bandung', 'diaz@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  ADD PRIMARY KEY (`jadwal_id`);

--
-- Indexes for table `jadwal_mahasiswa`
--
ALTER TABLE `jadwal_mahasiswa`
  ADD PRIMARY KEY (`jadwal_id`);

--
-- Indexes for table `tb_dosen`
--
ALTER TABLE `tb_dosen`
  ADD PRIMARY KEY (`dosen_id`);

--
-- Indexes for table `tb_mahasiswa`
--
ALTER TABLE `tb_mahasiswa`
  ADD PRIMARY KEY (`mahasiswa_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jadwal_dosen`
--
ALTER TABLE `jadwal_dosen`
  MODIFY `jadwal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jadwal_mahasiswa`
--
ALTER TABLE `jadwal_mahasiswa`
  MODIFY `jadwal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tb_dosen`
--
ALTER TABLE `tb_dosen`
  MODIFY `dosen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_mahasiswa`
--
ALTER TABLE `tb_mahasiswa`
  MODIFY `mahasiswa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
