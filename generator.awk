BEGIN{
	print "<!DOCTYPE NETSCAPE-Bookmark-file-1>"
	print "<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">"
	print "<TITLE>Bookmarks</TITLE>"
	print "<DL><p>"
	print "<DT><H3>Searches</H3>"
	print "<DL><p>"
<H1>Bookmarks Menu</H1>
}
	print "<DI><A HREF="""
	print $3
	print "" SHORTCUTURL=""" $2
	print """>"
	print "Search " + $1
	print "</A>"
END{
	print "</DL><p>"
	print "</DL><p>"
}