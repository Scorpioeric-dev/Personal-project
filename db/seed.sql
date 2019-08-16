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


DROP TABLE video;
CREATE TABLE video(
video_id SERIAL PRIMARY KEY,
user_id integer REFERENCES users(user_id),
video_data TEXT,
video_likes integer DEFAULT 0,
video_date date not null default current_date,
video_display boolean);

INSERT INTO video(user_id,video_data,video_likes)
VALUES(1,'https://www.youtube.com/watch?v=JF8BRvqGCNs',0);

