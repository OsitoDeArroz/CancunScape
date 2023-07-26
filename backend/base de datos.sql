CREATE DATABASE CancunScape CHARACTER SET utf8 COLLATE utf8_general_ci;
USE CancunScape;

CREATE TABLE rol (
  id_rol INT(1) NOT NULL PRIMARY KEY, 
  nombre_rol VARCHAR(50) NOT NULL
);
INSERT INTO rol (id_rol, nombre_rol) 
VALUES 
  (1, 'administrador'), 
  (2, 'cliente');
CREATE TABLE usuario (
  id_usuario INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  nombre_completo VARCHAR(100) NOT NULL, 
  correo_electronico VARCHAR(100) NOT NULL, 
  password_usuario VARCHAR(255) NOT NULL, 
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  contacto INT(10), 
  id_rol_id INT(1) NOT NULL, 
  FOREIGN KEY (id_rol_id) REFERENCES rol(id_rol)
);
INSERT INTO usuario (
  nombre_completo, correo_electronico, 
  password_usuario, contacto, id_rol_id
) 
VALUES 
  (
    'Abiud Garduza Mejia', 
    'abiudgarduza93@gmail.com', 
    AES_ENCRYPT('13122003A', '13122003A'), 
    9982242489, 
    2
  );
CREATE TABLE tours (
  id_tours INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
  nombre_tours VARCHAR(100) NOT NULL, 
  descripcion_tours VARCHAR(500) NOT NULL, 
  fecha_y_hora DATETIME NOT NULL, 
  duracion INT NOT NULL, 
  lugar VARCHAR(300) NOT NULL, 
  imagen TEXT, 
  precio int not null
);
INSERT INTO tours (
  id_tours, nombre_tours, descripcion_tours, 
  fecha_y_hora, duracion, lugar, imagen, 
  precio
) 
VALUES 
  (
    1, "Parque Xplor con todo incluido", 
    "No dejes pasar la oportunidad de visitar el parque más famoso del mundo en su tipo, Para que no te pierdas ni un minuto de este día lleno de aventuras y actividades, te recogemos temprano en tu hotel y después de cerca de una hora de viaje llegas al Parque Xplor, en el corazón de la selva. A partir de aquí, pura adrenalina, hamacuatizar, deslizarte en tirolesas, recorrer la selva en vehículos anfibios, pasear por cavernas donde ves las antiguas formaciones de estalactitas y estalagmitas en los r", 
    "2023-07-24 00:00:00", 8, "Xcaret", 
    "https://media.staticontent.com/media/pictures/cffb3370-2a72-4c94-8f6e-1c9e7e4f6335/1366x406", 
    3193
  ), 
  (
    2, "Tour Snorkel Cozumel, Bahía El Cielo & Playa Mia", 
    "Las impresionantes vistas de los brillantes arrecifes de coral del arrecife Palancar y nadar con simpáticos animales acuáticos son el comienzo perfecto para un día lleno de aventuras y relajación. A continuación, podrá flotar a través de las aguas tranquilas y cristalinas de la Bahía El Cielo y observar hermosas estrellas de mar. Termine su día con una comida satisfactoria y relajación en las arenas blancas de Playa Mia Beach.", 
    "2023-07-24 00:00:00", 2, "Xcaret", 
    "https://media.staticontent.com/media/pictures/86927f27-a23e-4d1e-b21f-26273153961a/950x696", 
    2140
  ), 
  (
    3, "Jungle Tour", "El Jungle Tour de Marina Aquatours es descrito como una de las actividades más recordadas y espectaculares por los viajeros. Conoces la Laguna Nichupté? Es una maravilla natural que se une al hermoso Mar Caribe y rodea la Zona Hotelera, donde tendrás la posibilidad de recorrerla a toda velocidad con un speedboat. Siente la brisa de la laguna y atrévete a adentrarte por los manglares.", 
    "2023-07-24 00:00:00", 2, "Laguna Nichupté", 
    "https://media.staticontent.com/media/pictures/a40231d4-9877-477d-988b-10215e3df14b/950x696", 
    649
  ), 
  (
    4, "Tulum Tour Express", "En este maravilloso tour te llevaremos a conocer la increíble zona arqueológica de Tulum, el más famoso asentamiento Maya a las orillas del mar, desde aquí podrás observar las bellas aguas turquesa del Caribe Mexicano.", 
    "2023-07-24 00:00:00", 6, "Tulum", 
    "https://media.staticontent.com/media/pictures/a6fa1bce-10f8-4477-a35e-3e96db409ff1/950x696", 
    647
  ), 
  (
    5, "Parque Xel-Ha todo incluido", 
    "En esta actividad puedes bañarte en caletas, cenotes y lagunas, en medio de un paisaje incomparable, uno de los más bellos de Cancún y la Riviera Maya. Este parque es el paraíso del snorkel, con muchas actividades y mucha diversión. Tienes además tirolesas, saltos al agua desde la Piedra del Valor, recorrido sobre llantas por el río y paseos en bicicleta a través de la selva.", 
    "2023-07-24 00:00:00", 10, "Xel-Ha", 
    "https://media.staticontent.com/media/pictures/2cf5af74-2541-4d8a-baf6-70e74fda8eb1/950x696", 
    647
  );
