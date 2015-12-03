
How to start the site in development
------------------------------------

  Go to the terminal and cd to the project directory and run this command.
  (the $ symbol just represents the command prompt don't type that.)

    $ python -m SimpleHTTPServer

    and then you view your website at the address

       localhost:8000


How to push up further changes to the code
------------------------------------------

Add any new files that aren't in git.

  $ git add .

Commit (aka save) your latest changes into your local git folder.
Give it your own useful message of what new feature is now in there.
(Imagine you were on a big team/just helping future you know what you did)

  $ git commit -am "Added image to footer"

Push up the changes to github

  $ git push
