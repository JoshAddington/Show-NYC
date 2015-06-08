# intern-cms

### Project Setup
First copy .bash_profile to your root directory with

```
cp .bash_profile ~/
```

To set up python's virtualenv, run

```
sudo pip install -r virtual.txt
```

Once virtualenv is installed, create a virtualenv called intern-cms by running

```
mkvirtualenv intern-cms
```
then install the project packages by running

```
pip install -r requirements.txt
```

To set up the Postgres database, from the repo root run

```
bash postgres.sh
```

Then run a DB migration with

```
python manage.py migrate
```
#
