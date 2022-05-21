# Weekly Mission 4

Vamos a empezar

que aprendi hoy:


***Push Files in Specific Folder on Github***

When working in a team, sometimes you want to upload your files into the repository without messing your teammates files.

Here are some ways to work in your own folder on Github repository:

1. Switch Branch

git checkout branch_name

2. Update Files in 1 Folder

Update files on the remote repo so the contents of the files are same as in your local repo.

git fetch remote_repo branch_name

git checkout remote_repo/branch_name folder_name

3. Push 1 Folder Immediately

You can push folder contains of files or/and folder with command:

git add ./folder_name

git commit -m “your_commit_message_text”

git push remote_repo branch_name

Thanks for reading.
