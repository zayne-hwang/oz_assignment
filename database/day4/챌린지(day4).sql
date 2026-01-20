CREATE DATABASE pet_hotel_booking;
USE pet_hotel_booking;
CREATE TABLE rooms(
	id INT PRIMARY KEY AUTO_INCREMENT,
    room_num INT         
);

CREATE TABLE owners(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(5),
    phone INT
);

AlTER TABLE owners
MODIFY phone VARCHAR(20);

CREATE TABLE pets(
	id INT PRIMARY KEY AUTO_INCREMENT,
    owner_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    
    FOREIGN KEY (owner_id) REFERENCES owners(id)
);

DROP DATABASE pet_hotel_booking;

CREATE DATABASE pet_hotel_booking;

USE pet_hotel_booking;

CREATE TABLE rooms(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(20) NOT NULL,
    capacity INT NOT NULL,
    price_per_day INT NOT NULL
);

CREATE TABLE owners(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    
    UNIQUE (phone)
);

CREATE TABLE pets(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    owner_id BIGINT NOT NULL,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(20) NOT NULL,
    
    FOREIGN KEY(owner_id) REFERENCES owners(id)
);

CREATE TABLE reservations(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    room_id BIGINT NOT NULL,
    pet_id BIGINT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    
    FOREIGN KEY(room_id) REFERENCES rooms(id),
    FOREIGN KEY(pet_id) REFERENCES pets(id)
);

CREATE TABLE services(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    reservation_id BIGINT NOT NULL,
    
    FOREIGN KEY(reservation_id) REFERENCES reservations(id)
);