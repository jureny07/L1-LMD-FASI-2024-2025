CREATE DATABASE IF NOT EXISTS amani;
USE amani;

-- Table des véhicules
CREATE TABLE vehicules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marque VARCHAR(50),
    modele VARCHAR(50)
);

-- Table des pièces
CREATE TABLE pieces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prix DECIMAL(10,2)
);

-- Table de compatibilité
CREATE TABLE compatibilites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_vehicule INT,
    id_piece INT,
    FOREIGN KEY (id_vehicule) REFERENCES vehicules(id),
    FOREIGN KEY (id_piece) REFERENCES pieces(id)
);

-- Insertion de quelques véhicules
INSERT INTO vehicules (marque, modele) VALUES
('Toyota', 'Corolla'),
('Renault', 'Clio'),
('Peugeot', '208');

-- Insertion de quelques pièces
INSERT INTO pieces (nom, prix) VALUES
('Filtre à air', 15.00),
('Plaquettes de frein', 30.00),
('Batterie 12V', 90.00),
('Ampoule H7', 8.50);

-- Insertion des compatibilités
INSERT INTO compatibilites (id_vehicule, id_piece) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 4),
(3, 3);