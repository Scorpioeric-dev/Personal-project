 DROP TABLE IF EXISTS users;


CREATE TABLE users (
user_id	SERIAL PRIMARY KEY,
username	Varchar(50),
password	Varchar(50),
user_img	Varchar(5000),
hash	TEXT,
email	varChar(50));

INSERT INTO users(username,user_img,hash,email)
VALUES('Eric','Text','kudhgliuh','eric@gmail.com');

SELECT * FROM users
WHERE email = 'eric@gmail.com';



CREATE TABLE video(
video_id SERIAL PRIMARY KEY,
user_id integer REFERENCES users(user_id),
video_likes integer DEFAULT 0,
video_date timestamp,
video_display boolean);


SELECT * FROM video;

