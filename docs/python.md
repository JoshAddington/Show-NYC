First, get Python's package installer called pip by downloading [get-pip.py](https://bootstrap.pypa.io/get-pip.py) and running with `python get-pip.py`.

Python has a utility called virtualenv that is intended to keep python packages installed for projects separate from other projects and from python packages installed on your system. Install virtualenv and virtualenvwrapper with

```
sudo pip install virtualenv virtualenvwrapper
```


To set up the system for running Python's virtualenv and add Postgres.app to the $PATH, append the included .bash_profile to your systems .bash_profile with

```
cat .bash_profile >> ~/.bash_profile 
```


Next, create a virtualenv called intern-cms by running

```
mkvirtualenv intern-cms
```
We will be installing all our packages in this virtualenv because it keeps these packages from interfering with the rest of our system. Since we're installing our packages in the virtualenv, we'll also need to interact with Django from this virtualenv, which means the virtualenv needs to be running any time we run the local server.

To deactivate the virtualenv, run 
```
deactivate
```

to enable the virtualenv, run 
```
workon intern-cms
```