CREATE TABLE reservas (
    id_reservas INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cantidad_reservas INT(2) NOT NULL,
    precio_unitario DECIMAL(10 , 2 ) NOT NULL,
    cant_adultos INT(2) NOT NULL,
    cant_ninos INT(2),
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario_id INT(11) NOT NULL,
    id_tours_id INT NOT NULL,
    FOREIGN KEY (id_usuario_id)
        REFERENCES usuario (id_usuario),
    FOREIGN KEY (id_tours_id)
        REFERENCES tours (id_tours)
);


DELIMITER //
CREATE PROCEDURE sp_mostrartours()
BEGIN
    SELECT * FROM tours;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_eliminartours(IN p_id_tours INT)
BEGIN
    DELETE FROM tours WHERE id_tours = p_id_tours;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_actualizartours(
    IN p_id_tours INT,
    IN p_nombre_tours VARCHAR(100),
    IN p_descripcion_tours VARCHAR(500),
    IN p_fecha_y_hora DATETIME,
    IN p_duracion INT,
    IN p_lugar VARCHAR(300),
    IN p_imagen TEXT,
    IN p_precio int
)
BEGIN
    UPDATE tours
    SET nombre_tours = p_nombre_tours,
        descripcion_tours = p_descripcion_tours,
        fecha_y_hora = p_fecha_y_hora,
        duracion = p_duracion,
        lugar = p_lugar,
        imagen = p_imagen,
        precio = p_precio
    WHERE id_tours = p_id_tours;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_insertartours(
    IN p_nombre_tours VARCHAR(100),
    IN p_descripcion_tours VARCHAR(500),
    IN p_fecha_y_hora DATE,
    IN p_duracion TIME,
    IN p_lugar VARCHAR(300),
    IN p_imagen TEXT,
    IN p_precio INT
)
BEGIN
    INSERT INTO tours (nombre_tours, descripcion_tours, fecha_y_hora, duracion, lugar, imagen, precio)
    VALUES (p_nombre_tours, p_descripcion_tours, p_fecha_y_hora, p_duracion, p_lugar, p_imagen, p_precio);
END
DELIMITER ;

/usuarios/(
DELIMITER //
CREATE PROCEDURE sp_mostrarusuarios()
BEGIN
    SELECT usuario.nombre_completo, usuario.correo_electronico, usuario.password_usuario, usuario.fecha_registro, usuario.contacto, rol.nombre_rol
    FROM usuario
    INNER JOIN rol ON usuario.id_rol_id = rol.id_rol;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_eliminarusuario(IN p_id_usuario INT)
BEGIN
    DELETE FROM usuario WHERE id_usuario = p_id_usuario;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_actualizarusuario(
  IN  p_id_usuario INT(11),
 IN p_nombre_completo VARCHAR(100),
  IN p_correo_electronico VARCHAR(100),
 IN p_password_usuario VARCHAR(255),
 IN p_contacto INT(10),
 IN p_id_rol_id INT(1)
)
BEGIN
    UPDATE tours
    SET
        nombre_completo = p_nombre_completo,
        correo_electronico = p_correo_electronico,
        password_usuario = p_password_usuario,
        contacto = p_contacto,
        id_rol_id = 2
    WHERE id_usuario = p_id_usuario;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_insertarusuario(
 IN p_nombre_completo VARCHAR(100),
  IN p_correo_electronico VARCHAR(100),
 IN p_password_usuario VARCHAR(255),
 IN p_contacto INT(10)
 )
 BEGIN 
 INSERT INTO usuario (nombre_completo, correo_electronico, password_usuario, fecha_registro, contacto, id_rol_id)
 VALUES (p_nombre_completo, p_correo_electronico, AES_ENCRYPT(p_password_usuario,"psswd"), NOW(),
 p_contacto, 2);
 END //
 DELIMITER ;
 )
