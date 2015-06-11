# intern-cms

### Project Setup
These install instructions are based on running Postgres.app version 9.4 on Mac OSX Yosemite. 


Python has a utility called virtualenv that is intended to keep python packages installed for projects separate from other projects and from python packages installed on your system. To set up python's virtualenv, run

```
sudo pip install -r virtual.txt
```


To set up the system for running Python's virtualenv and add Postgres.app to the $PATH, append .bash_profile to your systems .bash_profile with

```
cat .bash_profile >> ~/.bash_profile 
```


Once virtualenv is installed, create a virtualenv called intern-cms by running

```
mkvirtualenv intern-cms
```
then install the project packages by running

```
pip install -r requirements.txt
```


To deactivate the virtualenv, run the command ```deactivate ``` from the terminal. To activate the virtualenv run ``` workon {virtualenv name} ```. In this case the virtualenv name is intern-cms, so you'll run ```workon intern-cms ```.



To create the kiosk_cms database in PostGres, from the repo root run

```
bash postgres.sh
```

Then cd into Kiosk_cms and run a DB migration with

```
python manage.py migrate
```
#
