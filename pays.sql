-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mer 04 Janvier 2023 à 09:50
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `pays`
--

-- --------------------------------------------------------

--
-- Structure de la table `communes`
--

CREATE TABLE IF NOT EXISTS `communes` (
  `code_commune` varchar(22) NOT NULL,
  `Nom_commune` text NOT NULL,
  `population_2010` int(11) NOT NULL,
  `population_1999` int(11) NOT NULL,
  `surface` varchar(7) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  PRIMARY KEY (`code_commune`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `communes`
--

INSERT INTO `communes` (`code_commune`, `Nom_commune`, `population_2010`, `population_1999`, `surface`, `longitude`, `latitude`) VALUES
('114A', 'paris', 20000, 10000, '105,4km', '2', '46'),
('115B', 'villejuif', 10000, 5000, '5,34km²', '2', '42'),
('116C', 'Lyon', 25000, 15000, '125km²', '3', '52');

-- --------------------------------------------------------

--
-- Structure de la table `départements`
--

CREATE TABLE IF NOT EXISTS `départements` (
  `Num_departement` varchar(11) NOT NULL,
  `Nom_departement` int(20) NOT NULL,
  `code_commune` varchar(11) NOT NULL,
  PRIMARY KEY (`Num_departement`),
  KEY `code_commune` (`code_commune`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `départements`
--

INSERT INTO `départements` (`Num_departement`, `Nom_departement`, `code_commune`) VALUES
('69', 0, '116C'),
('75', 0, '114A'),
('94', 0, '115B');

-- --------------------------------------------------------

--
-- Structure de la table `regions`
--

CREATE TABLE IF NOT EXISTS `regions` (
  `code_region` varchar(20) NOT NULL,
  `Nom_region` int(11) NOT NULL,
  `Num_departement` varchar(11) NOT NULL,
  PRIMARY KEY (`code_region`),
  KEY `Num_departement` (`Num_departement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `regions`
--

INSERT INTO `regions` (`code_region`, `Nom_region`, `Num_departement`) VALUES
('34', 0, '75'),
('35', 0, '94'),
('36', 0, '69');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `départements`
--
ALTER TABLE `départements`
  ADD CONSTRAINT `d@0ppartements_ibfk_1` FOREIGN KEY (`code_commune`) REFERENCES `communes` (`code_commune`);

--
-- Contraintes pour la table `regions`
--
ALTER TABLE `regions`
  ADD CONSTRAINT `regions_ibfk_1` FOREIGN KEY (`Num_departement`) REFERENCES `départements` (`Num_departement`);
