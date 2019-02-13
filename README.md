# pull-behavior

Pull Behavior is a lightweight and very simple mechanism to retrieve data from a module that cannot be referenced directly.
The PullBehavior needs to be a member in a class, and the class holder should set the pull function by calling the 'setPullMethod'.
then the inner class can use 'pull' method to get the pulled data.
For example: when module 'A' reference module 'B' and 'B' can't reference back to 'A' because of recursive issue.
but some time the module 'B' needs data from module 'A', then PullBehavior help us. the PullBehavior is a member in 'B'
and when 'A' creates 'B' it also init 'setPullMethod' and now 'B' can retrieve data from 'A'.
