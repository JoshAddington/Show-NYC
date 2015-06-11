createdb kiosk_cms
psql -d postgres -c "create user intern with createrole superuser password '"'"'cgrocks'"'"';"
