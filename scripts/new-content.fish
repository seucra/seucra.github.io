#!/usr/bin/env fish

if test (count $argv) -ne 2
    echo "Usage:"
    echo "    new-content <collection> <slug>"
    exit 1
end

set COLLECTION $argv[1]
set SLUG $argv[2]

set TEMPLATE templates/$COLLECTION
set DEST content/$COLLECTION/$SLUG

if not test -d $TEMPLATE
    echo "Template '$COLLECTION' not found."
    exit 1
end

if test -e $DEST
    echo "'$DEST' already exists."
    exit 1
end

mkdir -p (dirname $DEST)

cp -R $TEMPLATE $DEST

echo "Created:"
echo "    $DEST"
