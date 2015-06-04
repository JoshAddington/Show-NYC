# intern-cms

To set up python's virtualenv, run
```
pip install -r virtual.txt
```

When virtualenv is installed, create a virtualenv called intern-cms by running
```
mkvirtualenv intern-cms
```
and then install the project packages by running

``` 
pip install -r requirements.txt
```

To set up the Postgres database, in console run
```
bash postgres.sh
```
 from the repo root.

Then run
```
python manage.py migrate
```
 to run the DB migration.
