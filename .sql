CREATE TABLE IF NOT EXISTS games(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
rating INTEGER NOT NULL,
url TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS comments(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
user_id INTEGER NOT NULL,
game_id INTEGER NOT NULL,
message TEXT NOT NULL,
likes INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS replies(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
message TEXT NOT NULL,
message_id INTEGER NOT NULL,
likes INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS genres(
id SERIAL PRIMARY KEY,
genre VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
)

INSERT INTO genres(genre) 
VALUES
('Action'),
('Adventure'),
('Role-Playing'),
('Simulation'),
('Strategy'),
('Sports'),
('Racing'),
('Fighting'),
('Horror'),
('Puzzle')

INSERT INTO games(name, rating, url, genre_id)
VALUES
('Assassin''s Creed Valhalla', 8.5, 'https://i.ytimg.com/vi/ptLsWhqLp-I/maxresdefault.jpg', 1),
('The Legend of Zelda: Breath of the Wild', 9.7, 'https://zelda.nintendo.com/breath-of-the-wild/assets/img/media/wallpaper-1-thumb.jpg', 2),
('The Witcher 3: Wild Hunt', 9.8, 'https://static.cdprojektred.com/thewitcher.com/gfx/witcher3/thumbnail-tw.jpg', 3),
('The Sims 4', 8.0, 'https://www.godisageek.com/wp-content/uploads/The-Sims-4-release-date.jpg', 4),
('Civilization VI', 9.0, 'https://img.opencritic.com/game/2719/o/weCFVwWu.jpg', 5),
('FIFA 22', 8.2, 'https://1.bp.blogspot.com/-rRGVEvKDygk/YRk1So1jTjI/AAAAAAAAJ8g/8fcErtAy150XqQrNHJM2LjIUw_MEz-ZrgCPcBGAsYHg/w919/fifa-22-mbappe-4k-uhdpaper.com-130.1_b-thumbnail.jpg', 6),
('Need for Speed: Heat', 7.5, 'https://sm.ign.com/ign_in/screenshot/default/nfsh-003_vuaa.jpg', 7),
('Street Fighter V', 8.4, 'https://community.tm/attachments/thumb-077-street-fighter-v-1-jpg.15907/', 8),
('Resident Evil Village', 8.9, 'https://i.pinimg.com/550x/89/ca/d1/89cad17892ad06e943fbcd167ae0d436.jpg', 9),
('Tetris Effect', 9.5, 'https://i.ytimg.com/vi/tOtyZZPbOoc/maxresdefault.jpg', 10)

INSERT INTO Comments (Name, User_ID, Game_ID, Message, Likes) VALUES
('Commenter1', 1, 1, 'Great game! Loved the storyline.', 8),
('Commenter2', 2, 1, 'The graphics are stunning!', 15),

('Commenter3', 3, 2, 'Breath of the Wild is a masterpiece.', 12),
('Commenter4', 4, 2, 'Spent hours exploring Hyrule!', 7),

('Commenter5', 5, 3, 'The Witcher 3 is an epic adventure!', 10),
('Commenter6', 6, 3, 'Geralt is my favorite character.', 4),

('Commenter7', 7, 4, 'The Sims 4 is so addictive!', 6),
('Commenter8', 8, 4, 'Built my dream house in the game.', 3),

('Commenter9', 9, 5, 'Civilization VI strategy is challenging!', 9),
('Commenter10', 10, 5, 'Gandhi nuked me again...', 2),

('Commenter11', 11, 6, 'FIFA 22 has realistic gameplay.', 5),
('Commenter12', 12, 6, 'Scored an amazing goal in my last match!', 8),

('Commenter13', 13, 7, 'Need for Speed: Heat has intense races.', 7),
('Commenter14', 14, 7, 'Customizing cars is so much fun!', 11),

('Commenter15', 15, 8, 'Street Fighter V combos are challenging.', 3),
('Commenter16', 16, 8, 'Competitive fighting at its best!', 6),

('Commenter17', 17, 9, 'Resident Evil Village scared me!', 14),
('Commenter18', 18, 9, 'The atmosphere is so creepy.', 9),

('Commenter19', 19, 10, 'Tetris Effect is a mesmerizing experience.', 12),
('Commenter20', 20, 10, 'The music enhances the gameplay.', 5)
