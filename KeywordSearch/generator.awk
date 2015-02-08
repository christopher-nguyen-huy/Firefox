BEGIN{
	FS="\t"
	printf "<!DOCTYPE NETSCAPE-Bookmark-file-1>\n"
	printf "<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">\n"
	printf "<TITLE>Bookmarks</TITLE>\n"
	printf "<H1>Bookmarks Menu</H1>\n"
	printf "<DL><p>\n"
	printf "\t<DT><H3>Searches</H3>\n"
	printf "\t<DL><p>\n"
}
{
	printf ("<DI><A HREF=\"")
	printf ("%s",$3)
	printf "\" SHORTCUTURL=\"" 
	printf $2
	printf "\">"
	printf ("%s %s","Search", $1)
	printf "</A>"
	printf "\n"
}
END{
	printf "\t</DL><p>\n"
	printf "</DL><p>"
}