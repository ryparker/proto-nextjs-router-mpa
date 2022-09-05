#!/usr/bin/env bash

read -p "What's the path of the SVG file?"$'\npublic/svgs/' SVG_PATH

SOURCE_DIR="$(dirname SVG_PATH)"
FILE_NAME="$(basename -s .svg "${SVG_PATH}")"
SOURCE="public/svgs/${SOURCE_DIR}/${FILE_NAME}.svg"
test -f "$SOURCE" || { echo "File not found: $SOURCE"; exit 1; }

read -p "Should the SVG be outlined instead of filled? (y/n)"$'\n' SHOULD_OUTLINE

ARGS=("--typescript" "--no-dimensions")

SHOULD_OUTLINE=${SHOULD_OUTLINE,,}    # tolower
if [[ "$SHOULD_OUTLINE" =~ ^(yes|y)$ ]]
then
  ARGS+=("--svg-props fill=none")
  ARGS+=("--svg-props stroke=currentColor")
else
  ARGS+=("--svg-props fill=currentColor")
  ARGS+=("--svg-props stroke=none")
fi


TARGET_DIR="src/svgs/${SOURCE_DIR}"
TARGET="${TARGET_DIR}/${FILE_NAME^}.tsx"

echo "Converting $SOURCE to React component…"
mkdir -p $TARGET_DIR
npx -y @svgr/cli $(printf '%s ' "${ARGS[@]}")-- $SOURCE > $TARGET
echo "New component generated at $TARGET"