/reservas/(
DELIMITER //
 CREATE PROCEDURE sp_mostrarreservas (IN p_id_usuario INT)
 BEGIN 
 SELECT DATE_FORMAT(reservas.fecha_reserva, '%Y-%m-%d') as fecha, usuario.nombre_completo, tours.nombre_tours, reservas.cant_adultos, reservas.cant_ninos, reservas.precio_unitario, tours.imagen, reservas.id_reservas, reservas.id_tours_id
 FROM reservas
 INNER JOIN usuario ON reservas.id_usuario_id = usuario.id_usuario
 INNER JOIN tours ON reservas.id_tours_id = tours.id_tours
 WHERE reservas.id_usuario_id = p_id_usuario;
 END //
 DELIMITER ;
 
 DELIMITER //
 CREATE PROCEDURE sp_eliminarreservas( IN p_id_reservas INT)
 BEGIN
 DELETE FROM reservas WHERE id_reservas = p_id_reservas;
 END //
 DELIMITER ;
 
 DELIMITER //
 CREATE PROCEDURE sp_actualizarreservas (
 IN p_id_reservas INT, 
 IN p_fecha_reserva TIMESTAMP, 
 IN p_id_usuario_id INT(11), 
 IN p_id_tours_id INT,
 IN p_adultos INT,
 IN p_ninos INT
 )
BEGIN
 UPDATE reservas 
 SET fecha_reserva = p_fecha_reserva,
 id_usuario_id = p_id_usuario_id,
 id_tours_id = p_id_tours_id,
 cant_adultos = p_adultos,
 cant_ninos = p_ninos
 WHERE id_reservas = p_id_reservas;
 END//
 DELIMITER ;
 
 DELIMITER //
 CREATE PROCEDURE sp_insertarreserva(
 IN p_fecha_reserva TIMESTAMP,
 IN p_id_usuario_id INT(11),
 IN p_id_tours_id INT,
 IN p_adultos INT,
 IN p_ninos INT,
 IN p_unitario DECIMAL(10,2)
 )
BEGIN
 INSERT INTO reservas (fecha_reserva, id_usuario_id, id_tours_id, precio_unitario, cant_adultos, cant_ninos)
	VALUES (p_fecha_reserva, p_id_usuario_id, p_id_tours_id, p_unitario, p_adultos, p_ninos);
 END //
 DELIMITER ;
 
DELIMITER //
 CREATE PROCEDURE sp_mostrartourid( IN p_id_tour INT )
 BEGIN
	SELECT * FROM tours WHERE id_tours = p_id_tour;
 END //
 DELIMITER ;
 
 DELIMITER //
 CREATE PROCEDURE sp_mostrarusuariorid( IN p_id_user INT )
 BEGIN
	SELECT * FROM usuario WHERE id_usuario = p_id_user;
 END
 DELIMITER ;
 
DELIMITER $$
CREATE PROCEDURE sp_mostrarusuarioporid( IN p_id_usuario INT )
BEGIN
	SELECT * FROM usuarios WHERE id_usuario = p_id_usuario;
 END$$
DELIMITER ;

 DELIMITER //
 CREATE PROCEDURE sp_insertartour( IN nombre VARCHAR(100), IN descripcion VARCHAR(500), IN p_fecha DATETIME, IN p_duracion INT, IN p_lugar VARCHAR(300), IN p_imagen TEXT, IN p_precio INT)
 BEGIN
	INSERT INTO tours ( nombre_tours, descripcion_tours, fecha_y_hora, duracion, lugar, imagen,  precio) VALUES (nombre, descripcion, p_fecha, p_duracion, p_lugar, p_imagen, p_precio);
 END//
 DELIMITER ;