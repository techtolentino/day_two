<!-- user object model -->

{
    userName: {
        "id": 230984732084,
        "firstName": "John", 
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "208ruoiofjoncdowiru82inwl",
        "team": "Some Team",
        "tasks": [
            {
                "title": "some task title",
                "status": false,
                "resource": "Bob Smith",
                "notes": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae repudiandae dicta harum at, corrupti dolorum impedit hic nulla adipisci suscipit id quasi sint, aliquam quod. Animi rerum voluptatibus possimus."
                "links": [
                    "name": "some link name",
                    "url": "http://some.link.url.com"
                ]
            }
        ]
    }
}


<!-- Task list object model -->

[
    {
        "title": "some task title",
        "isDone": false,
        "resource": "Bob Smith",
        "notes": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae repudiandae dicta harum at, corrupti dolorum impedit hic nulla adipisci suscipit id quasi sint, aliquam quod. Animi rerum voluptatibus possimus."
        "links": [
            "name": "some link name",
            "url": "http://some.link.url.com"
        ]
    }
]

<!-- Ideas -->
- Once a user is created, maybe, push a task list into the userName.tasks array, to pre-populate a user's tasks...
- Figure out a way for different teams to upload their own list of tasks
- If task is done, check the checkbox
  - new request
  - make request to DB, update isDone field, persist
  - Single checkbox form, maybe
  - Styled checkbox, animation
  - Timestamp?
