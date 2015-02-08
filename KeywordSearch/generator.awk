BEGIN{
	printf "<!DOCTYPE NETSCAPE-Bookmark-file-1>"
	printf "<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">"
	printf "<TITLE>Bookmarks</TITLE>"
	printf "<DL><p>"
	printf "<DT><H3>Searches</H3>"
	printf "<DL><p>"
	printf "<H1>Bookmarks Menu</H1>"
}
{
	printf ("<DI><A HREF=\"")
	print $3
	printf "\" SHORTCUTURL=\"" 
	printf $2
	printf "\">"
	printf "Search " + $1
	printf "</A>"
}
END{
	printf "</DL><p>"
	printf "</DL><p>"
}