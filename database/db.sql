CREATE TABLE `retho`.`retho` ( `id` INT(11) NOT NULL , 
                            `rfc` VARCHAR(13) NOT NULL , 
                            `curp` VARCHAR(18) NOT NULL , 
                            `nombre` VARCHAR(50) NOT NULL , 
                            `password` VARCHAR(13) NOT NULL , 
                            `isAdmin` TINYINT(1) NOT NULL ) ENGINE = InnoDB;