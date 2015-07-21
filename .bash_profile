PATH="/Applications/Postgres.app/Contents/Versions/9.4/bin:${PATH}"

# set where virutal environments will live
export WORKON_HOME=$HOME/.virtualenvs

# ensure all new environments are isolated from the site-packages directory
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS='--no-site-packages'

# use the same directory for virtualenvs as virtualenvwrapper
export PIP_VIRTUALENV_BASE=$WORKON_HOME

# makes pip detect an active virtualenv and install to it
export PIP_RESPECT_VIRTUALENV=true

if [[ -r $(which virtualenvwrapper.sh) ]]; then
    source $(which virtualenvwrapper.sh)
else
    echo "WARNING: Can't find virtualenvwrapper.sh"
fi
