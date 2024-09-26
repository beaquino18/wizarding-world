Build an application modelling a Hogwarts Free Library. The Library will hold a maximum of 15 books. Design a system where a user can interact with this lirbrary in a number of ways.

The user must be able to Look into the Library and see each book inside the Library. Every Book in the Library must have a Title, an Author, and a Page Count.

The user must be able to Take a book from the Library. When a book is taken from the library it should NOT appear in its list of books inside the Library. The taken book will be added to the Users list of current books.

The user must be able to Place a book inside the Library. A book can only be placed in the Library if it is in the users current list of books, placing it inside removes it from the user. The book must fit inside the Library based on its maximum amount of books or it cannot be placed inside.

Core Requirements:

- All books have the following properties:
  - Title
  - Author
  - PageCount
- The Library has a maximum of 15 books
- A user can look inside the library
- A user can take a book from the library
- A user can return a book to the library
- The user must already be holding at least 1 book of their own when the application starts
- Only valid inputs are accepted. If an invalid input is given, prompt the user to input again

Option Challenges:

- How can you ensure that the books won't reset once you exit the program?
- What areas could be optimized to be more DRY and reusable?
