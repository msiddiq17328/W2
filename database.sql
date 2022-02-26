CREATE TABLE 
`jobs` ( 
`id` varchar(45) NOT NULL,
`job_title` varchar(45) DEFAULT NULL,
`company` varchar(45) DEFAULT NULL,
`salary_range` varchar(20) DEFAULT NULL,
`location` varchar(45) DEFAULT NULL,
`post_date` date DEFAULT NULL,
`apply_email` varchar(45) DEFAULT NULL,
`leave_type` varchar(45) DEFAULT NULL,
`createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`updatedAt` date DEFAULT NULL,
PRIMARY KEY (`id`)) ;