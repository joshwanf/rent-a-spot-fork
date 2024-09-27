const bcrypt = require("bcryptjs");
const demoUsers = [
  { username: 'john.doe', email: 'john.doe@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'John', lastName: 'Doe' },
  { username: 'jane.smith', email: 'jane.smith@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Jane', lastName: 'Smith' },
  { username: 'alice.johnson', email: 'alice.johnson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Alice', lastName: 'Johnson' },
  { username: 'bob.brown', email: 'bob.brown@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Bob', lastName: 'Brown' },
  { username: 'charlie.davis', email: 'charlie.davis@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Charlie', lastName: 'Davis' },
  { username: 'diana.miller', email: 'diana.miller@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Diana', lastName: 'Miller' },
  { username: 'eve.garcia', email: 'eve.garcia@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Eve', lastName: 'Garcia' },
  { username: 'frank.martinez', email: 'frank.martinez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Frank', lastName: 'Martinez' },
  { username: 'grace.hernandez', email: 'grace.hernandez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Grace', lastName: 'Hernandez' },
  { username: 'heidi.lopez', email: 'heidi.lopez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Heidi', lastName: 'Lopez' },
  { username: 'ivan.gonzalez', email: 'ivan.gonzalez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Ivan', lastName: 'Gonzalez' },
  { username: 'judy.wilson', email: 'judy.wilson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Judy', lastName: 'Wilson' },
  { username: 'karl.anderson', email: 'karl.anderson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Karl', lastName: 'Anderson' },
  { username: 'lara.thomas', email: 'lara.thomas@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Lara', lastName: 'Thomas' },
  { username: 'mike.taylor', email: 'mike.taylor@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Mike', lastName: 'Taylor' },
  { username: 'nina.moore', email: 'nina.moore@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Nina', lastName: 'Moore' },
  { username: 'oscar.jackson', email: 'oscar.jackson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Oscar', lastName: 'Jackson' },
  { username: 'paul.martin', email: 'paul.martin@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Paul', lastName: 'Martin' },
  { username: 'quinn.lee', email: 'quinn.lee@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Quinn', lastName: 'Lee' },
  { username: 'rachel.perez', email: 'rachel.perez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Rachel', lastName: 'Perez' },
  { username: 'sam.thompson', email: 'sam.thompson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Sam', lastName: 'Thompson' },
  { username: 'tina.white', email: 'tina.white@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Tina', lastName: 'White' },
  { username: 'ursula.harris', email: 'ursula.harris@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Ursula', lastName: 'Harris' },
  { username: 'victor.clark', email: 'victor.clark@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Victor', lastName: 'Clark' },
  { username: 'wendy.lewis', email: 'wendy.lewis@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Wendy', lastName: 'Lewis' },
  { username: 'xena.robinson', email: 'xena.robinson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Xena', lastName: 'Robinson' },
  { username: 'yvonne.walker', email: 'yvonne.walker@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Yvonne', lastName: 'Walker' },
  { username: 'zach.hall', email: 'zach.hall@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Zach', lastName: 'Hall' },
  { username: 'aaron.allen', email: 'aaron.allen@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Aaron', lastName: 'Allen' },
  { username: 'bella.young', email: 'bella.young@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Bella', lastName: 'Young' },
  { username: 'chris.king', email: 'chris.king@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Chris', lastName: 'King' },
  { username: 'diana.scott', email: 'diana.scott@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Diana', lastName: 'Scott' },
  { username: 'eli.green', email: 'eli.green@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Eli', lastName: 'Green' },
  { username: 'fiona.adams', email: 'fiona.adams@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Fiona', lastName: 'Adams' },
  { username: 'gavin.baker', email: 'gavin.baker@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Gavin', lastName: 'Baker' },
  { username: 'hannah.gonzalez', email: 'hannah.gonzalez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Hannah', lastName: 'Gonzalez' },
  { username: 'isaac.nelson', email: 'isaac.nelson@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Isaac', lastName: 'Nelson' },
  { username: 'julia.carter', email: 'julia.carter@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Julia', lastName: 'Carter' },
  { username: 'kevin.mitchell', email: 'kevin.mitchell@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Kevin', lastName: 'Mitchell' },
  { username: 'laura.perez', email: 'laura.perez@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Laura', lastName: 'Perez' },
  { username: 'mason.roberts', email: 'mason.roberts@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Mason', lastName: 'Roberts' },
  { username: 'nora.turner', email: 'nora.turner@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Nora', lastName: 'Turner' },
  { username: 'oliver.phillips', email: 'oliver.phillips@example.com', hashedPassword: bcrypt.hashSync('password123'), firstName: 'Oliver', lastName: 'Phillips' }
];

const oldUsers = [
  {
    email: 'demo@user.io',
    username: 'Demo-lition',
    hashedPassword: bcrypt.hashSync('password'),
    firstName: 'Demo',
    lastName: 'User',
  },
  {
    email: 'user1@user.io',
    username: 'FakeUser1',
    hashedPassword: bcrypt.hashSync('password2'),
    firstName: 'Fake',
    lastName: 'User1',
  },
  {
    email: 'user2@user.io',
    username: 'FakeUser2',
    hashedPassword: bcrypt.hashSync('password3'),
    firstName: 'Fake',
    lastName: 'User2',
  }
];

module.exports = {
  demoUsers,
  oldUsers
};