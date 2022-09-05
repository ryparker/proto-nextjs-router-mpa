# @see https://github.com/zachleat/glyphhanger
# @see https://web.dev/font-best-practices/

read -p "Are you checking prod? (i.e. https://congress.wiki) (y/n)"$'\n' IS_PROD

BASE_URL=''

if [[ "$IS_PROD" =~ ^(yes|y)$ ]]
then
  BASE_URL="https://congress.wiki"
else
  read -p "What's the base URL? (i.g. https://congress.wiki)"$'\n' BASE_URL
fi

ENDPOINTS=("/" "/elected-officials" "/about" "/legislation/hr1-117" "/elected-official/K000367" "/user/ryparker")

echo "Running font analysis on $(printf "$BASE_URL%s " "${ENDPOINTS[@]}")"
glyphhanger $(printf "$BASE_URL%s " "${ENDPOINTS[@]}")
