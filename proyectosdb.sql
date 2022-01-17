-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-01-2022 a las 21:49:20
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(255) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(40) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `tipo_de_usuario` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `telefono`, `password`, `tipo_de_usuario`) VALUES
('0f57457a-5bac-4a51-97b0-766ffbcfaa12', 'Igor', 'Lactvinsky', 'ilacht@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$NwwPBCh02Mxd8srGI6BR8A$gBo0gJfkHLph7d5RGrcTLbDFnxmI112T6ESwZZeB3C0', 0),
('19f26f16-f499-41db-944d-e4941d57362b', 'Ana', 'Lafrita', 'analafrita@gmail.com', '0351-6352854', 'aAhgn4567LL', 0),
('2def4be4-84b1-4c4b-8b4c-d0d5dae72fa5', 'Jose', 'Perez', 'joseperez@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$f62wn6lWCLMuFIClUgwaSg$o0ZTjTyKFqlJRAR+HRxUFkcmrXVbMFTSYVYsfohQYBs', 0),
('3440d80d-390b-4dd4-b485-4c7631a00d4a', 'Alvaro', 'Recoba', 'arecoba@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$Ot3VVmNCNMhfQi7ZlboP9w$PZP7gPTNJtCoNpc5TLcCbWFw6qODPzU3XP6CBFn1DQw', 1),
('349b2509-eabc-40cd-8d95-1041cc1f2b07 ', 'Vernon', 'Gimenez', 'vernongimenez@gmailcom', '02652-6532856', 'awerd456FgjkJ', 0),
('34c9ba0e-30e3-4c98-8ad8-7c5518f9aaf0', 'Carolina', 'Ormond', 'caroormond@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$lnMn2g/mBGHNqi64KdsjEg$NN9lSz8gEDaSLgxrA6P08i/Q3xUMmxh4CEFQcS31Jzc', 0),
('584505a5-cdd9-44e4-9bb3-8762315ca688', 'Sonya', 'Demortalkomba', 'sonyadmk@gmail.com', NULL, 'FbNu568', 0),
('5f1af738-8c37-49f8-bfd3-6545c0ffe0bf', 'Goro', 'Demortalkomba', 'gorodmk@gmail.com', NULL, 'TTThyt7', 0),
('6552a698-e5d1-42b9-8421-f4de266b91c7', 'Lorena', 'Sorlepini', 'loresorlepini@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$+sqDZqrEOWb9YFkgJJKm4Q$xnoK+LP8cwQOZEw4n2kJSBQOxybMTw6VhcJItPr3wK8', 0),
('774c6e47-f09a-494c-a4fb-5a3596482e9a', 'Jose', 'Perez', 'joseperez2@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$oiQ9Q5Cnke2NJIOmUO9mgA$8zndHUV8612hWtrVFNV4nhm+XJugaGFCfrmHgBpEff0', 0),
('938d14ea-f16b-40bb-a7a3-5fce3f1e4233', 'Karina', 'Komoro', 'kkomoro@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$NB4LpJVyOmuf+5mH3Q7RiA$1eveua+4jf6eOh1pU5rJFIa2iMCrVIqLqL7BQjgrGr8', 0),
('c84f34b9-9fa7-4b7b-abdf-6753a3d7299d', 'Hector', 'Ladorrea', 'hectorladorrea@gmail.com', NULL, '885HHjksl12', 0),
('dba3b685-4b7f-4b84-a59f-a90a8d1d2b73', 'Giovanni', 'Giorgio', 'giovannigiorgio@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$jVMTP9WspQYS5dWEbuJ6eA$2znc1uTcbNYsn84tntVewMIgLDs8OhCUQ/TwsCWorEU', 0),
('e1d73225-6384-41f7-92c9-19a5999f9417', 'Juan Carlos', 'Sobotabat', 'jcsobotabat@gmail.com', NULL, '134YUijkO99', 0),
('e4611215-1c62-41e4-8d2c-4c10b401daf0', 'Julio', 'Clomens', 'julioclomens@gmail.com', '0341-67852745', 'pKm34m56', 0),
('ed57f2b8-4dfe-4601-b673-29367172e869', 'Jacinto', 'Pichimahuido', 'jpichimahuido@gmail.com', NULL, '$argon2id$v=19$m=1024,t=2,p=1$EuanJb9+gKCE9AnsB7vQnA$bFm4nUtkT30yBTkhu0Mm99Gz/HG7bK7IOvTk7HVSih0', 0),
('f625252e-4ffd-4243-a2d1-227bdb1e54c8', 'Karina', 'Garompa', 'kgarompa@gmail.com', NULL, 'Kgm556Kmg', 0),
('f9c71991-1716-4bf7-865d-5ed5f4050854', 'Amigo', 'Ramirez', 'aramirez@gmail.com', NULL, 'ghJh83F', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
