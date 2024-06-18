DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Classics'),('Fantasy'),('Mystery'),('Romance'),('Science');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES
('Watership Down', 'Richard Adams', '', 899, 0, TRUE, FALSE, 1002),
('Tales of Space and Time', 'H.G. Wells', '', 1349, 0, TRUE, FALSE, 1002),
('The Hobbit', 'J.R.R. Tolkien', '', 1599, 0, TRUE, FALSE, 1002),
('The Last Unicorn', 'Peter S. Beagle', '', 1299, 0, TRUE, FALSE, 1002),
('The Chronicles of Narnia', 'C.S. Lewis', '', 1699, 0, FALSE, FALSE, 1002),
('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', '', 1499, 0, TRUE, FALSE, 1002),
('The Name of the Wind', 'Patrick Rothfuss', '', 1799, 0, TRUE, FALSE, 1002),
('Mistborn: The Final Empire', 'Brandon Sanderson', '', 1599, 0, TRUE, FALSE, 1002),
('The Woman in White', 'Wilke Collins', '', 899, 0, TRUE, FALSE, 1003),
('The Adventures of Sherlock Holmes', 'Conan Doyle', '', 1399, 0, FALSE, FALSE, 1003),
('The Haunted House', 'Charles Dickens', '', 1799, 0, FALSE, FALSE, 1003),
('The Hound of the Baskervilles', 'Arthur Conan Doyle', '', 1599, 0, TRUE, FALSE, 1003),
('The Moonstone', 'Wilkie Collins', '', 1299, 0, TRUE, FALSE, 1003),
('Murder on the Orient Express', 'Agatha Christie', '', 1499, 0, TRUE, FALSE, 1003),
('And Then There Were None', 'Agatha Christie', '', 1299, 0, FALSE, FALSE, 1003),
('The Mystery of Edwin Drood', 'Charles Dickens', '', 1699, 0, FALSE, FALSE, 1003),
('Pride and Prejudice', 'Jane Austin', '', 699, 0, TRUE, FALSE, 1004),
('Sense and Sensibility', 'Jane Austen', '', 849, 0, TRUE, FALSE, 1004),
('Emma', 'Jane Austen', '', 799, 0, TRUE, FALSE, 1004),
('Persuasion', 'Jane Austen', '', 899, 0, TRUE, FALSE, 1004),
('Northanger Abbey', 'Jane Austen', '', 749, 0, TRUE, FALSE, 1004),
('Wuthering Heights', 'Emily Bronte', '', 899, 0, TRUE, FALSE, 1004),
('Jane Eyre', 'Charlotte Bronte', '', 799, 0, TRUE, FALSE, 1004),
('A Room with a View', 'E.M. Forster', '', 849, 0, TRUE, FALSE, 1004),
('The Time Machine', 'H.G. Wells', '', 899, 0, TRUE, FALSE, 1005),
('Neuromancer', 'William Gibson', '', 1399, 0, TRUE, FALSE, 1005),
('Jurassic Park', 'Michael Crichton', '', 1599, 0, TRUE, FALSE, 1005),
('Brave New World', 'Aldous Huxley', '', 1199, 0, TRUE, FALSE, 1005),
('Foundation', 'Isaac Asimov', '', 1299, 0, TRUE, FALSE, 1005),
('Dune', 'Frank Herbert', '', 1499, 0, TRUE, FALSE, 1005),
('The Martian', 'Andy Weir', '', 1099, 0, TRUE, FALSE, 1005),
('The Andromeda Strain', 'Michael Crichton', '', 1499, 0, TRUE, FALSE, 1005),
('Frankenstein', 'Mary Shelley', '', 999, 0, TRUE, FALSE, 1001),
('The Raven', 'Edgar Allan Poe', '', 799, 0, TRUE, FALSE, 1001),
('The Great Gatsby', 'F. Scott Fitzgerald', '', 1199, 0, FALSE, FALSE, 1001),
('Les Misérables', 'Victor Hugo', '', 1399, 0, TRUE, FALSE, 1001),
('Anna Karenina', 'Leo Tolstoy', '', 1299, 0, TRUE, FALSE, 1001),
('Crime and Punishment', 'Fyodor Dostoevsky', '', 1499, 0, TRUE, FALSE, 1001),
('The Picture of Dorian Gray', 'Oscar Wilde', '', 1099, 0, TRUE, FALSE, 1001),
('Lord of the Flies', 'William Golding', '', 1299, 0, FALSE, FALSE, 1001);
