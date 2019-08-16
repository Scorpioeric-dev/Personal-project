INSERT INTO
  video(user_id, video_data, video_likes)
VALUES(${user_id},${video_data},${video_likes})
 RETURNING *;